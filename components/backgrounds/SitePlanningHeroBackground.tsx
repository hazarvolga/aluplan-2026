"use client"
import { Canvas, useFrame } from "@react-three/fiber"
import { useRef, useMemo, useState, useEffect } from "react"
import * as THREE from "three"

// --- Primitives ---

function TerrainMesh({ progress, color = "#1e293b", gridColor = "#334155" }: any) {
    // A flat terrain with a 'pit' in the middle.
    // Instead of boolean, we can just model the pit geometry specifically.
    // Pit: 4 walls + floor.
    // Ground: Plane with hole? Or 4 surrounding planes.

    // Let's use 4 surrounding planes to make the "Ground" and then deeper planes for Pit.

    const size = 20
    const pitSize = 6
    const pitDepth = 2

    return (
        <group>
            {/* Ground Planes (Surrounding Pit) */}
            <mesh position={[-pitSize / 2 - (size - pitSize) / 4, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[(size - pitSize) / 2, size]} />
                <meshStandardMaterial color={color} wireframe={false} polygonOffset polygonOffsetFactor={1} />
                <lineSegments> <wireframeGeometry args={[new THREE.PlaneGeometry((size - pitSize) / 2, size, 4, 8)]} /> <lineBasicMaterial color={gridColor} /> </lineSegments>
            </mesh>
            <mesh position={[pitSize / 2 + (size - pitSize) / 4, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[(size - pitSize) / 2, size]} />
                <meshStandardMaterial color={color} polygonOffset polygonOffsetFactor={1} />
                <lineSegments> <wireframeGeometry args={[new THREE.PlaneGeometry((size - pitSize) / 2, size, 4, 8)]} /> <lineBasicMaterial color={gridColor} /> </lineSegments>
            </mesh>
            <mesh position={[0, 0, -pitSize / 2 - (size - pitSize) / 4]} rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[pitSize, (size - pitSize) / 2]} />
                <meshStandardMaterial color={color} polygonOffset polygonOffsetFactor={1} />
                <lineSegments> <wireframeGeometry args={[new THREE.PlaneGeometry(pitSize, (size - pitSize) / 2, 2, 4)]} /> <lineBasicMaterial color={gridColor} /> </lineSegments>
            </mesh>
            <mesh position={[0, 0, pitSize / 2 + (size - pitSize) / 4]} rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[pitSize, (size - pitSize) / 2]} />
                <meshStandardMaterial color={color} polygonOffset polygonOffsetFactor={1} />
                <lineSegments> <wireframeGeometry args={[new THREE.PlaneGeometry(pitSize, (size - pitSize) / 2, 2, 4)]} /> <lineBasicMaterial color={gridColor} /> </lineSegments>
            </mesh>

            {/* PIT (Excavation) */}
            <group scale={[1, progress, 1]} position={[0, -pitDepth / 2 * progress, 0]}>
                {/* Floor */}
                <mesh position={[0, -pitDepth / 2 + 0.05, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                    <planeGeometry args={[pitSize, pitSize, 4, 4]} />
                    <meshStandardMaterial color="#334155" />
                    <lineSegments> <wireframeGeometry args={[new THREE.PlaneGeometry(pitSize, pitSize, 4, 4)]} /> <lineBasicMaterial color="#ef4444" transparent opacity={0.5} /> </lineSegments>
                </mesh>
                {/* Walls */}
                <mesh position={[0, 0, -pitSize / 2]} rotation={[0, 0, 0]}> <planeGeometry args={[pitSize, pitDepth]} /> <meshStandardMaterial color="#475569" /> </mesh>
                <mesh position={[0, 0, pitSize / 2]} rotation={[0, Math.PI, 0]}> <planeGeometry args={[pitSize, pitDepth]} /> <meshStandardMaterial color="#475569" /> </mesh>
                <mesh position={[-pitSize / 2, 0, 0]} rotation={[0, Math.PI / 2, 0]}> <planeGeometry args={[pitSize, pitDepth]} /> <meshStandardMaterial color="#475569" /> </mesh>
                <mesh position={[pitSize / 2, 0, 0]} rotation={[0, -Math.PI / 2, 0]}> <planeGeometry args={[pitSize, pitDepth]} /> <meshStandardMaterial color="#475569" /> </mesh>
            </group>
        </group>
    )
}

function SiteFacilities({ progress }: { progress: number }) {
    if (progress <= 0) return null
    return (
        <group>
            {/* Fences - Perimeter */}
            <group scale={[1, progress, 1]}>
                <mesh position={[0, 0.5, -8]}> <boxGeometry args={[16, 1, 0.1]} /> <meshStandardMaterial color="#fbbf24" wireframe /> </mesh>
                <mesh position={[0, 0.5, 8]}> <boxGeometry args={[16, 1, 0.1]} /> <meshStandardMaterial color="#fbbf24" wireframe /> </mesh>
                <mesh position={[-8, 0.5, 0]} rotation={[0, Math.PI / 2, 0]}> <boxGeometry args={[16, 1, 0.1]} /> <meshStandardMaterial color="#fbbf24" wireframe /> </mesh>
                <mesh position={[8, 0.5, 0]} rotation={[0, Math.PI / 2, 0]}> <boxGeometry args={[16, 1, 0.1]} /> <meshStandardMaterial color="#fbbf24" wireframe /> </mesh>
            </group>

            {/* Portacabins */}
            <group position={[6, 0.75, 6]} scale={[progress, progress, progress]}>
                <mesh> <boxGeometry args={[3, 1.5, 3]} /> <meshStandardMaterial color="#f1f5f9" /> </mesh>
                <mesh position={[0, 0.8, 0]} scale={[1.05, 0.1, 1.05]}> <boxGeometry args={[3, 1, 3]} /> <meshStandardMaterial color="#334155" /> </mesh>
            </group>
            <group position={[6, 0.75, 2.5]} scale={[progress, progress, progress]}>
                <mesh> <boxGeometry args={[3, 1.5, 3]} /> <meshStandardMaterial color="#f1f5f9" /> </mesh>
                <mesh position={[0, 0.8, 0]} scale={[1.05, 0.1, 1.05]}> <boxGeometry args={[3, 1, 3]} /> <meshStandardMaterial color="#334155" /> </mesh>
            </group>

            {/* Site Road */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[6, 0.02, -2]} scale={[progress, 1, 1]}>
                <planeGeometry args={[2, 12]} />
                <meshStandardMaterial color="#475569" />
            </mesh>
        </group>
    )
}

function TowerCrane({ progress, rotation }: { progress: number, rotation: number }) {
    // Simple Crane geometry
    const height = 12 * progress
    const armLength = 10

    if (progress <= 0) return null

    return (
        <group position={[-6, 0, -6]}>
            {/* Base */}
            <mesh position={[0, 0.2, 0]}> <boxGeometry args={[1.5, 0.4, 1.5]} /> <meshStandardMaterial color="#fbbf24" /> </mesh>

            {/* Tower */}
            <mesh position={[0, height / 2, 0]}>
                <boxGeometry args={[0.8, height, 0.8]} />
                <meshStandardMaterial color="#fbbf24" wireframe />
            </mesh>

            {/* Cab & Arm */}
            <group position={[0, height, 0]} rotation={[0, rotation, 0]}>
                <mesh position={[0, 0.5, 0]}> <boxGeometry args={[1, 1, 1]} /> <meshStandardMaterial color="#334155" /> </mesh>
                {/* Jib */}
                <mesh position={[armLength / 2 - 1, 0.5, 0]}> <boxGeometry args={[armLength, 0.8, 0.8]} /> <meshStandardMaterial color="#fbbf24" wireframe /> </mesh>
                {/* Counter Jib */}
                <mesh position={[-2, 0.5, 0]}> <boxGeometry args={[4, 0.8, 0.8]} /> <meshStandardMaterial color="#fbbf24" /> </mesh>

                {/* Safety Radius Ring */}
                <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -height + 0.1, 0]}>
                    <ringGeometry args={[armLength - 0.5, armLength, 32]} />
                    <meshBasicMaterial color="#ef4444" transparent opacity={0.3} side={THREE.DoubleSide} />
                </mesh>
            </group>
        </group>
    )
}

function Truck({ progress, position }: { progress: number, position: THREE.Vector3 }) {
    if (progress <= 0) return null
    return (
        <group position={position} scale={[progress, progress, progress]}>
            <mesh position={[0, 0.5, 0]}> <boxGeometry args={[1, 0.8, 2.5]} /> <meshStandardMaterial color="#fbbf24" /> </mesh>
            <mesh position={[0, 0.8, 0.8]}> <boxGeometry args={[0.9, 0.6, 0.8]} /> <meshStandardMaterial color="#334155" /> </mesh>
        </group>
    )
}

// --- Scene Logic ---

function SiteSequence({ globalTime }: { globalTime: number }) {
    // Loop 16s
    const t = globalTime % 16

    // Phases
    const pitP = Math.min(Math.max((t - 0.5) / 3, 0), 1)
    const setupP = Math.min(Math.max((t - 4) / 3, 0), 1)
    const craneP = Math.min(Math.max((t - 7) / 4, 0), 1)

    // Simulation
    // Crane Rotation
    const craneRot = (t - 11) > 0 ? (t - 11) * 0.5 : 0
    // Truck Pos
    // Moves along road x=6, z= -8 to 4
    const truckP = Math.min(Math.max((t - 10) / 5, 0), 1)
    const truckZ = -8 + (12 * truckP)

    return (
        <group>
            {/* Terrain & Pit */}
            <TerrainMesh progress={pitP} />

            {/* Site Facilities */}
            <SiteFacilities progress={setupP} />

            {/* Crane */}
            <TowerCrane progress={craneP} rotation={craneRot} />

            {/* Truck */}
            <Truck progress={Math.min(setupP, truckP > 0 ? 1 : 0)} position={new THREE.Vector3(6, 0.1, truckZ)} />

            {/* Grid for Ref */}
            <gridHelper args={[40, 40, 0x0f172a, 0x0f172a]} position={[0, -0.1, 0]} />
        </group>
    )
}

function Orchestrator() {
    const [time, setTime] = useState(0)

    useFrame((state) => {
        const t = state.clock.elapsedTime
        setTime(t)

        const loopT = t % 16
        if (loopT < 4) window.dispatchEvent(new CustomEvent('site-subtitle', { detail: "EXCAVATION ANALYSIS" }))
        else if (loopT < 8) window.dispatchEvent(new CustomEvent('site-subtitle', { detail: "SITE FACILITIES & ACCESS" }))
        else if (loopT < 12) window.dispatchEvent(new CustomEvent('site-subtitle', { detail: "CRANE & SAFETY PLANNING" }))
        else window.dispatchEvent(new CustomEvent('site-subtitle', { detail: "LOGISTICS SIMULATION" }))
    })

    return <SiteSequence globalTime={time} />
}

export default function SitePlanningHeroBackground() {
    const [text, setText] = useState("SITE PLANNING")

    useEffect(() => {
        const handler = (e: any) => setText(e.detail)
        window.addEventListener('site-subtitle', handler)
        return () => window.removeEventListener('site-subtitle', handler)
    }, [])

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute right-0 top-0 bottom-0 w-full opacity-80">
                <Canvas
                    orthographic
                    camera={{ zoom: 35, position: [20, 20, 20], near: 0.1, far: 1000 }}
                    style={{ background: 'transparent' }}
                    shadows
                >
                    <ambientLight intensity={0.6} />
                    <directionalLight position={[-10, 20, 10]} intensity={1.5} castShadow />

                    {/* Position: Far Right & Higher */}
                    <group position={[15, -1, 5]}>
                        <Orchestrator />
                    </group>
                </Canvas>
            </div>
            <div className="absolute bottom-10 right-10 text-right z-0">
                <div className="text-xs font-mono text-blue-300 tracking-widest mb-1">DIGITAL CONSTRUCTION</div>
                <div className="text-2xl font-bold text-slate-200 tracking-tight transition-all duration-300">{text}</div>
                <div className="h-1 w-32 bg-blue-500 ml-auto mt-2 rounded-full animate-pulse"></div>
            </div>
        </div>
    )
}
