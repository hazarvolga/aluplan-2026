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

    // Parametric Logic Spec:
    // 9 Modules x 5 Floors = 45 Floors
    // Each module: Rotate +3 deg (around Y), Translate +2.5 X, -1.5 Z (relative to below)

    const floors = useMemo(() => {
        const floorArray = []

        // Scale parameters to fit scene
        const scale = 0.08
        const moduleCount = 9
        const floorsPerModule = 5
        const totalFloors = moduleCount * floorsPerModule

        const floorHeight = 4.2 * scale
        const baseWidth = 40 * scale
        const baseDepth = 35 * scale

        // Transform per module (Accumulative)
        const rotStep = 3 * (Math.PI / 180)
        const transXStep = 2.5 * scale
        const transZStep = -1.5 * scale

        for (let m = 0; m < moduleCount; m++) {
            const modRot = m * rotStep
            const modX = m * transXStep
            const modZ = m * transZStep

            for (let f = 0; f < floorsPerModule; f++) {
                const globalIndex = (m * floorsPerModule) + f
                const progress = globalIndex / totalFloors

                const isVisible = buildProgress > progress

                let floorOpacity = 0
                const baseOpacity = 0.5
                if (isVisible) {
                    if (buildProgress < progress + 0.1) {
                        floorOpacity = (buildProgress - progress) * 10 * baseOpacity
                    } else {
                        floorOpacity = baseOpacity
                    }
                }

                if (isVisible && floorOpacity > 0) {
                    const yPos = (globalIndex * floorHeight) - 6 // Center vertically

                    floorArray.push(
                        <group
                            key={globalIndex}
                            position={[modX, yPos, modZ]}
                            rotation={[0, modRot, 0]}
                        >
                            {/* Floor Rect */}
                            <lineSegments>
                                <edgesGeometry args={[new THREE.BoxGeometry(baseWidth, 0.05, baseDepth)]} />
                                <lineBasicMaterial color="#3b82f6" transparent opacity={floorOpacity} linewidth={1} />
                            </lineSegments>

                            {/* Corners */}
                            <points>
                                <bufferGeometry>
                                    <bufferAttribute
                                        attach="attributes-position"
                                        count={4}
                                        array={new Float32Array([
                                            -baseWidth / 2, 0, -baseDepth / 2,
                                            baseWidth / 2, 0, -baseDepth / 2,
                                            baseWidth / 2, 0, baseDepth / 2,
                                            -baseWidth / 2, 0, baseDepth / 2,
                                        ])}
                                        itemSize={3}
                                    />
                                </bufferGeometry>
                                <pointsMaterial size={0.05} color="#60a5fa" transparent opacity={floorOpacity * 1.5} />
                            </points>

                            {/* Vertical Columns / Connections */}
                            {/* Logic: Connect to next floor. 
                  If next floor is in same module -> straight up.
                  If next floor is new module -> rotated & shifted connection. 
              */}
                            {globalIndex < totalFloors - 1 && (
                                <FloorConnector
                                    width={baseWidth}
                                    depth={baseDepth}
                                    height={floorHeight}
                                    opacity={floorOpacity * 0.6}
                                    // Transform to apply to "Target" relative to "Source" (Local frame)
                                    // If same module: Identity transform
                                    // If new module: Apply rotStep & transStep (but in Local frame?)
                                    // Note: Our modules are positioned in World Space.
                                    // The "Connector" is drawn inside the Current Floor Group.
                                    // So we need Target Position relevant to Current Group.

                                    // Current Global: [modX, yPos, modZ], Rot: modRot
                                    // Next Global: 
                                    //   Same Module: [modX, yPos+h, modZ], Rot: modRot ==> Relative: [0, h, 0], Rot: 0
                                    //   Next Module: [modX+dx, yPos+h, modZ+dz], Rot: modRot+dr 

                                    // We need (NextGlobal - CurrentGlobal) rotated by (-CurrentRot) to get Local Displacement.

                                    isTransition={f === floorsPerModule - 1}
                                    deltaGlobalX={transXStep}
                                    deltaGlobalZ={transZStep}
                                    deltaRot={rotStep}
                                    currentGlobalRot={modRot}
                                />
                            )}
                        </group>
                    )
                }
            }
        }
        return floorArray
    }, [buildProgress])

    return (
        <group ref={groupRef}>
            {floors}
            <gridHelper args={[20, 20, "#3b82f6", "#1e40af"]} position={[0, -7, 0]} />
        </group>
    )
}

function FloorConnector({ width, depth, height, opacity, isTransition, deltaGlobalX, deltaGlobalZ, deltaRot, currentGlobalRot }: {
    width: number, depth: number, height: number, opacity: number,
    isTransition: boolean,
    deltaGlobalX: number, deltaGlobalZ: number, deltaRot: number, currentGlobalRot: number
}) {
    // Corners in Local Space
    const w = width / 2
    const d = depth / 2
    const corners = [
        [-w, -d], [w, -d], [w, d], [-w, d]
    ]

    const positions = new Float32Array(4 * 2 * 3)

    // Calculate Target Transformation matrix elements (if transition)
    // Inverse Rotation of Current Group:
    const cosInv = Math.cos(-currentGlobalRot)
    const sinInv = Math.sin(-currentGlobalRot)

    // Rotation of Next Group (Relative to Global, but we only need Relative to Current for point calculation?)
    // Actually simpler:
    // Target Point Global = NextGroupPos + Rotate(NextGroupRot) * CornerLocal
    // Source Point Global = CurrGroupPos + Rotate(CurrGroupRot) * CornerLocal
    // We want Target Point in Current Local Space.
    // TargetLocal = Rotate(-CurrRot) * (TargetGlobal - CurrGroupPos)

    // DiffPos = NextGroupPos - CurrGroupPos
    // If transition: DiffPos = [deltaGlobalX, height, deltaGlobalZ]
    // If no transition: DiffPos = [0, height, 0]

    const diffX = isTransition ? deltaGlobalX : 0
    const diffY = height
    const diffZ = isTransition ? deltaGlobalZ : 0

    // Next Rotation relative to Global IS (CurrentRot + DeltaRot)
    // We need to apply this to the corner to get the corner's offset from its center, then add DiffPos, then rotate back.

    const nextRot = isTransition ? deltaRot : 0 // Relative rotation
    const cosNext = Math.cos(nextRot)
    const sinNext = Math.sin(nextRot)

    for (let i = 0; i < 4; i++) {
        // Source (Local)
        positions[i * 6 + 0] = corners[i][0]
        positions[i * 6 + 1] = 0
        positions[i * 6 + 2] = corners[i][1]

        // Target (Local relative to current group)
        // 1. Rotate corner by relative rotation (nextRot)
        //    (This gives the orientation of the corner in the Next Group's frame)
        let tx = corners[i][0] * cosNext - corners[i][1] * sinNext
        let tz = corners[i][0] * sinNext + corners[i][1] * cosNext

        // 2. Add Relative Displacement (Global diff rotated into local frame)
        //    We need to rotate vector [diffX, 0, diffZ] by [-currentGlobalRot]
        const localDiffX = diffX * cosInv - diffZ * sinInv
        const localDiffZ = diffX * sinInv + diffZ * cosInv

        tx += localDiffX
        tz += localDiffZ

        positions[i * 6 + 3] = tx
        positions[i * 6 + 4] = diffY
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
