"use client"
import { Canvas, useFrame } from "@react-three/fiber"
import { useRef, useMemo, useState, useEffect } from "react"
import * as THREE from "three"
import { PerspectiveCamera, Text } from "@react-three/drei"

/**
 * BRIDGE DESIGN HERO ANIMATION - VISIBILITY FIX
 * 
 * Changes:
 * 1. Switched to MeshBasicMaterial (Self-illuminated, guaranteed visibility).
 * 2. Increased line thickness (Tubes).
 * 3. High contrast colors (White, Orange, Red).
 */

const SCENE_OFFSET = [8, -4, 0] // Shift right
const ANIMATION_SPEED = 1

export default function BridgeDesignHeroBackground() {
    return (
        <div className="absolute inset-0 w-full h-full pointer-events-none">
            <Canvas style={{ background: 'transparent' }} gl={{ alpha: true, antialias: true }}>
                <SceneSetup />
                <group position={SCENE_OFFSET}>
                    <BridgeConstructionSequence />
                </group>
            </Canvas>
        </div>
    )
}

function SceneSetup() {
    return (
        <>
            <PerspectiveCamera makeDefault position={[25, 15, 25]} fov={30} onUpdate={c => c.lookAt(8, 0, 0)} />
            {/* Ambient light strictly for scene ambiance if needed, but BasicMaterial ignores it */}
            <ambientLight intensity={1} />

            {/* Water Plane / Grid - BRIGHTER */}
            <gridHelper
                args={[60, 20, "#94a3b8", "#475569"]}
                position={[8, -4, 0]}
                rotation={[0, 0, 0]}
            />
        </>
    )
}

function BridgeConstructionSequence() {
    // 0-1: Foundations, 1-2: Towers, 2-3: Cables, 3-4: Suspenders, 4-5: Deck
    const [progress, setProgress] = useState(0)

    useFrame((_, delta) => {
        setProgress(prev => {
            const next = prev + delta * 0.8 * ANIMATION_SPEED
            return next > 6 ? 0 : next // Loop after 6s (1s buffer at end)
        })
    })

    return (
        <group>
            <Foundations progress={progress} />
            <Towers progress={progress} />
            <MainCables progress={progress} />
            <Suspenders progress={progress} />
            <Deck progress={progress} />

            <Label progress={progress} />
        </group>
    )
}

function Foundations({ progress }: { progress: number }) {
    // Stage 0 -> 1
    const scale = THREE.MathUtils.clamp(progress, 0, 1)

    return (
        <group>
            {/* Left Foundation */}
            <mesh position={[-10, -2 + scale, 0]}>
                <boxGeometry args={[4, 2, 4]} />
                <meshBasicMaterial color="#64748b" transparent opacity={0.9} />
            </mesh>
            {/* Right Foundation */}
            <mesh position={[10, -2 + scale, 0]}>
                <boxGeometry args={[4, 2, 4]} />
                <meshBasicMaterial color="#64748b" transparent opacity={0.9} />
            </mesh>
        </group>
    )
}

function Towers({ progress }: { progress: number }) {
    // Stage 1 -> 2
    const fill = THREE.MathUtils.clamp(progress - 1, 0, 1) // 0 to 1
    const height = 12 * fill

    // Using easing for pop-up effect
    const ease = 1 - Math.pow(1 - fill, 3)
    const currentH = 12 * ease

    if (progress < 1) return null

    return (
        <group>
            {/* Left Tower - WHITE Basic Material */}
            <group position={[-10, 0, 0]}>
                {/* H-Shape Legs */}
                <mesh position={[0, currentH / 2, 1.5]}>
                    <boxGeometry args={[1.5, currentH, 1.5]} />
                    <meshBasicMaterial color="#ffffff" />
                </mesh>
                <mesh position={[0, currentH / 2, -1.5]}>
                    <boxGeometry args={[1.5, currentH, 1.5]} />
                    <meshBasicMaterial color="#ffffff" />
                </mesh>
            </group>

            {/* Right Tower - WHITE Basic Material */}
            <group position={[10, 0, 0]}>
                <mesh position={[0, currentH / 2, 1.5]}>
                    <boxGeometry args={[1.5, currentH, 1.5]} />
                    <meshBasicMaterial color="#ffffff" />
                </mesh>
                <mesh position={[0, currentH / 2, -1.5]}>
                    <boxGeometry args={[1.5, currentH, 1.5]} />
                    <meshBasicMaterial color="#ffffff" />
                </mesh>
            </group>
        </group>
    )
}

function MainCables({ progress }: { progress: number }) {
    // Stage 2 -> 3
    const p = THREE.MathUtils.clamp(progress - 2, 0, 1)

    // Catenary Curve
    const cablePoints = useMemo(() => {
        // From -20 (anchor) to -10 (tower top) to 10 (tower top) to 20 (anchor)
        const leftAnchor = new THREE.Vector3(-22, 0, 0)
        const leftTower = new THREE.Vector3(-10, 12, 0)
        const midPoint = new THREE.Vector3(0, 4, 0) // Slack
        const rightTower = new THREE.Vector3(10, 12, 0)
        const rightAnchor = new THREE.Vector3(22, 0, 0)

        const curve = new THREE.CatmullRomCurve3([
            leftAnchor,
            leftTower,
            midPoint,
            rightTower,
            rightAnchor
        ])
        return curve.getPoints(50)
    }, [])

    if (progress < 2) return null

    // Draw partial
    const drawCount = Math.floor(p * 50)
    const currentPoints = cablePoints.slice(0, Math.max(2, drawCount))

    return (
        <group>
            <mesh>
                <tubeGeometry args={[
                    new THREE.CatmullRomCurve3(currentPoints),
                    drawCount, // segments
                    0.25, // radius (Thicker)
                    8,
                    false
                ]} />
                <meshBasicMaterial color="#ef4444" /> {/* Bright RED Basic Material */}
            </mesh>
        </group>
    )
}

function Suspenders({ progress }: { progress: number }) {
    // Stage 3 -> 4
    const p = THREE.MathUtils.clamp(progress - 3, 0, 1)

    // Vertical lines dropping from main cable
    // Calculate positions evenly between towers (-10 to 10)
    const count = 10
    const suspenders = []

    for (let i = 1; i < count; i++) {
        const x = THREE.MathUtils.lerp(-10, 10, i / count)
        const yTop = 0.08 * x * x + 4
        const yBottom = 2 // Deck level

        const appearThreshold = i / count
        if (p > appearThreshold) {
            const grow = Math.min(1, (p - appearThreshold) * 5)
            const currentYBottom = THREE.MathUtils.lerp(yTop, yBottom, grow)

            suspenders.push(
                <mesh key={i} position={[x, (yTop + currentYBottom) / 2, 0]}>
                    <boxGeometry args={[0.15, yTop - currentYBottom, 0.15]} />
                    <meshBasicMaterial color="#cbd5e1" />
                </mesh>
            )
        }
    }

    if (progress < 3) return null

    return <group>{suspenders}</group>
}

function Deck({ progress }: { progress: number }) {
    // Stage 4 -> 5
    const p = THREE.MathUtils.clamp(progress - 4, 0, 1)

    if (progress < 4) return null

    return (
        <group>
            {/* Simple Scale approach: Grows from -22 to Right */}
            <mesh position={[-22 + (22 * p), 1.5, 0]}> {/* Moves center */}
                <boxGeometry args={[44 * p, 1, 4]} />
                <meshBasicMaterial color="#fcd34d" /> {/* Bright Yellow/Orange Basic */}
            </mesh>
        </group>
    )
}

function Label({ progress }: { progress: number }) {
    let text = ""
    if (progress < 1) text = "Temeller (Foundations)"
    else if (progress < 2) text = "Kuleler (Pylons)"
    else if (progress < 3) text = "Ana Halatlar (Main Cables)"
    else if (progress < 4) text = "Askılar (Suspenders)"
    else if (progress < 5) text = "Tabliye (Deck)"
    else text = "Asma Köprü Tamamlandı"

    return (
        <group position={[0, 9, 0]}>
            <Text
                fontSize={1}
                color="#ffffff"
                anchorX="center"
                anchorY="bottom"
                font="/fonts/Inter-Bold.woff"
                fillOpacity={1}
                outlineWidth={0.05}
                outlineColor="#000000"
            >
                {text}
            </Text>
        </group>
    )
}
