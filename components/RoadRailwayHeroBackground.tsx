"use client"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { useRef, useMemo, useState, useEffect } from "react"
import * as THREE from "three"
import { Text, PerspectiveCamera } from "@react-three/drei"

/**
 * ROAD & RAILWAY HERO ANIMATION - FINAL CLEAN IMPLEMENTATION
 * 
 * Concept: Engineering Alignment Comparison (Storyboard)
 * Sequence:
 * 1. Terrain Only (Context)
 * 2. Variant A (Shortest)
 * 3. Variant B (Earthwork)
 * 4. Variant C (Balanced)
 * 5. Comparison (All Overlay)
 * 
 * Technical: fixed camera, shifted right position, thick emissive lines.
 */

// --- CONFIGURATION ---
const SCENE_DURATION = 5000 // 5 seconds per scene
const SCENE_OFFSET = [8, -2, 0] // Shift right to avoid text
const CAMERA_POS = [25, 15, 25] as [number, number, number]
const CAMERA_LOOK_AT = [8, -2, 0] as [number, number, number]

export default function RoadRailwayHeroBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Main container with slight translucency */}
            <div className="absolute inset-0 w-full h-full opacity-100 mix-blend-screen">
                <Canvas style={{ background: 'transparent' }}>
                    <SceneSetup />
                    <group position={SCENE_OFFSET}>
                        <AnimationController />
                    </group>
                </Canvas>
            </div>
        </div>
    )
}

function SceneSetup() {
    return (
        <>
            <PerspectiveCamera makeDefault position={CAMERA_POS} fov={28} onUpdate={c => c.lookAt(...CAMERA_LOOK_AT)} />
            <ambientLight intensity={1.0} />
            <directionalLight position={[10, 20, 5]} intensity={1.5} color="#ffffff" />
            <pointLight position={[-10, 10, -10]} intensity={0.5} />
        </>
    )
}

function AnimationController() {
    // 0:Terrain, 1:VarA, 2:VarB, 3:VarC, 4:All
    const [sceneIndex, setSceneIndex] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setSceneIndex(prev => (prev + 1) % 5)
        }, SCENE_DURATION)
        return () => clearInterval(timer)
    }, [])

    const texts = [
        { title: "Project Corridor", subtitle: "Existing Terrain Context" },
        { title: "Variant A", subtitle: "Shortest Alignment" },
        { title: "Variant B", subtitle: "Reduced Earthwork" },
        { title: "Variant C", subtitle: "Balanced Solution" },
        { title: "Alignment Comparison", subtitle: "Overview" },
    ]

    return (
        <group>
            <Terrain active={true} dimmed={sceneIndex === 4} />

            {/* Variant A: White (Direct) */}
            <RoadPath
                points={[
                    new THREE.Vector3(-12, -0.5, 12),
                    new THREE.Vector3(-4, 0, 4),
                    new THREE.Vector3(4, 0, -4),
                    new THREE.Vector3(12, 0.5, -12)
                ]}
                color="#ffffff"
                visible={sceneIndex === 1 || sceneIndex === 4}
            />

            {/* Variant B: Blue (Curved/Low) */}
            <RoadPath
                points={[
                    new THREE.Vector3(-12, -0.5, 12),
                    new THREE.Vector3(-8, -3, 6),
                    new THREE.Vector3(0, -4, 0),
                    new THREE.Vector3(8, -3, -6),
                    new THREE.Vector3(12, 0.5, -12)
                ]}
                color="#38bdf8" // Light Blue
                visible={sceneIndex === 2 || sceneIndex === 4}
            />

            {/* Variant C: Orange (Balanced) */}
            <RoadPath
                points={[
                    new THREE.Vector3(-12, -0.5, 12),
                    new THREE.Vector3(-4, 3, 8),
                    new THREE.Vector3(4, 3, -8),
                    new THREE.Vector3(12, 0.5, -12)
                ]}
                color="#f97316" // Orange
                visible={sceneIndex === 3 || sceneIndex === 4}
            />

            <HUD title={texts[sceneIndex].title} subtitle={texts[sceneIndex].subtitle} />
        </group>
    )
}

function Terrain({ active, dimmed }: { active: boolean, dimmed: boolean }) {
    // A clean grid terrain
    const geometry = useMemo(() => {
        const geo = new THREE.PlaneGeometry(35, 35, 30, 30)
        const pos = geo.attributes.position
        for (let i = 0; i < pos.count; i++) {
            const x = pos.getX(i)
            const y = pos.getY(i)
            // Valley shape
            const z = (Math.sin(x * 0.15) * 3) + (Math.cos(y * 0.2) * 1.5)
            pos.setZ(i, z)
        }
        geo.computeVertexNormals()
        return geo
    }, [])

    // Fade logic
    const ref = useRef<THREE.MeshBasicMaterial>(null)
    useFrame((_, delta) => {
        if (!ref.current) return
        const target = dimmed ? 0.1 : 0.3
        ref.current.opacity = THREE.MathUtils.lerp(ref.current.opacity, target, delta * 2)
    })

    return (
        <group rotation={[-Math.PI / 2, 0, 0]} position={[0, -4, 0]}>
            <mesh geometry={geometry}>
                <meshBasicMaterial
                    ref={ref}
                    color="#94a3b8"
                    wireframe
                    transparent
                    opacity={0.3}
                />
            </mesh>
        </group>
    )
}

function RoadPath({ points, color, visible }: { points: THREE.Vector3[], color: string, visible: boolean }) {
    const curve = useMemo(() => new THREE.CatmullRomCurve3(points), [points])
    const ref = useRef<THREE.MeshStandardMaterial>(null)

    useFrame((_, delta) => {
        if (!ref.current) return
        const target = visible ? 1 : 0
        ref.current.opacity = THREE.MathUtils.lerp(ref.current.opacity, target, delta * 3)
        // Culling optimization: stop rendering if barely visible
        ref.current.visible = ref.current.opacity > 0.01
    })

    return (
        <mesh>
            <tubeGeometry args={[curve, 64, 0.4, 8, false]} />
            <meshStandardMaterial
                ref={ref}
                color={color}
                emissive={color}
                emissiveIntensity={0.8}
                transparent
                opacity={0}
                roughness={0.2}
            />
        </mesh>
    )
}

function HUD({ title, subtitle }: { title: string, subtitle: string }) {
    return (
        <group position={[0, 8, -5]} renderOrder={999}>
            <Text
                fontSize={1.0}
                color="#ffffff"
                anchorX="center"
                anchorY="bottom"
                font="/fonts/Inter-Bold.woff"
                fillOpacity={0.9}
            >
                {title}
            </Text>
            <Text
                position={[0, -0.6, 0]}
                fontSize={0.5}
                color="#cbd5e1"
                anchorX="center"
                anchorY="top"
                font="/fonts/Inter-Regular.woff"
                fillOpacity={0.7}
            >
                {subtitle}
            </Text>
        </group>
    )
}
