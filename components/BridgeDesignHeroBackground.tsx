"use client"
import { Canvas, useFrame } from "@react-three/fiber"
import { useRef, useMemo, useState, useEffect } from "react"
import * as THREE from "three"
import { PerspectiveCamera, Text } from "@react-three/drei"

/**
 * BRIDGE DESIGN HERO ANIMATION
 * Concept: Suspension Bridge Genesis
 * Sequence: Foundations -> Towers -> Main Cables -> Suspenders -> Deck
 */

const SCENE_OFFSET = [8, -4, 0] // Shift right
const ANIMATION_SPEED = 1

export default function BridgeDesignHeroBackground() {
    return (
        <div className="absolute inset-0 w-full h-full">
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
            <ambientLight intensity={0.8} />
            <directionalLight position={[-10, 20, 10]} intensity={1.5} color="#ffffff" />

            {/* Water Plane / Grid */}
            <gridHelper
                args={[60, 20, "#334155", "#1e293b"]}
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
                <meshStandardMaterial color="#475569" transparent opacity={0.8} />
            </mesh>
            {/* Right Foundation */}
            <mesh position={[10, -2 + scale, 0]}>
                <boxGeometry args={[4, 2, 4]} />
                <meshStandardMaterial color="#475569" transparent opacity={0.8} />
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
            {/* Left Tower */}
            <group position={[-10, 0, 0]}>
                {/* H-Shape Legs */}
                <mesh position={[0, currentH / 2, 1.5]}>
                    <boxGeometry args={[1.5, currentH, 1.5]} />
                    <meshStandardMaterial color="#cbd5e1" />
                </mesh>
                <mesh position={[0, currentH / 2, -1.5]}>
                    <boxGeometry args={[1.5, currentH, 1.5]} />
                    <meshStandardMaterial color="#cbd5e1" />
                </mesh>
                {/* Crossbar (appears later ideally, but simplified here) */}
                {fill > 0.6 && (
                    <mesh position={[0, currentH * 0.7, 0]}>
                        <boxGeometry args={[1.2, 0.5, 4]} />
                        <meshStandardMaterial color="#94a3b8" />
                    </mesh>
                )}
            </group>

            {/* Right Tower */}
            <group position={[10, 0, 0]}>
                <mesh position={[0, currentH / 2, 1.5]}>
                    <boxGeometry args={[1.5, currentH, 1.5]} />
                    <meshStandardMaterial color="#cbd5e1" />
                </mesh>
                <mesh position={[0, currentH / 2, -1.5]}>
                    <boxGeometry args={[1.5, currentH, 1.5]} />
                    <meshStandardMaterial color="#cbd5e1" />
                </mesh>
                {fill > 0.6 && (
                    <mesh position={[0, currentH * 0.7, 0]}>
                        <boxGeometry args={[1.2, 0.5, 4]} />
                        <meshStandardMaterial color="#94a3b8" />
                    </mesh>
                )}
            </group>
        </group>
    )
}

function MainCables({ progress }: { progress: number }) {
    // Stage 2 -> 3
    const p = THREE.MathUtils.clamp(progress - 2, 0, 1)

    // Catenary Curve
    const cablePoints = useMemo(() => {
        const points = []
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
                    0.15, // radius
                    8,
                    false
                ]} />
                <meshBasicMaterial color="#ef4444" /> {/* Red highlight cables */}
            </mesh>

            {/* Second cable for 3D depth */}
            <mesh position={[0, 0, -0.2]}> {/* Slight offset? No, usually parallel. Let's do parallel cables later if needed. For now single strong line */}
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
        // Approximate cable height at x (Parabola: y = x^2 / k)
        // y(-10) = 12, y(0) = 4.  y = A*x^2 + 4.  12 = 100A + 4 -> 8 = 100A -> A = 0.08
        const yTop = 0.08 * x * x + 4
        const yBottom = 2 // Deck level

        // Staggered appearance based on progress p
        // Appear left to right
        const appearThreshold = i / count
        if (p > appearThreshold) {
            const grow = Math.min(1, (p - appearThreshold) * 5) // Fast grow
            const currentYBottom = THREE.MathUtils.lerp(yTop, yBottom, grow)

            suspenders.push(
                <mesh key={i} position={[x, (yTop + currentYBottom) / 2, 0]}>
                    <boxGeometry args={[0.1, yTop - currentYBottom, 0.1]} />
                    <meshBasicMaterial color="#94a3b8" />
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
            {/* Center Span growing from center out? Or Left to right? Left to Right matches flow */}
            {/* Left to right fill: -22 to 22 */}
            <group position={[-22 + (22 * p), 2, 0]}>
                {/* Pivot logic is tricky, simple scale X is easier if centered */}
            </group>

            {/* Simple Scale approach: Grows from -22 to Right */}
            <mesh position={[-22 + (22 * p), 1.5, 0]}> {/* Moves center */}
                <boxGeometry args={[44 * p, 1, 4]} />
                <meshStandardMaterial color="#fcd34d" />
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
                fillOpacity={0.9}
            >
                {text}
            </Text>
        </group>
    )
}
