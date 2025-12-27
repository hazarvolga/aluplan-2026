"use client"
import { Canvas, useFrame } from "@react-three/fiber"
import { useRef, useMemo, useState, useEffect } from "react"
import * as THREE from "three"

// OMNITURM (Frankfurt) inspired wireframe building
// Feature: "Hip-swing" - Middle floors are shifted sideways
function OmniturmBuilding() {
    const groupRef = useRef<THREE.Group>(null)
    const [buildProgress, setBuildProgress] = useState(0)

    // Continuous rotation
    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y = state.clock.elapsedTime * 0.08
        }
    })

    // Progressive construction animation
    useEffect(() => {
        const interval = setInterval(() => {
            setBuildProgress((prev) => {
                if (prev >= 1.2) {
                    return 0
                }
                return prev + 0.004
            })
        }, 40)

        return () => clearInterval(interval)
    }, [])

    // OMNITURM Structure - The "Hip Swing"
    const floors = useMemo(() => {
        const floorArray = []
        const floorCount = 30
        const floorHeight = 0.5
        const baseSize = 2.2

        // Hip-swing parameters (The shift happens in the middle)
        const shiftStart = 8
        const shiftEnd = 20
        const maxShift = 0.8

        for (let i = 0; i < floorCount; i++) {
            const progress = i / floorCount

            const isVisible = buildProgress > progress
            const baseOpacity = 0.4
            let floorOpacity = 0

            if (isVisible) {
                if (buildProgress < progress + 0.2) {
                    floorOpacity = (buildProgress - progress) * 5 * baseOpacity
                } else {
                    floorOpacity = baseOpacity
                }
            }

            if (isVisible && floorOpacity > 0) {
                // Calculate shift (Hip-swing effect)
                let offsetX = 0
                let offsetZ = 0

                if (i >= shiftStart && i <= shiftEnd) {
                    // Sine wave shift for smooth transition out and back
                    const shiftProgress = (i - shiftStart) / (shiftEnd - shiftStart)
                    const shiftFactor = Math.sin(shiftProgress * Math.PI) // 0 -> 1 -> 0

                    // OMNITURM shifts spirally/diagonally
                    offsetX = shiftFactor * maxShift
                    offsetZ = shiftFactor * (maxShift * 0.5)
                }

                floorArray.push(
                    <group
                        key={i}
                        position={[offsetX, i * floorHeight - 7, offsetZ]}
                    >
                        {/* Floor Slab */}
                        <lineSegments>
                            <edgesGeometry args={[new THREE.BoxGeometry(baseSize, 0.1, baseSize)]} />
                            <lineBasicMaterial
                                color="#3b82f6"
                                transparent
                                opacity={floorOpacity}
                                linewidth={1}
                            />
                        </lineSegments>

                        {/* Vertical Columns connecting to next floor */}
                        {i < floorCount - 1 && (
                            <VerticalColumns
                                currentPos={{ x: offsetX, y: 0, z: offsetZ }}
                                nextPos={{
                                    x: (i + 1 >= shiftStart && i + 1 <= shiftEnd)
                                        ? Math.sin(((i + 1 - shiftStart) / (shiftEnd - shiftStart)) * Math.PI) * maxShift
                                        : 0,
                                    y: floorHeight,
                                    z: (i + 1 >= shiftStart && i + 1 <= shiftEnd)
                                        ? Math.sin(((i + 1 - shiftStart) / (shiftEnd - shiftStart)) * Math.PI) * (maxShift * 0.5)
                                        : 0
                                }}
                                size={baseSize}
                                opacity={floorOpacity * 0.7}
                            />
                        )}

                        {/* Floor Plate (Glass effect) */}
                        <mesh scale={[baseSize, 0.05, baseSize]}>
                            <boxGeometry />
                            <meshBasicMaterial color="#60a5fa" transparent opacity={floorOpacity * 0.1} />
                        </mesh>
                    </group>
                )
            }
        }
        return floorArray
    }, [buildProgress])

    return (
        <group ref={groupRef}>
            {floors}
            <gridHelper
                args={[15, 15, "#3b82f6", "#1e40af"]}
                rotation={[0, 0, 0]}
                position={[0, -7.5, 0]}
            />
        </group>
    )
}

function VerticalColumns({ currentPos, nextPos, size, opacity }: {
    currentPos: { x: number, y: number, z: number },
    nextPos: { x: number, y: number, z: number },
    size: number,
    opacity: number
}) {
    const s = size / 2
    // We need to calculate strictly local positions because we are inside the current floor's group
    // currentPos is (0,0,0) relative to itself
    // nextPos is relative to current floor

    const relX = nextPos.x - currentPos.x
    const relY = nextPos.y
    const relZ = nextPos.z - currentPos.z

    const corners = [
        [-s, -s], [s, -s], [s, s], [-s, s]
    ]

    const positions = new Float32Array(4 * 2 * 3)
    for (let i = 0; i < 4; i++) {
        // Start (Current Floor Corner)
        positions[i * 6 + 0] = corners[i][0]
        positions[i * 6 + 1] = 0
        positions[i * 6 + 2] = corners[i][1]
        // End (Next Floor Corner)
        positions[i * 6 + 3] = corners[i][0] + relX
        positions[i * 6 + 4] = relY
        positions[i * 6 + 5] = corners[i][1] + relZ
    }

    return (
        <lineSegments>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={8}
                    array={positions}
                    itemSize={3}
                />
            </bufferGeometry>
            <lineBasicMaterial color="#60a5fa" transparent opacity={opacity} linewidth={1} />
        </lineSegments>
    )
}

export default function ArchitecturalHeroBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-50">
                <Canvas
                    camera={{ position: [8, 4, 12], fov: 45 }}
                    style={{ background: 'transparent' }}
                >
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} intensity={1} />
                    <OmniturmBuilding />
                </Canvas>
            </div>
        </div>
    )
}
