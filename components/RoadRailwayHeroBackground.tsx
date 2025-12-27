"use client"
import { Canvas, useFrame } from "@react-three/fiber"
import { useRef, useMemo, useState, useEffect } from "react"
import * as THREE from "three"
import { Text, PerspectiveCamera } from "@react-three/drei"

/**
 * ROAD & RAILWAY HERO ANIMATION - VISIBILITY FIX
 * 
 * Changes:
 * 1. Removed mix-blend-screen (Causes invisibility on light backgrounds).
 * 2. Switched from StandardMaterial to BasicMaterial (Guarantees visibility without light).
 * 3. Simplified camera logic: Scene at 0,0,0, Camera offset for 'Right' view.
 */

const SCENE_DURATION = 5000

export default function RoadRailwayHeroBackground() {
    return (
        // Removed pointer-events-none from parent to allow potential interaction if needed, 
        // but kept it on the overlay div.
        // Removed mix-blend modes. strictly alpha blending.
        <div className="absolute inset-0 w-full h-full">
            <Canvas style={{ background: 'transparent' }} gl={{ alpha: true, antialias: true }}>
                <SceneSetup />
                {/* Scene centering: We keep geometry effectively at 0,0,0 and just position camera to see it on the right */}
                <group position={[6, -2, 0]}>
                    <AnimationController />
                </group>
            </Canvas>
        </div>
    )
}

function SceneSetup() {
    return (
        <>
            {/* Camera looking slightly to the side to frame the object on the right */}
            {/* Position X=20 pushes camera right. Looking at X=6 keeps subject centered relative to camera frame? 
                Actually, to put object on Right of screen, Camera should point Left of object or Object moved Right.
                We moved Object group to [6, -2, 0]. Camera at [20, 10, 20] looking at [6, -2, 0] works.
            */}
            <PerspectiveCamera makeDefault position={[20, 12, 20]} fov={32} onUpdate={c => c.lookAt(6, -2, 0)} />
            <ambientLight intensity={1} />
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
                color="#38bdf8"
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
                color="#f97316"
                visible={sceneIndex === 3 || sceneIndex === 4}
            />

            <HUD title={texts[sceneIndex].title} subtitle={texts[sceneIndex].subtitle} />
        </group>
    )
}

function Terrain({ active, dimmed }: { active: boolean, dimmed: boolean }) {
    const geometry = useMemo(() => {
        const geo = new THREE.PlaneGeometry(40, 40, 20, 20)
        const pos = geo.attributes.position
        for (let i = 0; i < pos.count; i++) {
            const x = pos.getX(i)
            const y = pos.getY(i)
            // Simpler valley
            const z = (Math.sin(x * 0.1) * 4) + (Math.cos(y * 0.1) * 2)
            pos.setZ(i, z)
        }
        return geo
    }, [])

    const ref = useRef<THREE.MeshBasicMaterial>(null)
    useFrame((_, delta) => {
        if (!ref.current) return
        const target = dimmed ? 0.1 : 0.4 // Higher base opacity
        ref.current.opacity = THREE.MathUtils.lerp(ref.current.opacity, target, delta * 3)
    })

    return (
        <group rotation={[-Math.PI / 2, 0, 0]} position={[0, -5, 0]}>
            <mesh geometry={geometry}>
                <meshBasicMaterial
                    ref={ref}
                    color="#94a3b8"
                    wireframe
                    transparent
                    opacity={0.4}
                />
            </mesh>
        </group>
    )
}

function RoadPath({ points, color, visible }: { points: THREE.Vector3[], color: string, visible: boolean }) {
    const curve = useMemo(() => new THREE.CatmullRomCurve3(points), [points])
    const ref = useRef<THREE.MeshBasicMaterial>(null)

    useFrame((_, delta) => {
        if (!ref.current) return
        const target = visible ? 1 : 0
        ref.current.opacity = THREE.MathUtils.lerp(ref.current.opacity, target, delta * 5)
        ref.current.visible = ref.current.opacity > 0.05
    })

    return (
        <mesh>
            <tubeGeometry args={[curve, 64, 0.5, 8, false]} /> {/* Thicker: 0.5 radius */}
            {/* BASIC MATERIAL: Ignores light, always pure color. Best for 'nothing visible' bugs. */}
            <meshBasicMaterial
                ref={ref}
                color={color}
                transparent
                opacity={0}
            />
        </mesh>
    )
}

function HUD({ title, subtitle }: { title: string, subtitle: string }) {
    return (
        <group position={[0, 8, -5]} renderOrder={999}>
            <Text
                fontSize={1.2}
                color="#ffffff"
                anchorX="center"
                anchorY="bottom"
                font="/fonts/Inter-Bold.woff"
                fillOpacity={1} // Always 1
                outlineWidth={0.05}
                outlineColor="#000000"
            >
                {title}
            </Text>
            <Text
                position={[0, -0.7, 0]}
                fontSize={0.6}
                color="#cbd5e1"
                anchorX="center"
                anchorY="top"
                font="/fonts/Inter-Regular.woff"
                fillOpacity={0.9}
            >
                {subtitle}
            </Text>
        </group>
    )
}
