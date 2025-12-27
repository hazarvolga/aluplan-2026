"use client"
import { Canvas, useFrame } from "@react-three/fiber"
import { useRef, useMemo, useState, useEffect } from "react"
import * as THREE from "three"

// Burj Khalifa inspired wireframe building with progressive construction
function BurjKhalifaBuilding() {
    const groupRef = useRef<THREE.Group>(null)
    const [buildProgress, setBuildProgress] = useState(0)

    // Slow rotation animation
    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y = state.clock.elapsedTime * 0.08
            groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.05) * 0.05
        }
    })

    // Progressive building construction animation
    useEffect(() => {
        const interval = setInterval(() => {
            setBuildProgress((prev) => {
                if (prev >= 1) {
                    return 0 // Reset and rebuild
                }
                return prev + 0.004 // Slow build speed
            })
        }, 50)

        return () => clearInterval(interval)
    }, [])

    // Burj Khalifa structure - stepped/tapered design
    const buildingStructure = useMemo(() => {
        // Define sections from bottom to top with decreasing widths
        const sections = [
            // Base sections (wider)
            { width: 3.5, depth: 3.5, height: 0.8, floors: 3 },
            { width: 3.2, depth: 3.2, height: 0.8, floors: 3 },
            { width: 2.8, depth: 2.8, height: 0.8, floors: 3 },
            // Middle sections
            { width: 2.4, depth: 2.4, height: 0.7, floors: 3 },
            { width: 2.0, depth: 2.0, height: 0.7, floors: 3 },
            { width: 1.6, depth: 1.6, height: 0.6, floors: 3 },
            // Upper sections (narrower)
            { width: 1.3, depth: 1.3, height: 0.6, floors: 2 },
            { width: 1.0, depth: 1.0, height: 0.5, floors: 2 },
            { width: 0.7, depth: 0.7, height: 0.5, floors: 2 },
            // Spire
            { width: 0.4, depth: 0.4, height: 0.4, floors: 2 },
            { width: 0.2, depth: 0.2, height: 0.6, floors: 1 },
        ]

        const floors = []
        let currentHeight = -4 // Start position
        let totalFloors = 0

        sections.forEach((section, sectionIdx) => {
            for (let i = 0; i < section.floors; i++) {
                const floorIndex = totalFloors
                const floorProgress = floorIndex / (sections.reduce((sum, s) => sum + s.floors, 0))
                const isVisible = buildProgress > floorProgress
                const floorOpacity = isVisible
                    ? Math.min((buildProgress - floorProgress) * 8, 0.25 + (floorIndex / 25) * 0.3)
                    : 0

                if (isVisible) {
                    floors.push(
                        <group key={`${sectionIdx}-${i}`} position={[0, currentHeight, 0]}>
                            {/* Wireframe box */}
                            <lineSegments>
                                <edgesGeometry args={[new THREE.BoxGeometry(section.width, section.height, section.depth)]} />
                                <lineBasicMaterial
                                    color="#3b82f6"
                                    transparent
                                    opacity={floorOpacity}
                                    linewidth={2}
                                />
                            </lineSegments>

                            {/* Corner points for detail */}
                            <points>
                                <bufferGeometry>
                                    <bufferAttribute
                                        attach="attributes-position"
                                        count={8}
                                        array={new Float32Array([
                                            -section.width / 2, -section.height / 2, -section.depth / 2,
                                            section.width / 2, -section.height / 2, -section.depth / 2,
                                            section.width / 2, section.height / 2, -section.depth / 2,
                                            -section.width / 2, section.height / 2, -section.depth / 2,
                                            -section.width / 2, -section.height / 2, section.depth / 2,
                                            section.width / 2, -section.height / 2, section.depth / 2,
                                            section.width / 2, section.height / 2, section.depth / 2,
                                            -section.width / 2, section.height / 2, section.depth / 2
                                        ])}
                                        itemSize={3}
                                    />
                                </bufferGeometry>
                                <pointsMaterial size={0.06} color="#60a5fa" transparent opacity={floorOpacity * 2.5} />
                            </points>
                        </group>
                    )
                }

                currentHeight += section.height
                totalFloors++
            }
        })

        return floors
    }, [buildProgress])

    // Construction particles
    const particles = useMemo(() => {
        const count = 60
        const positions = new Float32Array(count * 3)

        for (let i = 0; i < count; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 10
            positions[i * 3 + 1] = (Math.random() - 0.5) * 12
            positions[i * 3 + 2] = (Math.random() - 0.5) * 10
        }

        return positions
    }, [])

    return (
        <group ref={groupRef}>
            {/* Building Structure */}
            {buildingStructure}

            {/* Grid Helper */}
            <gridHelper
                args={[12, 12, "#3b82f6", "#1e40af"]}
                rotation={[0, 0, 0]}
                material-opacity={buildProgress * 0.25}
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
                    opacity={buildProgress * 0.5}
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
                    camera={{ position: [6, 2, 10], fov: 45 }}
                    style={{ background: 'transparent' }}
                >
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 15, 10]} intensity={1} />
                    <pointLight position={[-10, 5, -10]} intensity={0.5} />
                    <BurjKhalifaBuilding />
                </Canvas>
            </div>
        </div>
    )
}
