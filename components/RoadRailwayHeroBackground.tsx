"use client"
import { Canvas, useFrame } from "@react-three/fiber"
import { useRef, useMemo, useState, useEffect } from "react"
import * as THREE from "three"
import { Text } from "@react-three/drei"

// Road & Railway Variant Comparison Animation
function VariantScene() {
    const groupRef = useRef<THREE.Group>(null)

    // 0 = Bridge (Direct), 1 = Embankment (Curved/Fill)
    const [activeVariant, setActiveVariant] = useState(0)

    // Gentle rotation
    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y = -0.2 + (Math.sin(state.clock.elapsedTime * 0.1) * 0.1)
        }
    })

    // Toggle Timer
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveVariant((prev) => (prev === 0 ? 1 : 0))
        }, 5000) // Switch every 5 seconds
        return () => clearInterval(interval)
    }, [])

    return (
        <group ref={groupRef}>
            <TerrainValley />

            {/* Both variants exist, we control visibility/opacity */}
            <BridgeVariant active={activeVariant === 0} />
            <EmbankmentVariant active={activeVariant === 1} />

            {/* Label indicating the active variant */}
            <VariantLabel active={activeVariant === 0} text="Varyant A: Viyadük Geçişi" position={[0, 4, 0]} color="#38bdf8" />
            <VariantLabel active={activeVariant === 1} text="Varyant B: Dolgu ve Kurp" position={[0, 4, 0]} color="#fbbf24" />
        </group>
    )
}

function VariantLabel({ active, text, position, color }: any) {
    // Smooth fade in/out
    const ref = useRef<any>()
    useFrame((state, delta) => {
        if (!ref.current) return
        const targetOp = active ? 1 : 0
        ref.current.fillOpacity = THREE.MathUtils.lerp(ref.current.fillOpacity, targetOp, delta * 2)
    })

    return (
        <Text
            ref={ref}
            position={position}
            fontSize={0.5}
            color={color}
            anchorX="center"
            anchorY="middle"
            fillOpacity={0} // Start invisible
            font="/fonts/Inter-Bold.woff" // Optional, default font usually works or custom font path needed
        >
            {text}
        </Text>
    )
}

function TerrainValley() {
    // A valley shape: High on sides (-X, +X), Low in middle (0)
    const geometry = useMemo(() => {
        const geo = new THREE.PlaneGeometry(30, 30, 40, 40)
        const posAttribute = geo.attributes.position

        for (let i = 0; i < posAttribute.count; i++) {
            const x = posAttribute.getX(i)
            // Valley curve: z = x^2 roughly
            // x goes from -15 to 15.
            const normalizedX = x / 10
            let z = (normalizedX * normalizedX) * 2 - 4 // Drop to -4 in middle

            // Add some noise
            z += Math.random() * 0.2

            posAttribute.setZ(i, z)
        }
        geo.computeVertexNormals()
        return geo
    }, [])

    return (
        <group rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
            <mesh geometry={geometry}>
                <meshBasicMaterial color="#1e293b" wireframe transparent opacity={0.15} />
            </mesh>
            <gridHelper args={[30, 30, "#334155", "#0f172a"]} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0.1]} material-opacity={0.1} material-transparent />
        </group>
    )
}

// Variant A: Bridge (Straight)
function BridgeVariant({ active }: { active: boolean }) {
    const groupRef = useRef<THREE.Group>(null)

    useFrame((state, delta) => {
        if (!groupRef.current) return
        // Fade logic
        const targetScale = active ? 1 : 0.95
        const targetOp = active ? 1 : 0

        // We can't set opacity on group directly for all children easily without custom shader or traversing materials
        // Traverse and set opacity
        groupRef.current.traverse((child: any) => {
            if (child.isMesh && child.material) {
                child.material.transparent = true
                child.material.opacity = THREE.MathUtils.lerp(child.material.opacity, targetOp, delta * 3)
                // Also toggle visibility to save draw calls when fully hidden
                child.visible = child.material.opacity > 0.01
            }
            if (child.isLine || child.isLineSegments) {
                child.material.transparent = true
                child.material.opacity = THREE.MathUtils.lerp(child.material.opacity, targetOp * 0.5, delta * 3)
                child.visible = child.material.opacity > 0.01
            }
        })
    })

    return (
        <group ref={groupRef}>
            {/* Straight Bridge Deck */}
            <mesh position={[0, 0, 0]}>
                <boxGeometry args={[22, 0.5, 3]} /> {/* Long x-axis */}
                <meshStandardMaterial color="#38bdf8" />
            </mesh>

            {/* Piers */}
            {[-8, -4, 0, 4, 8].map((x, i) => (
                <group key={i} position={[x, -3, 0]}>
                    <mesh position={[0, 0, 0]}>
                        <boxGeometry args={[1, 6, 2]} />
                        <meshStandardMaterial color="#0ea5e9" />
                    </mesh>
                </group>
            ))}
        </group>
    )
}

// Variant B: Embankment (Curved Fill)
function EmbankmentVariant({ active }: { active: boolean }) {
    const groupRef = useRef<THREE.Group>(null)

    useFrame((state, delta) => {
        if (!groupRef.current) return
        const targetOp = active ? 1 : 0
        groupRef.current.traverse((child: any) => {
            if (child.isMesh && child.material) {
                child.material.transparent = true
                child.material.opacity = THREE.MathUtils.lerp(child.material.opacity, targetOp, delta * 3)
                child.visible = child.material.opacity > 0.01
            }
            if (child.isLine || child.isLineSegments) {
                child.material.transparent = true
                child.material.opacity = THREE.MathUtils.lerp(child.material.opacity, targetOp * 0.5, delta * 3)
                child.visible = child.material.opacity > 0.01
            }
        })
    })

    // S-Curve path
    const curve = useMemo(() => new THREE.CatmullRomCurve3([
        new THREE.Vector3(-12, -2, 8),
        new THREE.Vector3(-5, -4, 2), // Dip down to terrain level
        new THREE.Vector3(5, -4, -2),
        new THREE.Vector3(12, -2, -8),
    ]), [])

    const tubeGeo = useMemo(() => new THREE.TubeGeometry(curve, 64, 1.5, 8, false), [curve])

    return (
        <group ref={groupRef}>
            {/* The Road Surface */}
            <mesh geometry={tubeGeo}>
                <meshStandardMaterial color="#fbbf24" roughness={0.8} />
            </mesh>

            {/* The Fill Earthwork (Simplified as blocks under curve) */}
            {/* This simulates the 'Embankment' volume */}
            <mesh position={[0, -5, 0]} rotation={[0, -0.2, 0]}>
                <boxGeometry args={[10, 2, 8]} />
                <meshStandardMaterial color="#d97706" wireframe opacity={0.3} />
            </mesh>
        </group>
    )
}

export default function RoadRailwayHeroBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute right-0 top-0 bottom-0 w-full opacity-90">
                <Canvas
                    camera={{ position: [0, 8, 16], fov: 40 }} // Central view to see both sides better
                    style={{ background: 'transparent' }}
                >
                    <ambientLight intensity={0.6} />
                    <pointLight position={[10, 10, 10]} intensity={1} color="#ffffff" />
                    <directionalLight position={[-5, 5, 5]} intensity={0.5} />

                    <group position={[0, 0, -2]}>
                        <VariantScene />
                    </group>
                </Canvas>
            </div>
        </div>
    )
}
