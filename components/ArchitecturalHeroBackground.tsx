"use client"
import { Canvas, useFrame } from "@react-three/fiber"
import { useRef, useMemo, useState, useEffect } from "react"
import * as THREE from "three"

// OMNITURM (Frankfurt) inspired wireframe building
// Feature: "Hip-swing" - Middle floors are shifted sideways
function OmniturmBuilding() {
    const groupRef = useRef<THREE.Group>(null)
    const [buildProgress, setBuildProgress] = useState(0)

    // Continuous rotation
    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y = state.clock.elapsedTime * 0.08
        }
    })

    // Progressive construction animation
    useEffect(() => {
        const interval = setInterval(() => {
            setBuildProgress((prev) => {
                if (prev >= 1.2) {
                    return 0
                }
                return prev + 0.004
            })
        }, 40)

        return () => clearInterval(interval)
    }, [])

    // Parametric Skyscraper Structure
    // Spec: 9 Modules * 5 Floors = 45 Floors
    const floors = useMemo(() => {
        const floorArray = []

        // Parameters (Scaled down by 0.1 for Three.js scene)
        const scale = 0.1
        const moduleCount = 9
        const floorsPerModule = 5
        const floorHeight = 4.2 * scale
        const baseWidth = 40 * scale
        const baseDepth = 35 * scale

        // Transformation Parameters per Module
        const moduleRotation = 3 * (Math.PI / 180) // 3 degrees in radians
        const moduleTransX = 2.5 * scale
        const moduleTransZ = -1.5 * scale // Y in CAD maps to Z in Three.js typically for horizontal plane

        // Total floor count for loop
        const totalFloors = moduleCount * floorsPerModule // 45

        for (let m = 0; m < moduleCount; m++) {
            // Calculate module-level transformations (accumulative)
            const currentRotation = m * moduleRotation
            const currentOffsetX = m * moduleTransX
            const currentOffsetZ = m * moduleTransZ

            for (let f = 0; f < floorsPerModule; f++) {
                const globalFloorIndex = (m * floorsPerModule) + f
                const progress = globalFloorIndex / totalFloors

                const isVisible = buildProgress > progress
                const baseOpacity = 0.4
                let floorOpacity = 0

                if (isVisible) {
                    if (buildProgress < progress + 0.15) {
                        floorOpacity = (buildProgress - progress) * 6 * baseOpacity
                    } else {
                        floorOpacity = baseOpacity
                    }
                }

                if (isVisible && floorOpacity > 0) {
                    // Floor position: Module offset + height within module
                    // Note: The prompt says "Each module relative to the one below". 
                    // This implies the transformation applies to the *Module*, so all 5 floors in a module share the same shift/rotation relative to base?
                    // Or do they stack? "Stack 9 modules vertically... Each module relative to the one below: Rotate... Translate..."
                    // Interpretation: Module 0 is base. Module 1 is transformed. Module 2 is transformed twice.
                    // Floors *within* a module likely stack vertically without extra shift.

                    const yPos = (globalFloorIndex * floorHeight) - 8 // Centered vertically

                    floorArray.push(
                        <group
                            key={globalFloorIndex}
                            position={[currentOffsetX, yPos, currentOffsetZ]}
                            rotation={[0, currentRotation, 0]}
                        >
                            {/* Floor Slab */}
                            <lineSegments>
                                <edgesGeometry args={[new THREE.BoxGeometry(baseWidth, 0.05, baseDepth)]} />
                                <lineBasicMaterial
                                    color="#3b82f6"
                                    transparent
                                    opacity={floorOpacity}
                                    linewidth={1}
                                />
                            </lineSegments>

                            {/* Corner Details */}
                            <points>
                                <bufferGeometry>
                                    <bufferAttribute
                                        attach="attributes-position"
                                        count={4}
                                        array={new Float32Array([
                                            -baseWidth / 2, 0, -baseDepth / 2,
                                            baseWidth / 2, 0, -baseDepth / 2,
                                            baseWidth / 2, 0, baseDepth / 2,
                                            -baseWidth / 2, 0, baseDepth / 2,
                                        ])}
                                        itemSize={3}

                                        if (index >= start && index < start + duration) {
        const shiftIndex = index - start
                                    if (shiftIndex < rightShiftCount) {
            const phaseProgress = (shiftIndex + 1) / rightShiftCount
                                    const factor = Math.sin(phaseProgress * (Math.PI / 2))
                                    x = factor * 0.6
                                    z = factor * 0.3
        } else {
            const phaseProgress = (shiftIndex - rightShiftCount + 1) / (duration - rightShiftCount)
                                    const factor = Math.cos(phaseProgress * (Math.PI / 2))
                                    x = factor * 0.6
                                    z = factor * 0.3
        }
    }
                                    return {x, z}
}

                                    export default function ArchitecturalHeroBackground() {
    return (
                                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                                        <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-50">
                                            <Canvas
                                                camera={{ position: [8, 4, 12], fov: 45 }}
                                                style={{ background: 'transparent' }}
                                            >
                                                <ambientLight intensity={0.5} />
                                                <pointLight position={[10, 10, 10]} intensity={1} />
                                                <OmniturmBuilding />
                                            </Canvas>
                                        </div>
                                    </div>
                                    )
}
