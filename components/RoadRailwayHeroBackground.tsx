"use client"
import { Canvas, useFrame } from "@react-three/fiber"
import { useRef, useMemo, useState, useEffect } from "react"
import * as THREE from "three"

// Road & Railway Corridor Animation
function CorridorScene() {
    const groupRef = useRef<THREE.Group>(null)
    const [scanProgress, setScanProgress] = useState(0)

    // Gentle rotation
    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y = -0.3 + (state.clock.elapsedTime * 0.02)
        }
    })

    // Scan Loop
    useEffect(() => {
        const interval = setInterval(() => {
            setScanProgress((prev) => {
                if (prev >= 1.1) return 0
                return prev + 0.004
            })
        }, 20)
        return () => clearInterval(interval)
    }, [])

    return (
        <group ref={groupRef}>
            <TerrainMesh />
            <CorridorAlignment progress={scanProgress} />
        </group>
    )
}

function TerrainMesh() {
    // A slightly more complex terrain to show "Cut & Fill"
    const geometry = useMemo(() => {
        const geo = new THREE.PlaneGeometry(30, 30, 32, 32)
        const posAttribute = geo.attributes.position

        for (let i = 0; i < posAttribute.count; i++) {
            const x = posAttribute.getX(i)
            const y = posAttribute.getY(i)
            // Rolling hills
            const z = Math.sin(x * 0.2) * 2 + Math.cos(y * 0.2) * 2 + Math.random() * 0.2
            posAttribute.setZ(i, z)
        }
        geo.computeVertexNormals()
        return geo
    }, [])

    return (
        <group rotation={[-Math.PI / 2, 0, 0]} position={[0, -5, 0]}>
            <mesh geometry={geometry}>
                <meshBasicMaterial color="#334155" wireframe transparent opacity={0.1} />
            </mesh>
            {/* Grid for reference */}
            <gridHelper args={[35, 35, "#334155", "#0f172a"]} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0.05]} material-opacity={0.1} material-transparent />
        </group>
    )
}

function CorridorAlignment({ progress }: { progress: number }) {
    // S-Curve Alignment
    const curve = useMemo(() => {
        return new THREE.CatmullRomCurve3([
            new THREE.Vector3(-12, -1, 10),
            new THREE.Vector3(-5, 0, 4),
            new THREE.Vector3(5, 0, -4),
            new THREE.Vector3(12, 1, -10),
        ])
    }, [])

    // Generate segments for progressive rendering
    const segmentCount = 100
    const points = useMemo(() => curve.getSpacedPoints(segmentCount), [curve])

    // Scanner Position
    const scannerPos = curve.getPointAt(Math.min(1, Math.max(0, progress)))
    const scannerTangent = curve.getTangentAt(Math.min(1, Math.max(0, progress)))

    return (
        <group>
            {/* The Constructed Corridor */}
            {points.map((pt, i) => {
                if (i === points.length - 1) return null
                const nextPt = points[i + 1]
                const segmentProgress = i / segmentCount

                // Only show segments behind the scanner
                if (segmentProgress > progress) return null

                const midX = (pt.x + nextPt.x) / 2
                const midY = (pt.y + nextPt.y) / 2
                const midZ = (pt.z + nextPt.z) / 2

                // Orientation
                const tangent = new THREE.Vector3().subVectors(nextPt, pt).normalize()
                const angleY = Math.atan2(tangent.x, tangent.z)
                const dist = pt.distanceTo(nextPt)

                return (
                    <group key={`seg-${i}`} position={[midX, midY, midZ]} rotation={[0, angleY, 0]}>
                        {/* Road Section (Left) */}
                        <mesh position={[-1.2, 0, 0]}>
                            <boxGeometry args={[2, 0.2, dist * 1.05]} />
                            <meshStandardMaterial color="#1e293b" /> {/* Asphalt */}
                            {/* White Lines */}
                            <mesh position={[0, 0.11, 0]}>
                                <planeGeometry args={[0.1, dist]} rotation={[-Math.PI / 2, 0, 0]} />
                                <meshBasicMaterial color="white" />
                            </mesh>
                        </mesh>

                        {/* Rail Section (Right) */}
                        <mesh position={[1.2, 0.1, 0]}>
                            <boxGeometry args={[1.5, 0.4, dist * 1.05]} />
                            <meshStandardMaterial color="#94a3b8" /> {/* Ballast */}
                            {/* Rails */}
                            <mesh position={[-0.4, 0.25, 0]}>
                                <boxGeometry args={[0.1, 0.1, dist]} />
                                <meshBasicMaterial color="#cbd5e1" />
                            </mesh>
                            <mesh position={[0.4, 0.25, 0]}>
                                <boxGeometry args={[0.1, 0.1, dist]} />
                                <meshBasicMaterial color="#cbd5e1" />
                            </mesh>
                            {/* Sleepers (Travers) - Simplified as texture or periodic objects?? 
                                 Too heavy to add separate mesh for every sleeper. 
                                 Just suggest them with texture or simple color.
                             */}
                        </mesh>

                        {/* Earthworks (Cut/Fill indicator below) */}
                        {/* If segment is visibly "cutting" or "filling" - simplified visuals */}
                        <mesh position={[0, -2, 0]}>
                            <boxGeometry args={[4, 4, dist]} />
                            <meshBasicMaterial color="#64748b" transparent opacity={0.3} wireframe />
                        </mesh>
                    </group>
                )
            })}

            {/* The Scanner Plane (Active Front) */}
            {progress < 1 && (
                <group position={scannerPos}>
                    {/* Orient to tangent */}
                    <mesh rotation={[0, Math.atan2(scannerTangent.x, scannerTangent.z), 0]}>
                        <planeGeometry args={[6, 6]} />
                        <meshBasicMaterial color="#3b82f6" transparent opacity={0.2} side={THREE.DoubleSide} />
                        <lineSegments>
                            <edgesGeometry args={[new THREE.PlaneGeometry(6, 6)]} />
                            <lineBasicMaterial color="#60a5fa" />
                        </lineSegments>
                    </mesh>
                </group>
            )}
        </group>
    )
}


export default function RoadRailwayHeroBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute right-0 top-0 bottom-0 w-full opacity-90">
                <Canvas
                    camera={{ position: [8, 5, 8], fov: 45 }}
                    style={{ background: 'transparent' }}
                >
                    <ambientLight intensity={0.6} />
                    <pointLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
                    <directionalLight position={[-5, 5, -2]} intensity={0.5} />

                    <group position={[2, 0, -2]}>
                        <CorridorScene />
                    </group>
                </Canvas>
            </div>
        </div>
    )
}
