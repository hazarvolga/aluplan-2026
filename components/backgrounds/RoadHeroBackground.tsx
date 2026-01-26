"use client"
import { Canvas, useFrame } from "@react-three/fiber"
import { useRef, useMemo, useState, useEffect } from "react"
import * as THREE from "three"

// Specs
const ROAD_WIDTH = 3
const PATH_RADIUS = 20

// 3D Path with Elevation
const RoadPath = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-25, -2, -5),   // Start Low
    new THREE.Vector3(-15, 0, 5),     // Rise & Turn
    new THREE.Vector3(0, 3, 0),       // Peak
    new THREE.Vector3(15, 1, -8),     // Drop & Turn
    new THREE.Vector3(25, -1, 5)      // End
], false, 'catmullrom', 0.5)

function Terrain({ progress }: { progress: number }) {
    // Procedural Grid that looks like stylized topography
    const geometry = useMemo(() => {
        const geo = new THREE.PlaneGeometry(60, 40, 40, 20)
        const pos = geo.attributes.position
        for (let i = 0; i < pos.count; i++) {
            const x = pos.getX(i)
            const y = pos.getY(i) // Actually Z in plane logic, but we rotate -90
            // Sine waves for hills
            const z = Math.sin(x * 0.1) * 2 + Math.cos(y * 0.2) * 2
            pos.setZ(i, z)
        }
        geo.computeVertexNormals()
        return geo
    }, [])

    return (
        <group rotation={[-Math.PI / 2, 0, 0]} position={[0, -4, 0]}>
            <lineSegments>
                <wireframeGeometry args={[geometry]} />
                <lineBasicMaterial color="#1e40af" transparent opacity={0.3 * progress} linewidth={1} />
            </lineSegments>
            <mesh geometry={geometry}>
                <meshBasicMaterial color="#0f172a" transparent opacity={0.6 * progress} />
            </mesh>
        </group>
    )
}

function AlignmentCurve({ progress }: { progress: number }) {
    const points = useMemo(() => RoadPath.getPoints(100), [])
    return (
        <line>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={points.length}
                    array={new Float32Array(points.flatMap(p => [p.x, p.y + 0.2, p.z]))} // Lift slightly above road
                    itemSize={3}
                />
            </bufferGeometry>
            {/* Dashed line effect simulation via opacity or gaps? simple solid for now */}
            <lineBasicMaterial color="#ef4444" linewidth={3} transparent opacity={progress} />
        </line>
    )
}

function CrossSections({ progress }: { progress: number }) {
    // Animated profiles "scanning" the road
    // We show 5-6 profiles fixed? Or moving?
    // Let's show profiles appearing along the curve

    // Count of profiles
    const count = 12

    return (
        <group>
            {Array.from({ length: count }).map((_, i) => {
                const t = i / (count - 1)
                const isVisible = progress > t

                if (!isVisible) return null

                const pt = RoadPath.getPointAt(t)
                const tangent = RoadPath.getTangentAt(t)

                // Rotation to look along tangent
                // LookAt logic
                const dummy = new THREE.Object3D()
                dummy.position.copy(pt)
                dummy.lookAt(pt.clone().add(tangent))

                return (
                    <group key={i} position={pt} quaternion={dummy.quaternion}>
                        {/* Cross Section Frame (The "Cut" plane) */}
                        <lineSegments>
                            <bufferGeometry>
                                <bufferAttribute
                                    attach="attributes-position"
                                    count={5}
                                    array={new Float32Array([
                                        -3, -1, 0,
                                        -ROAD_WIDTH / 2, 0, 0,
                                        ROAD_WIDTH / 2, 0, 0,
                                        3, -1, 0,
                                        -3, -1, 0 // Close loop
                                    ])}
                                    itemSize={3}
                                />
                            </bufferGeometry>
                            <lineBasicMaterial color="#60a5fa" transparent opacity={0.5} />
                        </lineSegments>
                        {/* Center Pole */}
                        <lineSegments>
                            <bufferGeometry>
                                <bufferAttribute
                                    attach="attributes-position"
                                    count={2}
                                    array={new Float32Array([
                                        0, 0, 0,
                                        0, 2, 0
                                    ])}
                                    itemSize={3}
                                />
                            </bufferGeometry>
                            <lineBasicMaterial color="#fca5a5" transparent opacity={0.8} />
                        </lineSegments>
                    </group>
                )
            })}
        </group>
    )
}

function RoadCorridor({ progress }: { progress: number }) {
    const tubeGeo = useMemo(() => new THREE.TubeGeometry(RoadPath, 100, ROAD_WIDTH / 2, 8, false), [])

    // To "grow" the tube, easier to mask it or just construct partial tubes?
    // Partial tube reconstruction is heavy.
    // Let's use opacity fade on the whole thing (simplification)
    // Or dash offset.
    // Let's settle for simple reveal: The whole tube is there but we scan it?
    // Actually, "Complex Structure" needs volume.

    // Let's render the road surface + curbs

    return (
        <group>
            {/* Asphalt */}
            <mesh geometry={tubeGeo}>
                <meshStandardMaterial
                    color="#475569"
                    transparent
                    opacity={progress * 0.9}
                    side={THREE.DoubleSide}
                    roughness={0.8}
                />
            </mesh>
            {/* Wireframe Overlay */}
            <mesh geometry={tubeGeo}>
                <meshBasicMaterial
                    color="#94a3b8"
                    wireframe
                    transparent
                    opacity={progress * 0.3}
                />
            </mesh>

            {/* Vehicle / Flow Simulation (Dots moving) */}
            {progress > 0.8 && (
                <TrafficFlow />
            )}
        </group>
    )
}

function TrafficFlow() {
    // Particles moving along path
    const count = 20
    const [offsets] = useState(() => Float32Array.from({ length: count }, () => Math.random()))

    const dummy = useMemo(() => new THREE.Object3D(), [])
    const ref = useRef<THREE.InstancedMesh>(null)

    useFrame((state) => {
        if (!ref.current) return
        const time = state.clock.elapsedTime * 0.1

        for (let i = 0; i < count; i++) {
            let t = (offsets[i] + time) % 1
            const pt = RoadPath.getPointAt(t)
            const tan = RoadPath.getTangentAt(t)

            // Offset lanes (Left/Right)
            const side = i % 2 === 0 ? 0.8 : -0.8
            const normal = new THREE.Vector3(-tan.z, 0, tan.x).normalize().multiplyScalar(side)
            pt.add(normal)

            // Move slightly up
            pt.y += 0.2

            dummy.position.copy(pt)
            dummy.lookAt(pt.clone().add(tan))
            dummy.scale.set(0.5, 0.2, 1) // Car shape-ish
            dummy.updateMatrix()
            ref.current.setMatrixAt(i, dummy.matrix)
        }
        ref.current.instanceMatrix.needsUpdate = true
    })

    return (
        <instancedMesh ref={ref} args={[undefined, undefined, count]}>
            <boxGeometry args={[1, 1, 2]} />
            <meshBasicMaterial color="#ffffff" transparent opacity={0.6} />
        </instancedMesh>
    )
}

function RoadSequence({ globalTime }: { globalTime: number }) {
    // 0-3s: Terrain
    // 3-6s: Alignment (Red Line)
    // 6-9s: Cross Sections (Frames)
    // 9-15s: Corridor (Road) + Traffic

    const terrainP = Math.min(Math.max(globalTime / 3, 0), 1)
    const alignP = Math.min(Math.max((globalTime - 2) / 3, 0), 1)
    const sectionP = Math.min(Math.max((globalTime - 5) / 3, 0), 1)
    const corridorP = Math.min(Math.max((globalTime - 8) / 4, 0), 1)

    return (
        <group>
            <Terrain progress={terrainP} />
            <AlignmentCurve progress={alignP} />
            <CrossSections progress={sectionP} />
            <RoadCorridor progress={corridorP} />
        </group>
    )
}

function Orchestrator() {
    const [time, setTime] = useState(0)
    const [subtitle, setSubtitle] = useState("")

    useFrame((state, delta) => {
        const loopT = state.clock.elapsedTime % 16
        setTime(loopT)

        if (loopT < 3) window.dispatchEvent(new CustomEvent('road-subtitle', { detail: "DIGITAL TERRAIN MODEL" }))
        else if (loopT < 6) window.dispatchEvent(new CustomEvent('road-subtitle', { detail: "CENTERLINE ALIGNMENT" }))
        else if (loopT < 9) window.dispatchEvent(new CustomEvent('road-subtitle', { detail: "CROSS-SECTION PROFILES" }))
        else window.dispatchEvent(new CustomEvent('road-subtitle', { detail: "PARAMETRIC CORRIDOR MODEL" }))
    })

    return <RoadSequence globalTime={time} />
}

export default function RoadHeroBackground() {
    const [text, setText] = useState("INFRASTRUCTURE BIM")

    useEffect(() => {
        const handler = (e: any) => setText(e.detail)
        window.addEventListener('road-subtitle', handler)
        return () => window.removeEventListener('road-subtitle', handler)
    }, [])

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute right-0 top-0 bottom-0 w-full opacity-80">
                <Canvas
                    camera={{ position: [20, 20, 40], fov: 35 }}
                    style={{ background: 'transparent' }}
                >
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[-10, 20, 10]} intensity={1} />

                    {/* Shift Right: X=10, Y=-5 */}
                    <group position={[10, -5, 0]}>
                        <Orchestrator />
                    </group>
                </Canvas>
            </div>
            <div className="absolute bottom-10 right-10 text-right z-0">
                <div className="text-xs font-mono text-red-500 tracking-widest mb-1">ALLPLAN ROADS</div>
                <div className="text-2xl font-bold text-slate-200 tracking-tight transition-all duration-300">{text}</div>
                <div className="h-1 w-32 bg-red-600 ml-auto mt-2 rounded-full animate-pulse"></div>
            </div>
        </div>
    )
}
