"use client"
import { Canvas, useFrame } from "@react-three/fiber"
import { useRef, useMemo, useState, useEffect } from "react"
import * as THREE from "three"

// --- Primitives ---

function WireframeProfile({ length, depth, width, color = "white", thickness = 1 }: any) {
    // Uses LineSegments for clean wireframe look
    const geometry = useMemo(() => {
        const shape = new THREE.Shape()
        const w = width / 2
        const h = depth / 2
        const tf = 0.02
        const tw = 0.01

        // Simple Box profile for wireframe simplicity or I-shape? 
        // User asked for "Main profile thick wireframe". 
        // Let's do a box for the silhouette context, and I-shape for detail?
        // Let's stick to I-shape points.

        const pts = [
            [-w, -h, 0], [w, -h, 0], [w, -h + tf, 0], [tw, -h + tf, 0],
            [tw, h - tf, 0], [w, h - tf, 0], [w, h, 0], [-w, h, 0],
            [-w, h - tf, 0], [-tw, h - tf, 0], [-tw, -h + tf, 0], [-w, -h + tf, 0],
            [-w, -h, 0]
        ]

        // Extrude? No, just edges.
        // Let's make a BoxGeometry sized to bounds for Context
        return new THREE.BoxGeometry(width, depth, length)
    }, [length, depth, width])

    return (
        <mesh>
            <boxGeometry args={[width, depth, length]} />
            <meshBasicMaterial color="black" visible={false} />{/* Occluder? */}
            <edgesGeometry args={[new THREE.BoxGeometry(width, depth, length)]} />
            {/* We need the Edges to be rendered. R3F <edgesGeometry> isn't a component in that way. */}
            <lineSegments>
                <edgesGeometry args={[new THREE.BoxGeometry(width, depth, length)]} />
                <lineBasicMaterial color={color} linewidth={thickness} />
            </lineSegments>
        </mesh>
    )
}

function SolidMember({ length, depth, width, color, opacity = 1 }: any) {
    return (
        <mesh>
            <boxGeometry args={[width, depth, length]} />
            <meshStandardMaterial color={color} transparent opacity={opacity} roughness={0.5} />
            {/* Add edges for definitions */}
            <lineSegments>
                <edgesGeometry args={[new THREE.BoxGeometry(width, depth, length)]} />
                <lineBasicMaterial color="white" transparent opacity={0.3} />
            </lineSegments>
        </mesh>
    )
}

function LoadArrow({ visible }: { visible: boolean }) {
    // Animated arrow flowing Beam -> Column
    const [offset, setOffset] = useState(0)
    useFrame((_, delta) => {
        if (visible) setOffset(prev => (prev + delta) % 1)
    })

    if (!visible) return null

    // Path: From Beam Center (X+) -> Connection (0) -> Column Down (Y-)
    // Just show a few arrows moving

    // Beam Arrow
    const beamX = 2 - offset * 2 // Moves 2 -> 0
    // Col Arrow
    const colY = 0 - offset * 2 // Moves 0 -> -2

    return (
        <group>
            {/* Beam Flow */}
            <group position={[beamX, 0.4, 0]}>
                <mesh rotation={[0, 0, Math.PI / 2]}>
                    <coneGeometry args={[0.1, 0.3, 8]} />
                    <meshBasicMaterial color="#3b82f6" />
                </mesh>
            </group>

            {/* Load Transfer Point */}
            <mesh position={[0, 0, 0]} scale={visible ? [1, 1, 1] : [0, 0, 0]}>
                <sphereGeometry args={[0.15]} />
                <meshBasicMaterial color="#ef4444" transparent opacity={0.5} />
            </mesh>

            {/* Column Flow */}
            <group position={[0, colY, 0]}>
                <mesh rotation={[Math.PI, 0, 0]}>
                    <coneGeometry args={[0.1, 0.3, 8]} />
                    <meshBasicMaterial color="#3b82f6" />
                </mesh>
            </group>
        </group>
    )
}

function HighlightBox() {
    return (
        <lineSegments>
            <edgesGeometry args={[new THREE.BoxGeometry(1.5, 1.5, 1.5)]} />
            <lineBasicMaterial color="#f59e0b" linewidth={2} />
        </lineSegments>
    )
}

// --- The Sequence ---

function SteelStory({ globalTime }: { globalTime: number }) {
    // Total Loop: 24s
    // Scene 1: Context (0-5s)
    // Scene 2: Isolate (5-13s) (Wait.. Brief says 8s duration) -> 5+8=13
    // Scene 3: Assembly (13-19s) (6s duration)
    // Scene 4: Load Path (19-24s) (5s duration)

    const time = globalTime % 24

    // --- State Logic ---
    const isContext = time < 5
    const isIsolate = time >= 5 && time < 13
    const isAssembly = time >= 13 && time < 19
    const isLoadPath = time >= 19

    // Context Highlighting
    const highlightPulse = Math.sin(time * 5) * 0.5 + 0.5

    // Assembly Sequence sub-timers
    // 13-19s window
    // Col: 13.0
    // Plate: 14.5
    // Beam: 16.0
    // Bolts: 17.5
    const aTime = time - 13
    const showCol = (isIsolate) || (isAssembly && aTime > 0) || isLoadPath
    const showPlate = (isIsolate) || (isAssembly && aTime > 1.5) || isLoadPath
    const showBeam = (isIsolate) || (isAssembly && aTime > 3.0) || isLoadPath
    const showBolts = (isIsolate) || (isAssembly && aTime > 4.5) || isLoadPath

    // If Isolate, show all "Ghosted" or "Solid"?
    // Brief: "Isolate: Show Only Col, Beam, Plate... Wireframe or minimal solid"
    // But Assembly comes AFTER Isolate? 
    // Wait, Brief says: "Isolate... then Animate Assembly".
    // So during Isolate, do we show them fully assembled? Yes.
    // Then Scene 3 Assembly RE-BUILDS it? Or Scene 2 fades out and Scene 3 builds?
    // "Isolate by hiding rest of structure".
    // Sequence implies:
    // 1. Full Structure visible.
    // 2. Rest disappears. Only Connection remains (Assembled).
    // 3. Connection parts disappear and re-appear in sequence? 
    // OR Scene 3 starts from scratch?
    // Let's assume Scene 3 builds it from empty space for clarity.
    // So Scene 2 transitions to "Empty" then Scene 3 builds.

    // Let's adjust:
    // Scene 1: Context Wireframe (All)
    // Scene 2: Detail Only (All Assembled)
    // Scene 3: Disassemble/Reassemble? Or just Reassemble.
    // Let's make visible=false for all at 13.0 then act sequence.

    // Refined Visibilities:
    const ctxVisible = isContext

    // Detail Parts Visibility
    // In Context: Optional (maybe just highlight box?)
    // In Isolate: Visible (All)
    // In Assembly: Sequential
    // In Load: Visible (All)

    let colVis = false
    let beamVis = false
    let plateVis = false
    let boltVis = false

    if (isContext) {
        // Just silhouette + box
        colVis = false // Only wireframe context used
    } else if (isIsolate) {
        colVis = true; beamVis = true; plateVis = true; boltVis = true
    } else if (isAssembly) {
        colVis = aTime > 0
        plateVis = aTime > 1.5
        beamVis = aTime > 3.0
        boltVis = aTime > 4.5
    } else if (isLoadPath) {
        colVis = true; beamVis = true; plateVis = true; boltVis = true
    }

    return (
        <group>
            {/* SCENE 1: CONTEXT */}
            {ctxVisible && (
                <group>
                    {/* Simplified Silhouette Frame */}
                    {/* Col 1 */}
                    <group position={[0, 0, 0]}> <WireframeProfile length={8} width={0.4} depth={0.4} color="#334155" /> </group>
                    {/* Beam 1 */}
                    <group position={[2.2, 2, 0]} rotation={[0, 0, Math.PI / 2]}> <WireframeProfile length={4} width={0.3} depth={0.3} color="#334155" /> </group>
                    {/* Col 2 */}
                    <group position={[5, 0, 0]}> <WireframeProfile length={8} width={0.4} depth={0.4} color="#334155" /> </group>

                    {/* Highlight Box at connection */}
                    <group position={[0, 2, 0]}>
                        <HighlightBox />
                    </group>
                </group>
            )}

            {/* SCENE 2, 3, 4: DETAIL */}
            {/* Center the detail at 0,0,0 for these scenes */}
            {/* Connection Point is the Origin */}

            <group visible={!isContext} rotation={[0, -0.2, 0]}> {/* Slight aesthetic angle */}

                {/* 1. COLUMN */}
                {colVis && (
                    <group position={[0, -2, 0]}>
                        <SolidMember length={6} width={0.5} depth={0.5} color="#475569" />
                    </group>
                )}

                {/* 2. PLATE (Fin Plate? End Plate?) Brief: "Connection Plate" */}
                {/* Let's do a Fin Plate welded to Col, Beam bolts to it. Common shear connection. */}
                {plateVis && (
                    <group position={[0.3, 0, 0]}>
                        <mesh>
                            <boxGeometry args={[0.02, 0.4, 0.3]} />
                            <meshStandardMaterial color="#94a3b8" />
                        </mesh>
                    </group>
                )}

                {/* 3. BEAM */}
                {beamVis && (
                    <group position={[1.8, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
                        <SolidMember length={3} width={0.3} depth={0.3} color="#64748b" />
                    </group>
                )}

                {/* 4. BOLTS */}
                {boltVis && (
                    <group position={[0.3, 0, 0]}>
                        {/* 3 Bolts vertical */}
                        {[0.1, 0, -0.1].map((y, i) => (
                            <mesh key={i} position={[0, y, 0]} rotation={[0, 0, Math.PI / 2]}>
                                <cylinderGeometry args={[0.03, 0.03, 0.1, 6]} />
                                <meshStandardMaterial color="#f59e0b" />
                            </mesh>
                        ))}
                    </group>
                )}

                {/* LOAD PATH ARROWS */}
                {isLoadPath && (
                    <LoadArrow visible={true} />
                )}

            </group>
        </group>
    )
}

function Orchestrator() {
    const [time, setTime] = useState(0)

    useFrame((state) => {
        const t = state.clock.elapsedTime
        setTime(t)

        const loopT = t % 24

        if (loopT < 5) window.dispatchEvent(new CustomEvent('steel-subtitle', { detail: "CONTEXT: WIREFRAME SILHOUETTE" }))
        else if (loopT < 13) window.dispatchEvent(new CustomEvent('steel-subtitle', { detail: "CONNECTION ZONE ISOLATED" }))
        else if (loopT < 19) window.dispatchEvent(new CustomEvent('steel-subtitle', { detail: "ASSEMBLY SEQUENCE" }))
        else window.dispatchEvent(new CustomEvent('steel-subtitle', { detail: "LOAD TRANSFER PATH" }))
    })

    return <SteelStory globalTime={time} />
}

export default function SteelHeroBackground() {
    const [text, setText] = useState("STEEL DETAILING")

    useEffect(() => {
        const handler = (e: any) => setText(e.detail)
        window.addEventListener('steel-subtitle', handler)
        return () => window.removeEventListener('steel-subtitle', handler)
    }, [])

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute right-0 top-0 bottom-0 w-full opacity-90">
                {/* Static Camera as requested */}
                <Canvas
                    orthographic
                    camera={{ zoom: 50, position: [10, 5, 10] }}
                    style={{ background: 'transparent' }}
                    shadows
                >
                    <ambientLight intensity={0.8} />
                    <directionalLight position={[5, 10, 5]} intensity={1.5} />

                    {/* Centered on Right 1/3 */}
                    <group position={[5, -1, 0]}>
                        <Orchestrator />
                    </group>
                </Canvas>
            </div>
            <div className="absolute bottom-10 right-10 text-right z-0">
                <div className="text-xs font-mono text-orange-300 tracking-widest mb-1">ALLPLAN SDS2</div>
                <div className="text-2xl font-bold text-slate-200 tracking-tight transition-all duration-300">{text}</div>
                <div className="h-1 w-32 bg-orange-500 ml-auto mt-2 rounded-full animate-pulse"></div>
            </div>
        </div>
    )
}
