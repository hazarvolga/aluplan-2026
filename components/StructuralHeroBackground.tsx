"use client"
import { Canvas, useFrame } from "@react-three/fiber"
import { useRef, useMemo, useState, useEffect } from "react"
import * as THREE from "three"

// Structural Reinforcement Node Animation
function ReinforcementNode() {
    const groupRef = useRef<THREE.Group>(null)
    const [assemblyProgress, setAssemblyProgress] = useState(0)

    // Continuous rotation
    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y = state.clock.elapsedTime * 0.15
            groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.05
        }
    })

    // Assembly Animation Loop
    useEffect(() => {
        const interval = setInterval(() => {
            setAssemblyProgress((prev) => {
                if (prev >= 1.2) {
                    return 0
                }
                return prev + 0.004
            })
        }, 40)

        return () => clearInterval(interval)
    }, [])

    // 1. Ghost Concrete Column (Wireframe Box)
    const concreteOpacity = Math.min(assemblyProgress * 2, 0.15)

    // 2. Vertical Main Bars (Boyuna Donatılar)
    const mainBars = useMemo(() => {
        const bars = []
        const count = 8
        const radius = 0.8
        const height = 6

        for (let i = 0; i < count; i++) {
            const angle = (i / count) * Math.PI * 2
            const x = Math.cos(angle) * radius
            const z = Math.sin(angle) * radius

            // Staggered vertical growth appearance
            const startDelay = i * 0.05
            const barProgress = Math.max(0, Math.min(1, (assemblyProgress - startDelay) * 3))

            if (barProgress > 0) {
                bars.push(
                    <mesh key={`vbar-${i}`} position={[x, (barProgress * height / 2) - (height / 2), z]}>
                        <cylinderGeometry args={[0.08, 0.08, barProgress * height, 16]} />
                        <meshStandardMaterial color="#ef4444" roughness={0.3} metalness={0.8} />
                    </mesh>
                )
            }
        }
        return bars
    }, [assemblyProgress])

    // 3. Stirrups (Etriyeler) - Rectangular
    const stirrups = useMemo(() => {
        const items = []
        const count = 12
        const spacing = 0.4
        const startY = -2.2
        const size = 1.3 // slightly larger than main bars circle

        const stirrupShape = new THREE.Shape()
        const s = size / 2
        stirrupShape.moveTo(-s, -s)
        stirrupShape.lineTo(s, -s)
        stirrupShape.lineTo(s, s)
        stirrupShape.lineTo(-s, s)
        stirrupShape.lineTo(-s, -s)

        for (let i = 0; i < count; i++) {
            // Appear after main bars
            const appearThreshold = 0.3 + (i * 0.04)

            if (assemblyProgress > appearThreshold) {
                const y = startY + (i * spacing)
                // "Slide down" effect logic or simple fade in?
                // Let's do a scale pop-in
                const localProgress = Math.min(1, (assemblyProgress - appearThreshold) * 5)
                const scale = 0.5 + (localProgress * 0.5)
                const opacity = localProgress

                items.push(
                    <group key={`stirrup-${i}`} position={[0, y, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[scale, scale, scale]}>
                        {/* Tube for stirrup volume */}
                        <lineSegments>
                            <edgesGeometry args={[new THREE.BoxGeometry(size, size, 0.05)]} />
                            <lineBasicMaterial color="#eab308" transparent opacity={opacity} linewidth={2} />
                        </lineSegments>
                        <mesh>
                            <boxGeometry args={[size, size, 0.02]} />
                            <meshStandardMaterial color="#fbbf24" transparent opacity={opacity * 0.3} side={THREE.DoubleSide} />
                        </mesh>
                    </group>
                )
            }
        }
        return items
    }, [assemblyProgress])

    // 4. Horizontal Beam Bars (Connecting)
    const beamBars = useMemo(() => {
        const bars = []
        const count = 4
        const length = 4
        // Appear later
        const startThreshold = 0.6

        if (assemblyProgress > startThreshold) {
            for (let i = 0; i < count; i++) {
                const xOffset = ((i % 2) - 0.5) * 1.0
                const yOffset = (Math.floor(i / 2) - 0.5) * 1.0 + 1.2

                const localProgress = Math.min(1, (assemblyProgress - startThreshold - (i * 0.05)) * 3)

                if (localProgress > 0) {
                    bars.push(
                        <mesh key={`hbar-${i}`} position={[2 + (localProgress * length / 2) - length, yOffset, xOffset]} rotation={[0, 0, Math.PI / 2]}>
                            <cylinderGeometry args={[0.07, 0.07, localProgress * length, 16]} />
                            <meshStandardMaterial color="#3b82f6" roughness={0.3} metalness={0.8} />
                        </mesh>
                    )
                }
            }
        }
        return bars
    }, [assemblyProgress])

    return (
        <group ref={groupRef}>
            {/* Ghost Concrete Column */}
            <mesh>
                <boxGeometry args={[2.5, 7, 2.5]} />
                <meshBasicMaterial color="#ffffff" transparent opacity={concreteOpacity} wireframe />
            </mesh>

            {/* Ghost Horizontal Beam Stub */}
            <mesh position={[2, 1.2, 0]}>
                <boxGeometry args={[4, 2, 2]} />
                <meshBasicMaterial color="#ffffff" transparent opacity={concreteOpacity} wireframe />
            </mesh>

            {mainBars}
            {stirrups}
            {beamBars}

            {/* Dynamic Grid */}
            <gridHelper args={[10, 10, "#475569", "#1e293b"]} position={[0, -4, 0]} material-opacity={0.2} material-transparent />
        </group>
    )
}

// Main Component
export default function StructuralHeroBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Position: Right oriented */}
            <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-90">
                <Canvas
                    camera={{ position: [5, 4, 6], fov: 45 }}
                    style={{ background: 'transparent' }}
                >
                    {/* Lighting optimized for metallic materials */}
                    <ambientLight intensity={0.4} />
                    <pointLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" />
                    <spotLight position={[-5, 5, 2]} intensity={1} angle={0.5} penumbra={1} color="#60a5fa" />

                    <ReinforcementNode />
                </Canvas>
            </div>
        </div>
    )
}
