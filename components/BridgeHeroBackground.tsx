"use client"
import { Canvas, useFrame, extend } from "@react-three/fiber"
import { useRef, useState, useMemo, useEffect } from "react"
import * as THREE from "three"

// Define geometry props interface to fix lint errors
interface LineGeometryProps {
    points: THREE.Vector3[]
    color: string
    opacity: number
    linewidth: number
}

// Custom Line Component using BufferGeometry
function CustomLine({ points, color, opacity, linewidth }: LineGeometryProps) {
    const geometry = useMemo(() => {
        return new THREE.BufferGeometry().setFromPoints(points)
    }, [points])

    return (
        <line>
            <primitive object={geometry} />
            <lineBasicMaterial color={color} transparent opacity={opacity} linewidth={linewidth} />
        </line>
    )
}

function BosphorusBridgeSequence({ globalTime }: { globalTime: number }) {
    // --- Specs (Approx Bosphorus Bridge Ratios) ---
    // Span: ~1074m. Height: ~165m. Ratio ~ 6.5 : 1
    const span = 40
    const pylonH = 12
    const deckY = -2
    const sag = 4

    // --- Timeline Logic ---
    // Total Loop: 20s
    // Scene 1: 0-6s (Main Geometry) - Pylons + Deck Axis
    // Scene 2: 6-14s (Suspension System) - Main Cables -> Hangers
    // Scene 3: 14-20s (Full Overview) - Hold

    const inScene1 = globalTime < 6
    const inScene2 = globalTime >= 6 && globalTime < 14
    const inScene3 = globalTime >= 14

    // Progress within scenes for animation
    // Scene 1: Pylons rise (0-3s), Deck Axis appears (3-6s)
    const pylonProgress = Math.min(Math.max((globalTime - 0) / 2, 0), 1)
    const axisProgress = Math.min(Math.max((globalTime - 2.5) / 2.5, 0), 1)

    // Scene 2: Cable Extends (6-10s), Hangers Drop (10-14s)
    const mainCableProgress = Math.min(Math.max((globalTime - 6) / 3, 0), 1)
    const hangerProgress = Math.min(Math.max((globalTime - 9) / 4, 0), 1)

    // --- Geometries ---

    // 1. Pylons (H-shaped towers)
    // We only show thick wireframes.
    // West Pylon
    const pylonWestX = -span / 2
    const pylonEastX = span / 2

    const Pylon = ({ x, heightProgress }: { x: number, heightProgress: number }) => {
        const h = pylonH * heightProgress
        if (h < 0.1) return null

        // Main Legs
        const legDist = 2 // Width of tower
        const legW = 0.8

        // Helper to draw a box wireframe
        const BoxWire = ({ pos, size }: { pos: [number, number, number], size: [number, number, number] }) => (
            <group position={pos}>
                <lineSegments>
                    <edgesGeometry args={[new THREE.BoxGeometry(...size)]} />
                    <lineBasicMaterial color="#1e40af" linewidth={2} transparent opacity={0.9} />
                </lineSegments>
            </group>
        )

        return (
            <group position={[x, deckY + pylonH / 2 - (pylonH - h) / 2, 0]}>
                {/* Leg 1 */}
                <BoxWire pos={[0, 0, -legDist / 2]} size={[legW, h, legW]} />
                {/* Leg 2 */}
                <BoxWire pos={[0, 0, legDist / 2]} size={[legW, h, legW]} />

                {/* Cross Bracing (Horizontal) - Appear if tall enough */}
                {h > pylonH * 0.5 && (
                    <BoxWire pos={[0, pylonH * 0.1, 0]} size={[legW * 0.8, 0.5, legDist]} />
                )}
                {h > pylonH * 0.8 && (
                    <BoxWire pos={[0, pylonH * 0.35, 0]} size={[legW * 0.8, 0.5, legDist]} />
                )}
            </group>
        )
    }

    // 2. Deck Axis (The "Spine")
    // Simple line across
    const deckAxisPoints = useMemo(() => [
        new THREE.Vector3(-span / 2 - 5, deckY, 0),
        new THREE.Vector3(span / 2 + 5, deckY, 0)
    ], [])

    // 3. Main Cable (Catenary)
    const mainCablePoints = useMemo(() => {
        const pts = []
        const segments = 50
        const startX = -span / 2
        const endX = span / 2

        for (let i = 0; i <= segments; i++) {
            const t = i / segments
            const x = startX + t * (endX - startX)
            // Parabola: Vertex at (0, deckY + pylonH - sag)
            // Passes through (span/2, deckY + pylonH)

            // y = a*x^2 + k
            // Pylon Top Y (relative to center vertical): pylonH (above deckY?) 
            // Let's set Pylon top at: deckY + pylonH
            // Cable low point: deckY + pylonH - sag

            const pylonTopY = deckY + pylonH
            const lowPointY = pylonTopY - sag

            // a* (w/2)^2 + lowPointY = pylonTopY
            // a * (w/2)^2 = sag => a = sag / (w/2)^2

            const wHalf = span / 2
            const a = sag / (wHalf * wHalf)

            const y = a * (x * x) + lowPointY
            pts.push(new THREE.Vector3(x, y, -1)) // Left cable (-1 Z)
        }
        return pts
    }, [])

    // Right cable points
    const mainCablePointsRight = useMemo(() => mainCablePoints.map(v => new THREE.Vector3(v.x, v.y, 1)), [mainCablePoints])


    // 4. Hangers
    // Vertical lines from Cable Y to Deck Y
    const hangerCount = 30
    const hangers = useMemo(() => {
        const lines = []
        const wHalf = span / 2
        const spacing = span / hangerCount

        for (let i = 1; i < hangerCount; i++) {
            const x = -wHalf + i * spacing
            // Calculate cable Y at this X (Same formula)
            const pylonTopY = deckY + pylonH
            const lowPointY = pylonTopY - sag
            const a = sag / (wHalf * wHalf)
            const cableY = a * (x * x) + lowPointY

            // Create separate Left and Right hanger data
            lines.push({ x, yTop: cableY, yBottom: deckY, z: -1 }) // Left
            lines.push({ x, yTop: cableY, yBottom: deckY, z: 1 })  // Right
        }
        return lines
    }, [])

    return (
        <group>
            {/* --- Scene 1: Main Structural Geometry --- */}
            {/* Pylons */}
            <Pylon x={pylonWestX} heightProgress={pylonProgress} />
            <Pylon x={pylonEastX} heightProgress={pylonProgress} />

            {/* Deck Axis (Thick, appears 2nd) */}
            {axisProgress > 0 && (
                <CustomLine
                    points={deckAxisPoints}
                    color="#60a5fa"
                    opacity={axisProgress}
                    linewidth={3}
                />
            )}

            {/* Deck Width/Outline (Optional for "Scene 3" Full System or Scene 1?)
                Prompt says "Scene 1: Show only... bridge deck axis."
                So we keep it simple 'axis' line.
                Scene 3 says "Tabliye". Maybe we expand axis to full deck wireframe then?
                Let's stick to the prompt: Axis.
            */}


            {/* --- Scene 2: Suspension Cable System --- */}

            {/* Main Cables */}
            {(mainCableProgress > 0) && (
                <>
                    <CustomLine
                        points={mainCablePoints}
                        color="#3b82f6"
                        opacity={mainCableProgress}
                        linewidth={2}
                    />
                    <CustomLine
                        points={mainCablePointsRight}
                        color="#3b82f6"
                        opacity={mainCableProgress}
                        linewidth={2}
                    />
                </>
            )}

            {/* Hangers (Drop one by one or fade in?) 
                Prompt: "Askı kabloları aşağı doğru oluşur" (Vertical drop)
                Or "Sırayla tek tek".
                Let's do "Scanning" effect from Left to Right or Center out.
                Let's do Center Out since we build main cable, then hangers drop.
            */}
            {hangerProgress > 0 && hangers.map((h, i) => {
                // Stagger based on X position? 
                // Or just simple scan left-to-right
                const scanPos = -span / 2 + hangerProgress * span // Current X being built
                const isVisible = h.x < scanPos && h.x > (-span / 2) // Build L->R

                // Or better: "Drop Down" animation.
                // Hanger draws from Top to Bottom
                // Let's keep it simple: Reveal L->R
                if (!isVisible) return null

                // "Thin" lines
                return (
                    <line key={i}>
                        <bufferGeometry>
                            <bufferAttribute
                                attach="attributes-position"
                                count={2}
                                array={new Float32Array([
                                    h.x, h.yTop, h.z,
                                    h.x, h.yBottom, h.z
                                ])}
                                itemSize={3}
                            />
                        </bufferGeometry>
                        <lineBasicMaterial color="#94a3b8" transparent opacity={0.6} linewidth={1} />
                    </line>
                )
            })}
        </group>
    )
}

function AnimationOrchestrator() {
    const [time, setTime] = useState(0)
    const [subtitle, setSubtitle] = useState("")

    useFrame((state, delta) => {
        const loopTime = state.clock.elapsedTime % 20
        setTime(loopTime)

        // Update Subtitle based on Scene
        if (loopTime < 6) {
            setSubtitle("MAIN STRUCTURAL GEOMETRY")
        } else if (loopTime < 14) {
            setSubtitle("SUSPENSION CABLE SYSTEM")
        } else {
            setSubtitle("SUSPENSION BRIDGE – SYSTEM OVERVIEW")
        }
    })

    return (
        <>
            {/* 3D Content */}
            <BosphorusBridgeSequence globalTime={time} />

            {/* 2D Overlay (Html) - Portal out? Or just handle in parent? 
                R3F <Html> component is best for keeping it synced. 
                But to avoid imports, I will dispatch event or just ignore for now 
                and put the subtitles in the main component.
            */}
        </>
    )
}

export default function BridgeHeroBackground() {
    const [subtitleText, setSubtitleText] = useState("STRUCTURAL SYSTEM")

    // Sync subtitle from loop (Approximation since we can't easily bubble up from R3F without context/redux)
    // We will run a separate timer/useEffect here for texts
    useEffect(() => {
        const interval = setInterval(() => {
            const t = (performance.now() / 1000) % 20
            if (t < 6) {
                setSubtitleText("MAIN STRUCTURAL GEOMETRY")
            } else if (t < 14) {
                setSubtitleText("SUSPENSION CABLE SYSTEM")
            } else {
                setSubtitleText("SUSPENSION BRIDGE – SYSTEM OVERVIEW")
            }
        }, 100)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Background Canvas */}
            <div className="absolute right-0 top-0 bottom-0 w-full opacity-70">
                <Canvas
                    // "Scene 1: Fixed side-view camera"
                    // Isometric but flat-ish
                    orthographic
                    camera={{ zoom: 45, position: [100, 20, 100], near: 0.1, far: 1000 }}
                    style={{ background: 'transparent' }}
                >
                    <ambientLight intensity={0.8} />
                    {/* Shift Right and Down: X+15 -> X+10 (Left), Z-15 -> Z-10. Y-5 centers vertically. */}
                    <group position={[10, -6, -10]}>
                        <AnimationOrchestrator />
                    </group>
                </Canvas>
            </div>

            {/* Legend / Subtitle Overlay - Bottom Right */}
            <div className="absolute bottom-10 right-10 text-right z-0">
                <div className="text-xs font-mono text-blue-400 tracking-widest mb-1">ALLPLAN BRIDGE</div>
                <div className="text-2xl font-bold text-slate-200 tracking-tight">{subtitleText}</div>
                <div className="h-1 w-24 bg-blue-500 ml-auto mt-2 rounded-full animate-pulse"></div>
            </div>
        </div>
    )
}
