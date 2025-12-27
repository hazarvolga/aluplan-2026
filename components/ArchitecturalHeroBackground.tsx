"use client"
import { Canvas, useFrame } from "@react-three/fiber"
import { useRef, useMemo, useState, useEffect } from "react"
import * as THREE from "three"

// Generali Tower (Zaha Hadid) inspired wireframe building
// Feature: Twisted/Torsion structure
function GeneraliTowerBuilding() {
    const groupRef = useRef<THREE.Group>(null)
    const [buildProgress, setBuildProgress] = useState(0)

    // Continuous rotation of the entire building
    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y = state.clock.elapsedTime * 0.05
        }
    })

    // Progressive construction animation loop
    useEffect(() => {
        const interval = setInterval(() => {
            setBuildProgress((prev) => {
                if (prev >= 1.2) { // Allow some time after completion before reset
                    return 0
                }
                return prev + 0.003 // Build speed
            })
        }, 40)

        return () => clearInterval(interval)
    }, [])

    // Twisted Tower Structure
    const floors = useMemo(() => {
        const floorArray = []
        const floorCount = 24 // Number of floors
        const floorHeight = 0.6
        const baseSize = 2.5
        const totalTwist = Math.PI / 1.5 // Total twist from bottom to top (~120 degrees)

        for (let i = 0; i < floorCount; i++) {
            const progress = i / floorCount

            // Animation visibility logic
            const isVisible = buildProgress > progress
            // Opacity calculation based on build progress
            // When effectively built, opacity stabilizes. During build, it fades in.
            const baseOpacity = 0.4
            let floorOpacity = 0

            if (isVisible) {
                if (buildProgress < progress + 0.2) {
                    // Fading in
                    floorOpacity = (buildProgress - progress) * 5 * baseOpacity
                } else {
                    // Stable
                    floorOpacity = baseOpacity
                }
            }

            if (isVisible && floorOpacity > 0) {
                // Tapering factor: building gets slightly narrower at the top
                const scale = 1 - (progress * 0.3)
                const currentSize = baseSize * scale

                // Twist factor: rotation increases with height
                const rotationY = progress * totalTwist

                floorArray.push(
                    <group
                        key={i}
                        position={[0, i * floorHeight - 6, 0]}
                        rotation={[0, rotationY, 0]}
                    >
                        {/* Floor Slab Wireframe */}
                        <lineSegments>
                            <edgesGeometry args={[new THREE.BoxGeometry(currentSize, 0.1, currentSize)]} />
                            <lineBasicMaterial
                                color="#3b82f6"
                                transparent
                                opacity={floorOpacity}
                                linewidth={1}
                            />
                        </lineSegments>

                        {/* Vertical Columns (Corners) */}
                        {/* We emulate columns by drawing lines to the next floor's corners if it's not the last floor */}
                        {i < floorCount - 1 && (
                            <VerticalColumns
                                currentSize={currentSize}
                                nextSize={baseSize * (1 - ((i + 1) / floorCount) * 0.3)}
                                height={floorHeight}
                                twistStep={totalTwist / floorCount}
                                opacity={floorOpacity * 0.7}
                            />
                        )}

                        {/* Corner details */}
                        <points>
                            <bufferGeometry>
                                <bufferAttribute
                                    attach="attributes-position"
                                    count={4}
                                    array={new Float32Array([
                                        -currentSize / 2, 0, -currentSize / 2,
                                        currentSize / 2, 0, -currentSize / 2,
                                        currentSize / 2, 0, currentSize / 2,
                                        -currentSize / 2, 0, currentSize / 2,
                                    ])}
                                    itemSize={3}
                                />
                            </bufferGeometry>
                            <pointsMaterial size={0.06} color="#60a5fa" transparent opacity={floorOpacity * 2} />
                        </points>
                    </group>
                )
            }
        }
        return floorArray
    }, [buildProgress])

    return (
        <group ref={groupRef}>
            {floors}

            {/* Dynamic Grid Helper */}
            <gridHelper
                args={[15, 15, "#3b82f6", "#1e40af"]}
                rotation={[0, 0, 0]}
                position={[0, -6.5, 0]}
            />
        </group>
    )
}

// Helper component to draw twisted columns between floors
function VerticalColumns({ currentSize, nextSize, height, twistStep, opacity }: {
    currentSize: number,
    nextSize: number,
    height: number,
    twistStep: number,
    opacity: number
}) {
    // Calculate corners of current floor (y=0 relative to group)
    const c = currentSize / 2
    const currentCorners = [
        [-c, 0, -c], [c, 0, -c], [c, 0, c], [-c, 0, c]
    ]

    // Calculate corners of next floor (y=height, rotated by twistStep)
    // But since we are inside the current floor's rotated group, we only need to account for the *relative* twist to the next floor
    const n = nextSize / 2
    const cos = Math.cos(twistStep)
    const sin = Math.sin(twistStep)

    const nextCorners = [
        [-n, -n], [n, -n], [n, n], [-n, n] // x, z before rotation
    ].map(([x, z]) => {
        // Rotate around Y axis
        const rx = x * cos - z * sin
        const rz = x * sin + z * cos
        return [rx, height, rz]
    })

    // Create geometry for lines connecting corners
    const positions = new Float32Array(4 * 2 * 3) // 4 lines, 2 points each, 3 coords
    for (let i = 0; i < 4; i++) {
        // Start point
        positions[i * 6 + 0] = currentCorners[i][0]
        positions[i * 6 + 1] = currentCorners[i][1]
        positions[i * 6 + 2] = currentCorners[i][2]
        // End point
        positions[i * 6 + 3] = nextCorners[i][0]
        positions[i * 6 + 4] = nextCorners[i][1]
        positions[i * 6 + 5] = nextCorners[i][2]
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

// Main Background Component
export default function ArchitecturalHeroBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-40">
                <Canvas
                    camera={{ position: [8, 2, 12], fov: 40 }}
                    style={{ background: 'transparent' }}
                >
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} intensity={1} />
                    <pointLight position={[-5, 0, -5]} intensity={0.5} color="#3b82f6" />
                    <GeneraliTowerBuilding />
                </Canvas>
            </div>
        </div>
    )
}
