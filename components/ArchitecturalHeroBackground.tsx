"use client"
import { Canvas, useFrame } from "@react-three/fiber"
import { useRef, useMemo, useState, useEffect } from "react"
import * as THREE from "three"

// Updated Parametric Skyscraper Component
function ParametricBuilding() {
    const groupRef = useRef<THREE.Group>(null)
    const [buildProgress, setBuildProgress] = useState(0)

    // Continuous rotation
    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y = state.clock.elapsedTime * 0.1
        }
    })

    // Progressive construction loops
    useEffect(() => {
        const interval = setInterval(() => {
            setBuildProgress((prev) => {
                if (prev >= 1.25) {
                    return 0
                }
                return prev + 0.005
            })
        }, 40)

        return () => clearInterval(interval)
    }, [])

    // OMNITURM Architectural Implementation
    // Spec: 
    // Base: Floors 0-14 (Office)
    // Swing: Floors 15-22 (Residential / Hip-Swing) - Spiral Shift
    // Top: Floors 23-44 (Office) - Vertical, offset

    const floors = useMemo(() => {
        const floorArray = []

        // Config
        const scale = 0.08
        const totalFloors = 45
        const floorHeight = 4.2 * scale
        const baseWidth = 35 * scale // Reduced slightly to emphasize height
        const baseDepth = 30 * scale

        // Hip Swing Config
        const swingStart = 15
        const swingEnd = 22
        const swingLength = swingEnd - swingStart + 1

        // Max offset ~5m scaled
        const maxShiftX = 5.0 * scale
        const maxShiftZ = 2.5 * scale
        const maxRotation = 10 * (Math.PI / 180) // 10 degrees total twist in swing

        // Helper to get floor transform
        const getFloorTransform = (index: number) => {
            let x = 0, z = 0, rot = 0

            if (index < swingStart) {
                // Base: Stable
                x = 0; z = 0; rot = 0;
            } else if (index <= swingEnd) {
                // Swing Zone: Progressive Spiral Shift
                // Interpret "Spiral Shift": X/Z translation + Rotation
                const progress = (index - swingStart) / (swingLength)
                // Ease in-out for smooth structural transition? 
                // Or linear for "Module Stacking"? User mentioned "stepped offsets". 
                // Let's use linear steps for readability of "modules".

                x = progress * maxShiftX
                z = progress * maxShiftZ
                rot = progress * maxRotation
            } else {
                // Top: Stable at final swing position
                // "Üst kısım alt kısıma göre farklı offset ile yer alır"
                x = maxShiftX
                z = maxShiftZ
                rot = maxRotation
            }
            return { x, z, rot }
        }

        for (let i = 0; i < totalFloors; i++) {
            const progress = i / totalFloors
            const isVisible = buildProgress > progress

            let floodOpacity = 0
            const baseOpacity = 0.5

            if (isVisible) {
                if (buildProgress < progress + 0.1) {
                    floodOpacity = (buildProgress - progress) * 8 * baseOpacity
                } else {
                    floodOpacity = baseOpacity
                }
            }

            if (isVisible && floodOpacity > 0) {
                const trans = getFloorTransform(i)
                const yPos = (i * floorHeight) - 8 // Center vertically

                floorArray.push(
                    <group
                        key={i}
                        position={[trans.x, yPos, trans.z]}
                        rotation={[0, trans.rot, 0]}
                    >
                        {/* Floor Slab */}
                        <lineSegments>
                            <edgesGeometry args={[new THREE.BoxGeometry(baseWidth, 0.08, baseDepth)]} />
                            <lineBasicMaterial color="#3b82f6" transparent opacity={floodOpacity} linewidth={1} />
                        </lineSegments>

                        {/* Central Core (Betonarme Çekirdek) - Always vertical? 
                  Actually, in hip-swing towers, core usually stays straight, floor plates shift around it.
                  If I put core inside this group, it shifts WITH the floor.
                  To show "Core" passing through, it should be inversely shifted? 
                  Or simpler: The core shifts slightly or is minimal.
                  Let's model "Core" as a smaller box inside, shifted BACK to 0,0 relative to world?
                  No, structurally, the core might follow the center of mass or stay straight.
                  Let's draw a local core that follows the floor to represent the "usable area" core, 
                  but visually connecting them creates the spine.
              */}
                        <mesh>
                            <boxGeometry args={[baseWidth * 0.3, floorHeight, baseDepth * 0.3]} />
                            <meshBasicMaterial color="#1e40af" transparent opacity={floodOpacity * 0.3} wireframe />
                        </mesh>

                        {/* Balcony / Terrace Indication in Swing Zone */}
                        {i >= swingStart && i <= swingEnd && (
                            <lineSegments position={[baseWidth / 2 + 0.2 * scale, 0, 0]}>
                                <edgesGeometry args={[new THREE.BoxGeometry(1 * scale, 0.05, baseDepth * 0.8)]} />
                                <lineBasicMaterial color="#60a5fa" transparent opacity={floodOpacity * 0.8} />
                            </lineSegments>
                        )}

                        {/* Columns to Next Floor */}
                        {i < totalFloors - 1 && (
                            <FloorConnector
                                width={baseWidth}
                                depth={baseDepth}
                                height={floorHeight}
                                opacity={floodOpacity * 0.6}

                                // Column Logic: Connect Corners
                                isTransition={true} // Always calculate relative position for accuracy
                                deltaGlobalX={getFloorTransform(i + 1).x - trans.x}
                                deltaGlobalZ={getFloorTransform(i + 1).z - trans.z}
                                deltaRot={getFloorTransform(i + 1).rot - trans.rot}
                                currentGlobalRot={trans.rot}
                            />
                        )}
                    </group>
                )
            }
        }
        return floorArray
    }, [buildProgress])

    return (
        <group ref={groupRef}>
            {floors}
            {/* Structural Central Axis Helper (Optional - shows verticality reference) */}
            <mesh position={[0, -0.5, 0]}>
                <cylinderGeometry args={[0.05, 0.05, 15, 8]} />
                <meshBasicMaterial color="#1e40af" opacity={0.1} transparent />
            </mesh>
            <gridHelper args={[20, 20, "#3b82f6", "#1e40af"]} position={[0, -8.5, 0]} />
        </group>
    )
}

function FloorConnector({ width, depth, height, opacity, isTransition, deltaGlobalX, deltaGlobalZ, deltaRot, currentGlobalRot }: {
    width: number, depth: number, height: number, opacity: number,
    isTransition: boolean,
    deltaGlobalX: number, deltaGlobalZ: number, deltaRot: number, currentGlobalRot: number
}) {
    const w = width / 2
    const d = depth / 2

    // Outer perimeter columns
    const corners = [
        [-w, -d], [w, -d], [w, d], [-w, d]
    ]

    const positions = new Float32Array(4 * 2 * 3)

    // Math to connect Current(Local) to Next(Local in Current Frame)
    // See previous implementation logic
    const nextRot = deltaRot
    const cosNext = Math.cos(nextRot)
    const sinNext = Math.sin(nextRot)

    const cosInv = Math.cos(-currentGlobalRot)
    const sinInv = Math.sin(-currentGlobalRot)

    // Rotate global displacement into local frame
    const localDiffX = deltaGlobalX * cosInv - deltaGlobalZ * sinInv
    const localDiffZ = deltaGlobalX * sinInv + deltaGlobalZ * cosInv

    for (let i = 0; i < 4; i++) {
        // Start
        positions[i * 6 + 0] = corners[i][0]
        positions[i * 6 + 1] = 0
        positions[i * 6 + 2] = corners[i][1]

        // End
        // 1. Next corner rotated by relative rotation
        let tx = corners[i][0] * cosNext - corners[i][1] * sinNext
        let tz = corners[i][0] * sinNext + corners[i][1] * cosNext

        // 2. Add slant displacement
        tx += localDiffX
        tz += localDiffZ

        positions[i * 6 + 3] = tx
        positions[i * 6 + 4] = height
        positions[i * 6 + 5] = tz
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

// Main Component
export default function ArchitecturalHeroBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-60">
                <Canvas
                    // Isometric view per spec
                    orthographic
                    camera={{ zoom: 40, position: [20, 20, 20] }}
                    style={{ background: 'transparent' }}
                >
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} intensity={1} />
                    <ParametricBuilding />
                </Canvas>
            </div>
        </div>
    )
}
