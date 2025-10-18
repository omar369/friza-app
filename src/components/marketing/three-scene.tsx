"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";
import { useLenis } from "lenis/react";

function RotatingMesh() {
  const mesh = useRef<THREE.Mesh>(null);
  const [progress, setProgress] = useState(0);

  useThree(({ scene }) => {
    scene.fog = new THREE.Fog("#ffffff", 5, 15);
    return null;
  });

  // Obtener progreso normalizado 0..1 desde Lenis
  useLenis(({ scroll, limit }) => {
    const p = limit > 0 ? Math.min(1, Math.max(0, scroll / limit)) : 0;
    setProgress(p);
  });

  // State machine de pasos (0–25–60–100%)
  useFrame((_state, dt) => {
    if (!mesh.current) return;
    const m = mesh.current;

    // defaults
    const target = new THREE.Vector3(0, 0, 0);

    // fases del scroll
    if (progress < 0.2) {
      const t = progress / 0.2; 
      target.set(0, THREE.MathUtils.lerp(1, 1, t), -10);
    } else if (progress < 0.6) {
      const t = (progress - 0.2) / (0.6 - 0.2);
      target.set(THREE.MathUtils.lerp(1, 1.5, t), 2, 0);
    } else {
      const t = (progress - 0.6) / (1 - 0.6);
      target.set(
        THREE.MathUtils.lerp(1, -30, t),
        THREE.MathUtils.lerp(1, -10.5, t),
        THREE.MathUtils.lerp(1, -90, t),
      );
    }

    // Interpolar suave hacia el target (ease-out)
    m.position.lerp(target, Math.min(1, dt * 4));
    // rotación ligera siempre
    m.rotation.y += dt * 0.4;
  });

  return (
    <mesh ref={mesh}>
      <icosahedronGeometry args={[1.2, 4]} />
      <meshBasicMaterial color="#5a4a8f"/>
    </mesh>
  );
}

export function ThreeScene() {
  return (
    <div className="fixed w-full h-full -z-50">
      <Canvas className="w-full h-full" camera={{ position: [0, 0, 6] }}>
        <fog attach="fog" args={["#ffffff", 0.1, 100]} />
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <RotatingMesh />
      </Canvas>
    </div>
  );
}
