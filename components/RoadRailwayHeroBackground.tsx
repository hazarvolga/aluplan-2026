"use client"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { useRef, useMemo, useState, useEffect } from "react"
import * as THREE from "three"
import { Text, PerspectiveCamera } from "@react-three/drei"

// Road & Railway Variant Comparison - CAD Wireframe Style (Simplified & Robust)
function EngineeringScene() {
    // State: 0=Terrain, 1=VarA, 2=VarB, 3=VarC, 4=All
    const [step, setStep] = useState(0)

    // Robust Interval Loop
    useEffect(() => {
        const interval = setInterval(() => {
            setStep((prev) => (prev + 1) % 5)
        }, 3000) // Change every 3 seconds
        return () => clearInterval(interval)
    }, [])

    return (
        <group>
            <TerrainWireframe />

            {/* Variant A: Shortest (White) */}
            <VariantLine
                points={variants.A.points}
                color="#ffffff"
                label="Varyant A: En Kısa"
                labelPos={new THREE.Vector3(0, 3, 0)}
                visible={step === 1 || step === 4}
            />

            {/* Variant B: Low Earthwork (Blue) */}
            <VariantLine
                points={variants.B.points}
                color="#38bdf8"
                label="Varyant B: Min. Hafriyat"
                labelPos={new THREE.Vector3(-4, 2, 4)}
                visible={step === 2 || step === 4}
            />

            {/* Variant C: Balanced (Orange) */}
            <VariantLine
                points={variants.C.points}
                color="#f97316"
                label="Varyant C: Dengeli"
                labelPos={new THREE.Vector3(4, 4, -4)}
                visible={step === 3 || step === 4}
            />

            {/* Legend/Status Text */}
            <Text
                position={[0, 8, -10]}
                fontSize={0.8}
                color="#cbd5e1"
                anchorX="center"
                anchorY="middle"
                font="/fonts/Inter-Bold.woff"
            >
                {step === 4 ? "Karşılaştırma Analizi" : "Güzergah Alternatifleri"}
            </Text>
        </group>
    )
}

// Data Definition
const variants = {
    A: { points: [new THREE.Vector3(-12, -0.5, 12), new THREE.Vector3(-4, 0, 4), new THREE.Vector3(4, 0, -4), new THREE.Vector3(12, 0.5, -12)] },
    B: { points: [new THREE.Vector3(-12, -0.5, 12), new THREE.Vector3(-8, -3, 6), new THREE.Vector3(0, -4, 0), new THREE.Vector3(8, -3, -6), new THREE.Vector3(12, 0.5, -12)] },
    C: { points: [new THREE.Vector3(-12, -0.5, 12), new THREE.Vector3(-4, 3, 8), new THREE.Vector3(4, 3, -8), new THREE.Vector3(12, 0.5, -12)] }
}

function TerrainWireframe() {
    const geometry = useMemo(() => {
        const geo = new THREE.PlaneGeometry(35, 35, 32, 32)
        const posAttribute = geo.attributes.position
        for (let i = 0; i < posAttribute.count; i++) {
            const x = posAttribute.getX(i)
            const y = posAttribute.getY(i)
            const z = (Math.sin(x * 0.2) * 2.5) + (Math.cos(y * 0.3) * 1.5)
            posAttribute.setZ(i, z)
        }
        geo.computeVertexNormals()
        return geo
    }, [])

    return (
        <group rotation={[-Math.PI / 2, 0, 0]} position={[0, -4, 0]}>
            <mesh geometry={geometry}>
                <meshBasicMaterial color="#475569" wireframe transparent opacity={0.2} />
            </mesh>
            <gridHelper args={[40, 40, "#334155", "#0f172a"]} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0.1]} material-opacity={0.1} material-transparent />
        </group>
    )
}

function VariantLine({ points, color, label, labelPos, visible }: any) {
    const curve = useMemo(() => new THREE.CatmullRomCurve3(points), [points])

    // Smooth opacity transition
    const materialRef = useRef<any>(null)
    useFrame((state, delta) => {
        if (materialRef.current) {
            const target = visible ? 1 : 0
            materialRef.current.opacity = THREE.MathUtils.lerp(materialRef.current.opacity, target, delta * 3)
            // Hide when invisible to prevent glitches
            materialRef.current.visible = materialRef.current.opacity > 0.05
        }
    })

    return (
        <group>
            {/* Thick Tube instead of Line for better visibility */}
            <mesh>
                <tubeGeometry args={[curve, 64, 0.15, 8, false]} />
                <meshStandardMaterial ref={materialRef} color={color} transparent opacity={0} emissive={color} emissiveIntensity={0.5} />
            </mesh>

            {/* Label */}
            {visible && (
                <group position={labelPos}>
                    <Text
                        fontSize={0.5}
                        color={color}
                        anchorX="center"
                        anchorY="middle"
                        font="/fonts/Inter-Bold.woff"
                    >
                        {label}
                    </Text>
                    <mesh position={[0, -0.5, 0]}>
                        <sphereGeometry args={[0.1]} />
                        <meshBasicMaterial color={color} />
                    </mesh>
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
