"use client"
import { Canvas, useFrame } from "@react-three/fiber"
import { useRef, useMemo, useState, useEffect } from "react"
import * as THREE from "three"

// Layout Config
const COLS_X = 3
const COLS_Z = 3
const SPACING = 10
const COL_HEIGHT = 8

function RebarCage() {
    // A simple representation of a rebar cage (vertical bars + stirrups)
    const geometry = useMemo(() => {
        const points = []
        // 4 Vertical Bars
        const r = 0.25
        const h = COL_HEIGHT
        points.push(new THREE.Vector3(-r, 0, -r), new THREE.Vector3(-r, h, -r))
        points.push(new THREE.Vector3(r, 0, -r), new THREE.Vector3(r, h, -r))
        points.push(new THREE.Vector3(r, 0, r), new THREE.Vector3(r, h, r))
        points.push(new THREE.Vector3(-r, 0, r), new THREE.Vector3(-r, h, r))

        // Stirrups (Etnyeler) every 1 unit
        for (let i = 1; i < h; i += 0.5) {
            points.push(new THREE.Vector3(-r, i, -r), new THREE.Vector3(r, i, -r))
            points.push(new THREE.Vector3(r, i, -r), new THREE.Vector3(r, i, r))
            points.push(new THREE.Vector3(r, i, r), new THREE.Vector3(-r, i, r))
            points.push(new THREE.Vector3(-r, i, r), new THREE.Vector3(-r, i, -r))
        }

        const geo = new THREE.BufferGeometry().setFromPoints(points)
        return geo
    }, [])

    return (
        <lineSegments geometry={geometry}>
            <lineBasicMaterial color="#ef4444" transparent opacity={0.6} />
        </lineSegments>
    )
}

function ColumnWithCorbel() {
    // Column geometry with Corbel (Konsol)
    const geometry = useMemo(() => {
        // Base Column
        const base = new THREE.BoxGeometry(0.8, COL_HEIGHT, 0.8)
        base.translate(0, COL_HEIGHT / 2, 0)

        // Corbel at top (Z direction for beams)
        const corbel = new THREE.BoxGeometry(0.8, 0.6, 1.4)
        corbel.translate(0, COL_HEIGHT - 1, 0) // Slightly below top

        // Merge? R3F meshes are easier separate or merged.
        // Let's just return a group logic in the component
        return { base, corbel }
    }, [])

    return (
        <group>
            <mesh geometry={geometry.base}>
                <meshStandardMaterial color="#94a3b8" />
            </mesh>
            <mesh geometry={geometry.corbel}>
                <meshStandardMaterial color="#94a3b8" />
            </mesh>
        </group>
    )
}

function ComplexAssembly({ globalTime }: { globalTime: number }) {
    // 15s Loop
    // 0-4s: Rebar Design (Red wireframes rise)
    // 4-8s: Fabrication (Concrete fills in - Scale Y or Opacity)
    // 8-11s: Assembly (Beams drop)
    // 11-15s: Completion (Slabs slide)

    const rebarP = Math.min(Math.max(globalTime / 4, 0), 1)
    const concreteP = Math.min(Math.max((globalTime - 4) / 4, 0), 1)
    const beamP = Math.min(Math.max((globalTime - 8) / 3, 0), 1)
    const slabP = Math.min(Math.max((globalTime - 11) / 4, 0), 1)

    // Grid of Columns
    const columns = []
    for (let x = 0; x < COLS_X; x++) {
        for (let z = 0; z < COLS_Z; z++) {
            const key = `col-${x}-${z}`
            const posX = (x - 1) * SPACING
            const posZ = (z - 1) * SPACING

            // Stagger effect
            const stagger = (x + z) * 0.1

            // Rebar Animation: Rise from ground
            const localRebarP = Math.min(Math.max((rebarP - stagger) * 2, 0), 1)
            const rebarScale = localRebarP

            // Concrete Animation: Opacity or Width grow? Let's do Opacity reveal overlay
            const showConcrete = concreteP > stagger

            columns.push(
                <group key={key} position={[posX, 0, posZ]}>
                    {/* 1. Rebar Cage */}
                    <group scale={[1, rebarScale, 1]} visible={localRebarP > 0}>
                        <RebarCage />
                    </group>

                    {/* 2. Concrete Shell */}
                    {showConcrete && (
                        <group >
                            {/* Animate appearance details if needed? Scale Y is simple */}
                            <ColumnWithCorbel />
                        </group>
                    )}
                </group>
            )
        }
    }

    // Grid of Beams (Spanning Z axis)
    const beams = []
    if (beamP > 0) {
        for (let x = 0; x < COLS_X; x++) {
            const posX = (x - 1) * SPACING
            // Beams span full length Z? Or between columns?
            // Let's do one long beam for visual simplicity on the corbels
            const len = (COLS_Z - 1) * SPACING + 2

            // Drop animation
            const targetY = COL_HEIGHT - 0.7 // Sit on corbel
            const startY = COL_HEIGHT + 15
            const curY = startY - (startY - targetY) * beamP

            beams.push(
                <mesh key={`beam-${x}`} position={[posX, curY, 0]} castShadow receiveShadow>
                    <boxGeometry args={[0.6, 1, len]} />
                    <meshStandardMaterial color="#64748b" />
                </mesh>
            )
        }
    }

    // Slabs (Hollow Core)
    const slabs = []
    if (slabP > 0) {
        // Spanning X between beams
        // Slide in from X-
        const targetX = 0
        const startX = -40
        const curX = startX + (targetX - startX) * slabP

        slabs.push(
            <group key="slabs" position={[curX, COL_HEIGHT - 0.2, 0]}>
                {/* A series of slab panels */}
                <mesh>
                    <boxGeometry args={[(COLS_X - 1) * SPACING + 2, 0.3, (COLS_Z - 1) * SPACING + 2]} />
                    <meshStandardMaterial color="#cbd5e1" roughness={0.5} />
                </mesh>
                {/* Detail lines to look like panels */}
                <lineSegments position={[0, 0.16, 0]}>
                    <wireframeGeometry args={[new THREE.BoxGeometry((COLS_X - 1) * SPACING + 2, 0.3, (COLS_Z - 1) * SPACING + 2)]} />
                    <lineBasicMaterial color="#94a3b8" />
                </lineSegments>
            </group>
        )
    }

    return (
        <group>
            {/* Foundation Grid */}
            <gridHelper args={[50, 50, 0x334155, 0x1e293b]} position={[0, -0.1, 0]} />

            {columns}
            {beams}
            {slabs}
        </group>
    )
}

function Orchestrator() {
    const [time, setTime] = useState(0)

    useFrame((state) => {
        const loopT = state.clock.elapsedTime % 16
        setTime(loopT)

        if (loopT < 4) window.dispatchEvent(new CustomEvent('precast-subtitle', { detail: "REINFORCEMENT DESIGN" }))
        else if (loopT < 8) window.dispatchEvent(new CustomEvent('precast-subtitle', { detail: "FABRICATION & CASTING" }))
        else if (loopT < 11) window.dispatchEvent(new CustomEvent('precast-subtitle', { detail: "LOGISTICS & ASSEMBLY" }))
        else window.dispatchEvent(new CustomEvent('precast-subtitle', { detail: "COMPLETED STRUCTURE" }))
    })

    return <ComplexAssembly globalTime={time} />
}

export default function PrecastHeroBackground() {
    const [text, setText] = useState("PRECAST ENGINEERING")

    useEffect(() => {
        const handler = (e: any) => setText(e.detail)
        window.addEventListener('precast-subtitle', handler)
        return () => window.removeEventListener('precast-subtitle', handler)
    }, [])

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute right-0 top-0 bottom-0 w-full opacity-90">
                <Canvas
                    camera={{ position: [30, 30, 40], fov: 35 }}
                    style={{ background: 'transparent' }}
                    shadows
                >
                    <ambientLight intensity={0.5} />
                    <directionalLight
                        position={[-20, 40, 20]}
                        intensity={1.5}
                        castShadow
                        shadow-mapSize={[1024, 1024]}
                    />

                    {/* Shift for readability */}
                    <group position={[10, -8, -5]} rotation={[0, -0.4, 0]}>
                        <Orchestrator />
                    </group>
                </Canvas>
            </div>

            {/* Subtitles */}
            <div className="absolute bottom-10 right-10 text-right z-0">
                <div className="text-xs font-mono text-orange-400 tracking-widest mb-1">ALLPLAN PRECAST</div>
                <div className="text-2xl font-bold text-slate-200 tracking-tight transition-all duration-300">{text}</div>
                <div className="h-1 w-32 bg-orange-500 ml-auto mt-2 rounded-full animate-pulse"></div>
            </div>
        </div>
    )
}
