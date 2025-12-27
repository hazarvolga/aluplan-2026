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

    // OMNITURM Structure - Refined Hip Swing
    const floors = useMemo(() => {
        const floorArray = []
        const floorCount = 30
        const floorHeight = 0.5
        const baseSize = 2.2

        // Hip-swing parameters based on user feedback
        const shiftStartFloor = 8 // Starts after 8th floor
        const shiftDuration = 7   // Lasts for 7 floors
        const rightShiftFloors = 3 // First 3 floors shift right

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

                // Logic:
                // Floors 0-7: Base (0,0)
                // Floors 8-10 (3 floors): Twist Right
                // Floors 11-14 (4 floors): Twist Left (returning to center)
                // Floors 15+: Back to center (0,0) aligned with base

                if (i >= shiftStartFloor && i < shiftStartFloor + shiftDuration) {
                    const shiftIndex = i - shiftStartFloor

                    if (shiftIndex < rightShiftFloors) {
                        // Right Shift Phase (Floors 8,9,10)
                        // Progress 0 to 1 for this phase
                        const phaseProgress = (shiftIndex + 1) / rightShiftFloors
                        // Sinusoidal ease-out for natural movement
                        const factor = Math.sin(phaseProgress * (Math.PI / 2))
                        offsetX = factor * 0.6 // Shift Right
                        offsetZ = factor * 0.3
                    } else {
                        // Left Shift / Return Phase (Floors 11,12,13,14)
                        // Progress 0 to 1 for this phase
                        const phaseProgress = (shiftIndex - rightShiftFloors + 1) / (shiftDuration - rightShiftFloors)
                        // Cosine ease-in-out to return from max shift to 0
                        // We start from max shift (1) and go to 0
                        const factor = Math.cos(phaseProgress * (Math.PI / 2))
                        offsetX = factor * 0.6 // Return from Right
                        offsetZ = factor * 0.3
                    }
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
                                    x: getNextFloorOffset(i + 1, shiftStartFloor, shiftDuration, rightShiftFloors).x,
                                    y: floorHeight,
                                    z: getNextFloorOffset(i + 1, shiftStartFloor, shiftDuration, rightShiftFloors).z
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

// Helper to calculate offset for any floor index (used for nextPos prediction)
function getNextFloorOffset(index: number, start: number, duration: number, rightShiftCount: number) {
    let x = 0
    let z = 0

    if (index >= start && index < start + duration) {
        const shiftIndex = index - start
        if (shiftIndex < rightShiftCount) {
            const phaseProgress = (shiftIndex + 1) / rightShiftCount
            const factor = Math.sin(phaseProgress * (Math.PI / 2))
            x = factor * 0.6
            z = factor * 0.3
        } else {
            const phaseProgress = (shiftIndex - rightShiftCount + 1) / (duration - rightShiftCount)
            const factor = Math.cos(phaseProgress * (Math.PI / 2))
            x = factor * 0.6
            z = factor * 0.3
        }
    }
    return { x, z }
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
