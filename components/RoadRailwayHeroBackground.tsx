"use client"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { useRef, useMemo, useState, useEffect } from "react"
import * as THREE from "three"
import { Text, Line, PerspectiveCamera } from "@react-three/drei"

// Road & Railway Variant Comparison - CAD Wireframe Style
function EngineeringScene() {
    const { camera } = useThree()
    const [animationState, setAnimationState] = useState(0) // 0:Init, 1:Terrain, 2:VarA, 3:VarB, 4:VarC, 5:Final

    // Timeline control
    useFrame((state) => {
        const t = state.clock.elapsedTime

        // Sequence logic
        if (t < 1) { /* Init */ }
        else if (t < 3) { if (animationState !== 1) setAnimationState(1) } // Terrain Fade In
        else if (t < 6) { if (animationState !== 2) setAnimationState(2) } // Var A Draws
        else if (t < 9) { if (animationState !== 3) setAnimationState(3) } // Var B Draws
        else if (t < 12) { if (animationState !== 4) setAnimationState(4) } // Var C Draws
        else { if (animationState !== 5) setAnimationState(5) } // Final View

        // Camera slow pan/rotate logic
        // Start from isometric-ish high angle
        const radius = 24
        const angle = 0.5 + (t * 0.05) // Slow rotation
        camera.position.x = Math.sin(angle) * radius
        camera.position.z = Math.cos(angle) * radius
        camera.lookAt(0, -2, 0)
    })

    return (
        <group>
            <TerrainWireframe visible={animationState >= 1} />

            {/* Variant A: Shortest (Straight) - White */}
            <VariantSpline
                visible={animationState >= 2}
                points={variants.A.points}
                color="#ffffff"
                label="Variant A"
                subLabel="Shortest Distance"
                labelPos={new THREE.Vector3(0, 5, 0)}
                drawSpeed={animationState === 2 ? 1 : 0} // Active drawing phase
                isDone={animationState > 2}
            />

            {/* Variant B: Low Earthwork (Contour Following) - Light Blue */}
            <VariantSpline
                visible={animationState >= 3}
                points={variants.B.points}
                color="#38bdf8"
                label="Variant B"
                subLabel="Lower Earthwork"
                labelPos={new THREE.Vector3(-4, 4, 3)}
                drawSpeed={animationState === 3 ? 1 : 0}
                isDone={animationState > 3}
            />

            {/* Variant C: Balanced (Smooth Curve) - Orange */}
            <VariantSpline
                visible={animationState >= 4}
                points={variants.C.points}
                color="#f97316"
                label="Variant C"
                subLabel="Balanced Solution"
                labelPos={new THREE.Vector3(4, 6, -3)}
                drawSpeed={animationState === 4 ? 1 : 0}
                isDone={animationState > 4}
            />

            {/* Final Compare Label */}
            {animationState >= 5 && (
                <Text
                    position={[0, 9, -10]}
                    fontSize={0.8}
                    color="#94a3b8"
                    anchorX="center"
                    anchorY="middle"
                    font="/fonts/Inter-Bold.woff"
                >
                    Road Alignment Variant Comparison
                </Text>
            )}
        </group>
    )
}

// Data Definition
const variants = {
    A: { // Linear / Shortest
        points: [
            new THREE.Vector3(-12, -0.5, 12),
            new THREE.Vector3(-4, 0, 4),
            new THREE.Vector3(4, 0, -4),
            new THREE.Vector3(12, 0.5, -12)
        ]
    },
    B: { // Hugs contours (Low Earthwork) - Avoiding the 'hills' effectively
        points: [
            new THREE.Vector3(-12, -0.5, 12),
            new THREE.Vector3(-8, -2, 6), // Dip low
            new THREE.Vector3(0, -3, 0), // Stay in valley
            new THREE.Vector3(8, -2, -6),
            new THREE.Vector3(12, 0.5, -12)
        ]
    },
    C: { // Balanced (Smooth S)
        points: [
            new THREE.Vector3(-12, -0.5, 12),
            new THREE.Vector3(-4, 2, 8), // Bridge over part
            new THREE.Vector3(4, 2, -8),
            new THREE.Vector3(12, 0.5, -12)
        ]
    }
}

function TerrainWireframe({ visible }: { visible: boolean }) {
    const materialRef = useRef<THREE.MeshBasicMaterial>(null)

    // Animate fade-in
    useFrame((state, delta) => {
        if (!materialRef.current) return
        const targetOp = visible ? 0.15 : 0
        materialRef.current.opacity = THREE.MathUtils.lerp(materialRef.current.opacity, targetOp, delta * 2)
    })

    const geometry = useMemo(() => {
        const geo = new THREE.PlaneGeometry(35, 35, 48, 48)
        const posAttribute = geo.attributes.position

        for (let i = 0; i < posAttribute.count; i++) {
            const x = posAttribute.getX(i)
            const y = posAttribute.getY(i)
            // Complex terrain: hills and valleys
            const z = (Math.sin(x * 0.2) * 3) + (Math.cos(y * 0.3) * 2) + (Math.random() * 0.2)
            posAttribute.setZ(i, z)
        }
        geo.computeVertexNormals()
        return geo
    }, [])

    return (
        <group rotation={[-Math.PI / 2, 0, 0]} position={[0, -4, 0]}>
            <mesh geometry={geometry}>
                <meshBasicMaterial ref={materialRef} color="#94a3b8" wireframe transparent opacity={0} />
            </mesh>
            {visible && (
                <gridHelper args={[40, 40, "#334155", "#0f172a"]} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0.1]} material-opacity={0.1} material-transparent />
            )}
        </group>
    )
}

function VariantSpline({ visible, points, color, label, subLabel, labelPos, drawSpeed, isDone }: any) {
    const [progress, setProgress] = useState(0)

    // Animation Logic
    useFrame((state, delta) => {
        if (!visible) return

        if (drawSpeed > 0 && progress < 1) {
            setProgress(p => Math.min(1, p + delta * 0.5)) // 2 seconds to draw
        } else if (isDone && progress < 1) {
            setProgress(1)
        }
    })

    const curve = useMemo(() => new THREE.CatmullRomCurve3(points), [points])

    // Calculate draw curve based on progress
    // We can't easily partially draw a CatmullRomCurve without recomputing points
    // But for "Line", we can just slice the points array if we had dense points.
    // Better: Get spaced points, slice them.

    const fullPoints = useMemo(() => curve.getSpacedPoints(100), [curve])
    const visiblePoints = useMemo(() => {
        const count = Math.ceil(progress * 100)
        return fullPoints.slice(0, count)
    }, [fullPoints, progress])

    if (!visible) return null

    return (
        <group>
            {/* The Line */}
            {visiblePoints.length > 1 && (
                <Line
                    points={visiblePoints}
                    color={color}
                    lineWidth={3}
                    transparent
                    opacity={0.8}
                />
            )}

            {/* End Point Marker or 'Head' */}
            {progress > 0 && progress < 1 && (
                <mesh position={fullPoints[Math.floor(progress * 99)]}>
                    <sphereGeometry args={[0.3]} />
                    <meshBasicMaterial color={color} />
                </mesh>
            )}

            {/* Label (Only appears when done) */}
            {progress >= 0.9 && (
                <group position={labelPos}>
                    {/* Floating Label Line */}
                    <Line
                        points={[new THREE.Vector3(0, -2, 0), new THREE.Vector3(0, 0, 0)]}
                        color={color}
                        lineWidth={1}
                        transparent
                        opacity={0.4}
                    />
                    <Text
                        position={[0, 0.4, 0]}
                        fontSize={0.6}
                        color={color}
                        anchorX="center"
                        anchorY="bottom"
                        font="/fonts/Inter-Bold.woff"
                    >
                        {label}
                    </Text>
                    <Text
                        position={[0, -0.1, 0]}
                        fontSize={0.4}
                        color="#cbd5e1"
                        anchorX="center"
                        anchorY="top"
                        font="/fonts/Inter-Regular.woff"
                    >
                        {subLabel}
                    </Text>
                </group>
            )}
        </group>
    )
}

export default function RoadRailwayHeroBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute right-0 top-0 bottom-0 w-full opacity-90">
                <Canvas
                    style={{ background: 'transparent' }}
                >
                    <PerspectiveCamera makeDefault position={[20, 15, 20]} fov={35} />
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} intensity={0.8} color="#ffffff" />

                    <group position={[0, -2, 0]}>
                        <EngineeringScene />
                    </group>
                </Canvas>
            </div>
        </div>
    )
}
