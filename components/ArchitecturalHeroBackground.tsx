"use client"
import { Canvas, useFrame } from "@react-three/fiber"
import { useRef, useMemo } from "react"
import * as THREE from "three"

// Rotating Wireframe Building Component
function WireframeBuilding() {
    const groupRef = useRef<THREE.Group>(null)

    // Slow rotation animation
    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y = state.clock.elapsedTime * 0.1
            groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.05) * 0.1
        }
    })

    // Create multiple building floors
    const floors = useMemo(() => {
        const floorArray = []
        const floorCount = 8
        const floorHeight = 0.8

        for (let i = 0; i < floorCount; i++) {
            floorArray.push(
                <mesh key={i} position={[0, i * floorHeight - 3, 0]}>
                    <boxGeometry args={[3, 0.6, 2]} />
                    <meshBasicMaterial
                        color="#3b82f6"
                        wireframe
                        transparent
                        opacity={0.3 + (i / floorCount) * 0.2}
                    />
                </mesh>
            )
        }
        return floorArray
    }, [])

    // Particles representing construction points
    const particles = useMemo(() => {
        const count = 100
        const positions = new Float32Array(count * 3)

        for (let i = 0; i < count; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 10
            positions[i * 3 + 1] = (Math.random() - 0.5) * 10
            positions[i * 3 + 2] = (Math.random() - 0.5) * 10
        }

        return positions
    }, [])

    return (
        <group ref={groupRef}>
            {/* Building Floors */}
            {floors}

            {/* Grid Helper */}
            <gridHelper args={[10, 10, "#3b82f6", "#1e40af"]} rotation={[0, 0, 0]} opacity={0.2} />

            {/* Particles */}
            <points>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        count={particles.length / 3}
                        array={particles}
                        itemSize={3}
                    />
                </bufferGeometry>
                <pointsMaterial size={0.05} color="#60a5fa" transparent opacity={0.6} />
            </points>

            {/* Connecting Lines */}
            <lineSegments>
                <edgesGeometry args={[new THREE.BoxGeometry(3, 5, 2)]} />
                <lineBasicMaterial color="#3b82f6" transparent opacity={0.2} />
            </lineSegments>
        </group>
    )
}

// Main Background Component
export default function ArchitecturalHeroBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <Canvas
                camera={{ position: [5, 3, 8], fov: 50 }}
                style={{ background: 'transparent' }}
            >
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={0.8} />
                <WireframeBuilding />
            </Canvas>
        </div>
    )
}
