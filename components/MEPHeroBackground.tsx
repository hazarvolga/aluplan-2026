"use client"
import { Canvas, useFrame } from "@react-three/fiber"
import { useRef, useMemo, useState, useEffect } from "react"
import * as THREE from "three"

// MEP Systems Flow Animation
function MEPSystems() {
    const groupRef = useRef<THREE.Group>(null)

    // Continuous gentle rotation
    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y = -0.2 + (state.clock.elapsedTime * 0.05)
        }
    })

    return (
        <group ref={groupRef}>
            {/* System Groups */}
            <HVACSystem />
            <PipingSystem />
            <ElectricalSystem />

            <gridHelper args={[15, 15, "#1f2937", "#111827"]} position={[0, -5, 0]} material-opacity={0.1} material-transparent />
        </group>
    )
}

// 1. HVAC Ducts (Translucent Rectangular) with Air Flow
function HVACSystem() {
    // Large Ducts
    const ducts = useMemo(() => [
        { path: [[-4, 3, -2], [4, 3, -2]], size: [1.2, 0.8], color: "#94a3b8" }, // Main Supply
        { path: [[-4, -1, 1], [4, -1, 1]], size: [1.2, 0.8], color: "#64748b" }, // Main Return
        // Branch
        { path: [[0, 3, -2], [0, 5, -2]], size: [0.8, 0.6], color: "#94a3b8" },
    ], [])

    return (
        <group>
            {ducts.map((d, i) => (
                <group key={`duct-${i}`}>
                    {/* Duct Mesh */}
                    <DuctMesh start={d.path[0]} end={d.path[1]} size={d.size} color={d.color} />
                    {/* Flow Particles */}
                    <FlowParticles start={d.path[0]} end={d.path[1]} count={20} color={i === 1 ? "#ef4444" : "#3b82f6"} size={0.06} speed={0.05} />
                </group>
            ))}
        </group>
    )
}

function DuctMesh({ start, end, size, color }: any) {
    const length = Math.abs(end[0] - start[0]) + Math.abs(end[1] - start[1]) // Simplified length calc for straight lines
    const midX = (start[0] + end[0]) / 2
    const midY = (start[1] + end[1]) / 2
    const midZ = (start[2] + end[2]) / 2

    // Determine orientation (assuming axis aligned for simplicity)
    const isVertical = Math.abs(start[1] - end[1]) > 0.1

    return (
        <group position={[midX, midY, midZ]}>
            <mesh rotation={isVertical ? [0, 0, Math.PI / 2] : [0, 0, 0]}>
                <boxGeometry args={[length, size[1], size[0]]} />
                <meshStandardMaterial color={color} transparent opacity={0.15} roughness={0.1} metalness={0.1} side={THREE.DoubleSide} depthWrite={false} />
            </mesh>
            <lineSegments rotation={isVertical ? [0, 0, Math.PI / 2] : [0, 0, 0]}>
                <edgesGeometry args={[new THREE.BoxGeometry(length, size[1], size[0])]} />
                <lineBasicMaterial color={color} transparent opacity={0.2} />
            </lineSegments>
        </group>
    )
}


// 2. Piping (Cylindrical) with Liquid
function PipingSystem() {
    return (
        <group>
            {/* Cold Water Path */}
            <PipePath points={[[-3, 2, 2], [3, 2, 2], [3, -2, 2]]} color="#0ea5e9" radius={0.15} />
            {/* Hot Water Path */}
            <PipePath points={[[-3, 1.5, 2], [3.5, 1.5, 2], [3.5, -2, 2]]} color="#ef4444" radius={0.15} />
        </group>
    )
}

function PipePath({ points, color, radius }: any) {
    // Draw simple tubes for pipes
    const curve = useMemo(() => {
        const vecs = points.map((p: any) => new THREE.Vector3(...p))
        return new THREE.CatmullRomCurve3(vecs, false, 'catmullrom', 0.1)
    }, [points])

    return (
        <group>
            <mesh>
                <tubeGeometry args={[curve, 64, radius, 8, false]} />
                <meshStandardMaterial color={color} roughness={0.4} metalness={0.8} />
            </mesh>
            {/* Flow pulses inside/around pipe */}
            <FlowParticlesPath curve={curve} count={15} color="#ffffff" size={0.08} speed={0.03} />
        </group>
    )
}

// 3. Electrical (Cable Trays / Pulses)
function ElectricalSystem() {
    // Just linear flows representing cable trays
    return (
        <group position={[0, -0.5, -1]}>
            <FlowParticles start={[-4, 0, 0]} end={[4, 0, 0]} count={10} color="#eab308" size={0.05} speed={0.08} />
            <FlowParticles start={[-4, -0.2, 0]} end={[4, -0.2, 0]} count={10} color="#eab308" size={0.05} speed={0.08} delay={0.5} />
        </group>
    )
}


// --- Animation Helpers ---

function FlowParticles({ start, end, count, color, size, speed, delay = 0 }: any) {
    const particles = useMemo(() => {
        const temp = []
        for (let i = 0; i < count; i++) {
            temp.push({
                offset: Math.random(),
                speed: speed * (0.8 + Math.random() * 0.4)
            })
        }
        return temp
    }, [count, speed])

    const meshRef = useRef<THREE.InstancedMesh>(null)
    const dummy = new THREE.Object3D()

    useFrame((state) => {
        if (!meshRef.current) return

        const time = state.clock.elapsedTime

        particles.forEach((p, i) => {
            let progress = (p.offset + (time * p.speed)) % 1

            // Linear Interpolation
            const x = start[0] + (end[0] - start[0]) * progress
            const y = start[1] + (end[1] - start[1]) * progress
            const z = start[2] + (end[2] - start[2]) * progress

            dummy.position.set(x, y, z)

            // Pulsing scale
            const s = size * (0.8 + Math.sin(time * 10 + i) * 0.2)
            dummy.scale.set(s, s, s)

            dummy.updateMatrix()
            meshRef.current!.setMatrixAt(i, dummy.matrix)
        })
        meshRef.current.instanceMatrix.needsUpdate = true
    })

    return (
        <instancedMesh ref={meshRef} args={[null as any, null as any, count]}>
            <sphereGeometry args={[1, 8, 8]} />
            <meshBasicMaterial color={color} transparent opacity={0.8} />
        </instancedMesh>
    )
}

function FlowParticlesPath({ curve, count, color, size, speed }: any) {
    const particles = useMemo(() => {
        const temp = []
        for (let i = 0; i < count; i++) {
            temp.push({
                offset: Math.random(),
                speed: speed * (0.8 + Math.random() * 0.4)
            })
        }
        return temp
    }, [count, speed])

    const meshRef = useRef<THREE.InstancedMesh>(null)
    const dummy = new THREE.Object3D()

    useFrame((state) => {
        if (!meshRef.current) return
        const time = state.clock.elapsedTime

        particles.forEach((p, i) => {
            let progress = (p.offset + (time * p.speed)) % 1

            const pos = curve.getPoint(progress)
            dummy.position.copy(pos)

            const s = size
            dummy.scale.set(s, s, s)
            dummy.updateMatrix()
            meshRef.current!.setMatrixAt(i, dummy.matrix)
        })
        meshRef.current.instanceMatrix.needsUpdate = true
    })

    return (
        <instancedMesh ref={meshRef} args={[null as any, null as any, count]}>
            <sphereGeometry args={[1, 8, 8]} />
            <meshBasicMaterial color={color} transparent opacity={0.6} />
        </instancedMesh>
    )
}


// Main Component
export default function MEPHeroBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Position: Right oriented */}
            <div className="absolute right-0 top-0 bottom-0 w-full opacity-90">
                <Canvas
                    camera={{ position: [6, 4, 8], fov: 40 }}
                    style={{ background: 'transparent' }}
                >
                    <ambientLight intensity={0.4} />
                    <pointLight position={[10, 10, 5]} intensity={1} color="#ffffff" />

                    <group position={[3, 0, -2]}>
                        <MEPSystems />
                    </group>
                </Canvas>
            </div>
        </div>
    )
}
