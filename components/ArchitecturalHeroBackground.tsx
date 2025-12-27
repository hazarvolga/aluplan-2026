"use client"
import { Canvas, useFrame } from "@react-three/fiber"
import { useRef, useMemo, useState, useEffect } from "react"
import * as THREE from "three"

// Animated Wireframe Building with Progressive Construction
function WireframeBuilding() {
    const groupRef = useRef<THREE.Group>(null)
    const [buildProgress, setBuildProgress] = useState(0)

    // Slow rotation animation
    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y = state.clock.elapsedTime * 0.1
            groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.05) * 0.1
        }
    })

    // Progressive building construction animation
    useEffect(() => {
        const interval = setInterval(() => {
            setBuildProgress((prev) => {
                if (prev >= 1) {
                    // Reset and rebuild
                    return 0
                }
                return prev + 0.005 // Slow build speed
            })
        }, 50)

        return () => clearInterval(interval)
    }, [])

    // Create building floors with progressive reveal
    const floors = useMemo(() => {
        const floorArray = []
        const floorCount = 8
        const floorHeight = 0.8

        for (let i = 0; i < floorCount; i++) {
            const floorProgress = (i / floorCount)
            const isVisible = buildProgress > floorProgress
            const floorOpacity = isVisible
                ? Math.min((buildProgress - floorProgress) * 5, 0.3 + (i / floorCount) * 0.2)
                : 0

            if (isVisible) {
                floorArray.push(
                    <group key={i} position={[0, i * floorHeight - 3, 0]}>
                        {/* Wireframe box */}
                        <lineSegments>
                            <edgesGeometry args={[new THREE.BoxGeometry(3, 0.6, 2)]} />
                            <lineBasicMaterial
                                color="#3b82f6"
                                transparent
                                opacity={floorOpacity}
                                linewidth={2}
                            />
                        </lineSegments>

                        {/* Corner points */}
                        <points>
                            <bufferGeometry>
                                <bufferAttribute
                                    attach="attributes-position"
                                    count={8}
                                    array={new Float32Array([
                                        -1.5, -0.3, -1, 1.5, -0.3, -1, 1.5, 0.3, -1, -1.5, 0.3, -1,
                                        -1.5, -0.3, 1, 1.5, -0.3, 1, 1.5, 0.3, 1, -1.5, 0.3, 1
                                    ])}
                                    itemSize={3}
                                />
                            </bufferGeometry>
                            <pointsMaterial size={0.08} color="#60a5fa" transparent opacity={floorOpacity * 2} />
                        </points>
                    </group>
                )
            }
        }
        return floorArray
    }, [buildProgress])

    // Construction particles
    const particles = useMemo(() => {
        const count = 50
        const positions = new Float32Array(count * 3)

        for (let i = 0; i < count; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 8
            positions[i * 3 + 1] = (Math.random() - 0.5) * 8
            positions[i * 3 + 2] = (Math.random() - 0.5) * 8
        }

        return positions
    }, [])

    return (
        <group ref={groupRef}>
            {/* Building Floors */}
            {floors}

            {/* Grid Helper - fades in with building */}
            <gridHelper
                args={[10, 10, "#3b82f6", "#1e40af"]}
                rotation={[0, 0, 0]}
                material-opacity={buildProgress * 0.3}
                material-transparent={true}
            />

            {/* Construction Particles */}
            <points>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        count={particles.length / 3}
                        array={particles}
                        itemSize={3}
                    />
                </bufferGeometry>
                <pointsMaterial
                    size={0.04}
                    color="#60a5fa"
                    transparent
                    opacity={buildProgress * 0.4}
                />
            </points>
        </group>
    )
}

// Main Background Component
export default function ArchitecturalHeroBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-30">
                <Canvas
                    camera={{ position: [5, 3, 8], fov: 50 }}
                    style={{ background: 'transparent' }}
                >
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} intensity={0.8} />
                    <WireframeBuilding />
                </Canvas>
            </div>
        </div>
    )
}
