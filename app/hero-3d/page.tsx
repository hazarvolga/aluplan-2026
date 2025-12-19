'use client'
import { Canvas, useFrame } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";
import { useMemo, useRef } from "react";

export default function Page() {
  return (
    <main className="min-h-screen">
      <div className="h-[70vh]">
        <Canvas>
          <PerspectiveCamera makeDefault position={[2.5, 1.8, 2.4]} fov={50} />
          <ambientLight intensity={0.4} />
          <directionalLight position={[2, 4, 2]} intensity={1.2} />
          <SimpleFrame />
        </Canvas>
      </div>
    </main>
  )
}

function SimpleFrame() {
  const instRef = useRef<THREE.InstancedMesh>(null);
  const box = useMemo(() => new THREE.BoxGeometry(1, 1, 1), []);
  const material = useMemo(() => new THREE.MeshStandardMaterial({ color: new THREE.Color(0.35, 0.52, 0.72), metalness: 0.9, roughness: 0.35 }), []);
  useFrame(() => {
    const mesh = instRef.current;
    if (!mesh) return;
    const dummy = new THREE.Object3D();
    const positions: Array<[number, number, number]> = [
      [-1.1, 0.2, 0.5], [1.1, 0.2, 0.5], [-1.1, 0.2, -0.5], [1.1, 0.2, -0.5],
      [0, 0.1, 0.5], [0, 0.9, 0.5], [0, 0.1, -0.5], [0, 0.9, -0.5],
    ];
    const sizes: Array<[number, number, number]> = [
      [0.08, 1.2, 0.08], [0.08, 1.2, 0.08], [0.08, 1.2, 0.08], [0.08, 1.2, 0.08],
      [2.2, 0.06, 0.06], [2.2, 0.06, 0.06], [2.2, 0.06, 0.06], [2.2, 0.06, 0.06],
    ];
    positions.forEach((p, i) => {
      dummy.position.set(p[0], p[1], p[2]);
      dummy.scale.set(sizes[i][0], sizes[i][1], sizes[i][2]);
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
    });
    mesh.instanceMatrix.needsUpdate = true;
  });
  return <instancedMesh ref={instRef} args={[box, material, 8]} />;
}
