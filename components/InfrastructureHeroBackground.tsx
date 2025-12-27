"use client"
import { Canvas, useFrame } from "@react-three/fiber"
import { useRef, useMemo, useState, useEffect } from "react"
import * as THREE from "three"

// Infrastructure Bridge Construction Animation
function InfrastructureScene() {
    const groupRef = useRef<THREE.Group>(null)
    const [buildProgress, setBuildProgress] = useState(0)

    // Continuous gentle rotation of the whole scene
    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y = -0.4 + (state.clock.elapsedTime * 0.03)
        }
    })

    // Construction Loop
    useEffect(() => {
        const interval = setInterval(() => {
            setBuildProgress((prev) => {
                if (prev >= 1.2) {
                    return 0
                }
                return prev + 0.003
            })
        }, 30)
        return () => clearInterval(interval)
    }, [])

    return (
        <group ref={groupRef}>
            <BridgeConstruction progress={buildProgress} />
            <TerrainMesh />
            {/* Fog to blend distant parts? Maybe just opacity */}
        </group>
    )
}

function TerrainMesh() {
    // A wireframe landscape
    const geometry = useMemo(() => {
        const geo = new THREE.PlaneGeometry(30, 30, 24, 24)
        const posAttribute = geo.attributes.position

        for (let i = 0; i < posAttribute.count; i++) {
            const x = posAttribute.getX(i)
            const y = posAttribute.getY(i) // Actually Z in plane, but we rotate it
            // Simple wavy terrain
            const z = Math.sin(x * 0.3) * 1.5 + Math.cos(y * 0.3) * 1.5
            posAttribute.setZ(i, z)
        }
        geo.computeVertexNormals()
        return geo
    }, [])

    return (
        <group rotation={[-Math.PI / 2, 0, 0]} position={[0, -4, 0]}>
            <mesh geometry={geometry}>
                <meshBasicMaterial color="#1e3a8a" wireframe transparent opacity={0.15} />
            </mesh>
            {/* Grid helper for scale reference */}
            <gridHelper args={[30, 30, "#1e3a8a", "#172554"]} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0.1]} material-opacity={0.1} material-transparent />
        </group>
    )
}

function BridgeConstruction({ progress }: { progress: number }) {
    // Define Bridge Path (Curve)
    const curve = useMemo(() => {
        return new THREE.CatmullRomCurve3([
            new THREE.Vector3(-10, 0, 8),
            new THREE.Vector3(-4, 0, 2),
            new THREE.Vector3(4, 0, -2),
            new THREE.Vector3(10, 0, -6),
        ])
    }, [])

    // Generate Piers and Deck positions
    const { piers, segments } = useMemo(() => {
        const pPoints = []
        const sPoints = []

        const pierCount = 4
        const segmentCount = 20

        // Piers
        for (let i = 1; i < pierCount + 1; i++) {
            const t = i / (pierCount + 1)
            const pos = curve.getPoint(t)
            pPoints.push({ pos, t })
        }

        // Deck Segments
        for (let i = 0; i < segmentCount; i++) {
            const t = i / (segmentCount - 1)
            const pos = curve.getPoint(t)
            const tangent = curve.getTangent(t)
            sPoints.push({ pos, tangent, t })
        }

        return { piers: pPoints, segments: sPoints }
    }, [curve])

    return (
        <group>
            {/* Piers */}
            {piers.map((pier, i) => {
                // Piers appear first (0.0 - 0.3)
                const startT = 0.0 + (i * 0.05)
                const localProgress = Math.min(1, Math.max(0, (progress - startT) * 4))

                const height = pier.pos.y - (-4) // From curve Y to terrain Y (-4)
                // Or terrain is dynamic, let's assume piers go down to -4 base

                if (localProgress <= 0) return null

                return (
                    <mesh key={`pier-${i}`} position={[pier.pos.x, -4 + (height / 2) * localProgress, pier.pos.z]}>
                        <boxGeometry args={[1, height * localProgress, 1]} />
                        <meshStandardMaterial color="#64748b" transparent opacity={0.8} />
                        <lineSegments>
                            <edgesGeometry args={[new THREE.BoxGeometry(1, height * localProgress, 1)]} />
                            <lineBasicMaterial color="#94a3b8" transparent opacity={0.5} />
                        </lineSegments>
                    </mesh>
                )
            })}

            {/* Deck Segments */}
            {/* Deck Segments */}
            {segments.map((seg, i) => {
                // Deck appears after piers (0.3 - 1.0)
                const startT = 0.3 + (i * 0.03)
                const isVisible = progress > startT

                // Animate fly-in from above?
                const localProgress = Math.min(1, Math.max(0, (progress - startT) * 3))

                if (!isVisible) return null

                // Calculate rotation from tangent
                // tangent is Vector3 direction. 
                const angleY = Math.atan2(seg.tangent.x, seg.tangent.z)

                const yOffset = (1 - localProgress) * 5 // Falls from 5 units above
                const opacity = localProgress

                return (
                    <group key={`deck-${i}`} position={[seg.pos.x, seg.pos.y + yOffset, seg.pos.z]} rotation={[0, angleY, 0]}>
                        <mesh>
                            <boxGeometry args={[2.5, 0.4, 1.2]} />
                            <meshStandardMaterial color="#cbd5e1" transparent opacity={opacity} />
                        </mesh>
                    </group>
                )
            })}

            {/* Continuous Road Surface (Asphalt) transforming from segments */}
            <RoadSurface curve={curve} progress={progress} />

            {/* Moving Cars (Particles) */}
            <TrafficFlow curve={curve} progress={progress} />
        </group>
    )
}

function RoadSurface({ curve, progress }: { curve: THREE.Curve<THREE.Vector3>, progress: number }) {
    // Generate the full road geometry once but reveal it progressively
    // We can simulate "merging" by having a black ribbon grow closely behind the segments

    // Create a tube with rectangular profile to look like a road
    const roadScroll = Math.max(0, (progress - 0.35) / 0.6) // Starts appearing when segments start landing

    // Hack: Use many small segments matching the curve resolution that fade in.
    const segmentCount = 60
    const points = useMemo(() => curve.getSpacedPoints(segmentCount), [curve])

    return (
        <group>
            {points.map((pt, i) => {
                if (i === points.length - 1) return null
                const nextPt = points[i + 1]
                const segmentProgress = i / segmentCount

                // Reveal logic: trails the falling blocks
                const revealThreshold = segmentProgress

                // Fade in smoothly
                const localAlpha = Math.min(1, Math.max(0, (roadScroll - revealThreshold) * 10))

                if (localAlpha <= 0) return null

                const midX = (pt.x + nextPt.x) / 2
                const midY = (pt.y + nextPt.y) / 2
                const midZ = (pt.z + nextPt.z) / 2

                // Orientation
                const tangent = new THREE.Vector3().subVectors(nextPt, pt).normalize()
                const angleY = Math.atan2(tangent.x, tangent.z)
                const dist = pt.distanceTo(nextPt)

                return (
                    <mesh key={`road-${i}`} position={[midX, midY + 0.21, midZ]} rotation={[0, angleY, 0]}>
                        {/* Thin Asphalt Layer on top of concrete */}
                        <boxGeometry args={[2.2, 0.05, dist * 1.05]} />
                        <meshStandardMaterial color="#0f172a" transparent opacity={localAlpha} roughness={0.9} />
                    </mesh>
                )
            })}
        </group>
    )
}

function TrafficFlow({ curve, progress }: { curve: THREE.Curve<THREE.Vector3>, progress: number }) {
    // Only show traffic when bridge is mostly done
    if (progress < 0.8) return null

    // Create instanced particles moving along curve
    return (
        <FlowParticlesPath curve={curve} count={8} color="#ef4444" size={0.15} speed={0.06} />
    )
}

function FlowParticlesPath({ curve, count, color, size, speed }: any) {
    const particles = useMemo(() => {
        const temp = []
        for (let i = 0; i < count; i++) {
            temp.push({
                offset: Math.random(),
                speed: speed * (0.9 + Math.random() * 0.2)
            })
        }
        return temp
    }, [count, speed])

    const meshRef = useRef<THREE.InstancedMesh>(null)
    const dummy = new THREE.Object3D()

    useFrame((state) => {
        if (!meshRef.current) return
        const time = state.clock.elapsedTime

        particles.forEach((p: any, i: number) => {
            let progression = (p.offset + (time * p.speed)) % 1
            const pos = curve.getPoint(progression)
            // Add slight Y offset to sit ON the bridge
            dummy.position.set(pos.x, pos.y + 0.3, pos.z)

            const s = size
            dummy.scale.set(s, s, s)
            dummy.updateMatrix()
            meshRef.current!.setMatrixAt(i, dummy.matrix)
        })
        meshRef.current.instanceMatrix.needsUpdate = true
    })

    return (
        <instancedMesh ref={meshRef} args={[null as any, null as any, count]}>
            <sphereGeometry args={[1, 8, 8]} />
            <meshBasicMaterial color={color} />
        </instancedMesh>
    )
}

// Main Component
export default function InfrastructureHeroBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute right-0 top-0 bottom-0 w-full opacity-90">
                <Canvas
                    // Isometric-ish but perspective for depth of bridge
                    camera={{ position: [8, 6, 12], fov: 45 }}
                    style={{ background: 'transparent' }}
                >
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
                    <directionalLight position={[-5, 5, -2]} intensity={0.5} color="#93c5fd" />

                    <group position={[2, 0, -2]}>
                        <InfrastructureScene />
                    </group>
                </Canvas>
            </div>
        </div>
    )
}
