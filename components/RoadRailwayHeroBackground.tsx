"use client"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { useRef, useMemo, useState, useEffect } from "react"
import * as THREE from "three"
import { Text, PerspectiveCamera } from "@react-three/drei"

// Road & Railway - Structured Storyboard Animation
function StoryboardScene() {
    // State: 0=Terrain, 1=VarA, 2=VarB, 3=VarC, 4=Compare
    const [scene, setScene] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setScene((prev) => (prev + 1) % 5)
        }, 5000) // 5 seconds per scene
        return () => clearInterval(interval)
    }, [])

    // Scene definitions for text
    const sceneInfo = [
        { title: "Project Corridor", subtitle: "Existing Terrain Context" },
        { title: "Variant A", subtitle: "Shortest Alignment" },
        { title: "Variant B", subtitle: "Reduced Earthwork" },
        { title: "Variant C", subtitle: "Balanced Solution" },
        { title: "Alignment Comparison", subtitle: "Overview" },
    ]

    return (
        <group>
            {/* Terrain: Always visible, but fades out in comparison mode */}
            <TerrainWireframe dimmed={scene === 4} />

            {/* Variant A (White) */}
            <VariantTube
                points={variants.A.points}
                color="#ffffff"
                visible={scene === 1 || scene === 4}
            />

            {/* Variant B (Blue) */}
            <VariantTube
                points={variants.B.points}
                color="#38bdf8"
                visible={scene === 2 || scene === 4}
            />

            {/* Variant C (Orange) */}
            <VariantTube
                points={variants.C.points}
                color="#f97316"
                visible={scene === 3 || scene === 4}
            />

            {/* HUD / Titles */}
            <SceneTitle
                title={sceneInfo[scene].title}
                subtitle={sceneInfo[scene].subtitle}
            />
        </group>
    )
}

function SceneTitle({ title, subtitle }: { title: string, subtitle: string }) {
    return (
        <group position={[0, 8, -5]}>
            <Text
                fontSize={1.2}
                color="#e2e8f0"
                anchorX="center"
                anchorY="bottom"
                font="/fonts/Inter-Bold.woff"
            >
                {title}
            </Text>
            <Text
                position={[0, -0.8, 0]}
                fontSize={0.6}
                color="#94a3b8"
                anchorX="center"
                anchorY="top"
                font="/fonts/Inter-Regular.woff"
            >
                {subtitle}
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

function TerrainWireframe({ dimmed }: { dimmed: boolean }) {
    const materialRef = useRef<THREE.MeshBasicMaterial>(null)

    useFrame((state, delta) => {
        if (!materialRef.current) return
        // Increased base opacity from 0.2 to 0.4 for better visibility
        const targetOp = dimmed ? 0.1 : 0.4
        materialRef.current.opacity = THREE.MathUtils.lerp(materialRef.current.opacity, targetOp, delta * 2)
    })

    const geometry = useMemo(() => {
        const geo = new THREE.PlaneGeometry(35, 35, 24, 24) // Reduced polys for cleaner look
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
                <meshBasicMaterial ref={materialRef} color="#94a3b8" wireframe transparent opacity={0.4} />
            </mesh>
            <gridHelper args={[40, 40, "#cbd5e1", "#475569"]} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0.1]} material-opacity={0.2} material-transparent />
        </group>
    )
}

function VariantTube({ points, color, visible }: { points: THREE.Vector3[], color: string, visible: boolean }) {
    const curve = useMemo(() => new THREE.CatmullRomCurve3(points), [points])
    const materialRef = useRef<THREE.MeshStandardMaterial>(null)

    useFrame((state, delta) => {
        if (!materialRef.current) return
        const targetOp = visible ? 1 : 0
        materialRef.current.opacity = THREE.MathUtils.lerp(materialRef.current.opacity, targetOp, delta * 4) // Fast transition
        materialRef.current.visible = materialRef.current.opacity > 0.01
    })

    return (
        <mesh>
            <tubeGeometry args={[curve, 64, 0.3, 8, false]} /> {/* Thick tube */}
            <meshStandardMaterial
                ref={materialRef}
                color={color}
                transparent
                opacity={0}
                emissive={color}
                emissiveIntensity={0.6}
                roughness={0.4}
            />
        </mesh>
    )
}

export default function RoadRailwayHeroBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute right-0 top-0 bottom-0 w-full opacity-90">
                <Canvas style={{ background: 'transparent' }}>
                    {/* Camera adjusted to look more to the right side */}
                    <PerspectiveCamera makeDefault position={[25, 15, 25]} fov={28} onUpdate={c => c.lookAt(8, -2, 0)} />

                    <ambientLight intensity={0.8} />
                    <pointLight position={[10, 20, 10]} intensity={1.5} color="#ffffff" />

                    {/* Shift Scene to the RIGHT to escape the text overlay (X=8) */}
                    <group position={[8, -2, 0]}>
                        <StoryboardScene />
                    </group>
                </Canvas>
            </div>
        </div>
    )
}
