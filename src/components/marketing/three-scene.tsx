"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";
import { useLenis } from "lenis/react";
import { Bengala } from "@/components/models/Bengala";
import { Environment } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

// === OBJETO BENGALA (ya existente) ===
function RotatingMesh() {
  const mesh = useRef<THREE.Mesh>(null);
  const [progress, setProgress] = useState(0);

  useThree(({ scene }) => {
    scene.fog = new THREE.Fog("#004b82", 5, 15);
    return null;
  });

  // Obtener progreso de scroll
  useLenis(({ scroll, limit }) => {
    const p = limit > 0 ? Math.min(1, Math.max(0, scroll / limit)) : 0;
    setProgress(p);
  });

  // Movimiento según scroll
  useFrame((_state, dt) => {
    if (!mesh.current) return;
    const m = mesh.current;
    const target = new THREE.Vector3(0, 0, 0);

    if (progress < 0.02) {
      const t = progress / 0.02;
      target.set(0, THREE.MathUtils.lerp(0.5, 0, t), -12);
    } else if (progress < 0.2) {
      const t = (progress - 0.02) / (0.2 - 0.02);
      target.set(0, 0, -21);
    } else if (progress < 0.6) {
      const t = (progress - 0.2) / (0.6 - 0.2);
      target.set(THREE.MathUtils.lerp(1, 1.5, t), 0.5, 0);
    } else {
      const t = (progress - 0.6) / (1 - 0.6);
      target.set(
        THREE.MathUtils.lerp(1, -3, t),
        THREE.MathUtils.lerp(1, -1.5, t),
        THREE.MathUtils.lerp(1, 9, t),
      );
    }

    m.position.lerp(target, Math.min(1, dt * 4));
    m.rotation.y += dt * 0.4;
  });

  return <Bengala ref={mesh} scale={9} position={[0, 0, 0]} />;
}

// === NUEVO COMPONENTE: PLANOS DE COLOR (cada plano con su propia animación) ===
function ScrollPlanes() {
  const planesRef = useRef<THREE.Group>(null);
  const [progress, setProgress] = useState(0);

  useLenis(({ scroll, limit }) => {
    const p = limit > 0 ? Math.min(1, Math.max(0, scroll / limit)) : 0;
    setProgress(p);
  });

  useFrame((_state, dt) => {
    if (!planesRef.current) return;
    const g = planesRef.current;
    const [yellow, blue, pink] = g.children as THREE.Mesh[];

    // === Animación 1: Amarillo ===
    {
      let target = new THREE.Vector3(-20, -25, -1);

      if (progress < 0.2) {
        target.set(-5, -25, -1);
      } else if (progress < 0.65) {
        const t = (progress - 0.2) / 0.5;
        target.set(-2.5, -3, -1);
      } else if (progress < 0.7) {
        const t = (progress - 0.65) / 0.5;
        target.set(-4, 3, 1);
      } else {
        const t = (progress - 0.7) / 0.4;
        target.set(-12, 3, 5);
      }

      yellow.position.lerp(target, dt * 2);
    }

    // === Animación 2: Azul ===
    {
      let target = new THREE.Vector3(15, -30, -2);

      if (progress < 0.3) {
        target.set(5, -30, -2);
      } else if (progress < 0.6) {
        const t = (progress - 0.3) / 0.5;
        target.set(5, 1, -2);
      } else if (progress < 0.65) {
        const t = (progress - 0.6) / 0.5;
        target.set(5, 1, -2);
      } else {
        const t = (progress - 0.65) / 0.4;
        target.set(25, 1, -2);
      }

      blue.position.lerp(target, dt * 2);
    }

    // === Animación 3: FONDO NEGRO ===
    {
      let target = new THREE.Vector3(20, -100, -50);

      if (progress < 0.4) {
        target.set(20, -100, -50);
      } else if (progress < 0.6) {
        const t = (progress - 0.4) / 0.5;
        target.set(15, -2, -50);
      } else if (progress < 0.65) {
        const t = (progress - 0.6) / 0.5;
        target.set(15, 0, -50);
      } else {
        const t = (progress - 0.65) / 0.4;
        target.set(0, 0, 1.5);
      }

      pink.position.lerp(target, dt * 2);
    }
  });

  return (
    <group ref={planesRef} position={[0, 0, -2]}>
      {/* Plane Amarillo */}
      <mesh position={[-30, -30, 0]}>
        <planeGeometry args={[5, 20, 1, 1]} />
        <meshStandardMaterial
          color="#eca140"
          emissive="#eca140"
          transparent
          opacity={0.6}
        />
      </mesh>

      {/* Plane Azul */}
      <mesh position={[20, -30, 0]}>
        <planeGeometry args={[10, 20, 1, 1]} />
        <meshStandardMaterial
          color="#1e88e5"
          emissive="#1976d2"
          transparent
          opacity={0.6}
        />
      </mesh>

      {/* Plane negro fondo (azul) */}
      <mesh position={[20, -30, -50]}>
        <planeGeometry args={[20, 60, 1, 1]} />
        <meshStandardMaterial
          color="#000"
          emissive="#000"
          transparent
          opacity={0.9}
        />
      </mesh>
    </group>
  );
}

// === ESCENA PRINCIPAL ===
export function ThreeScene() {
  return (
    <div className="fixed w-full h-full -z-50">
      <Canvas className="w-full h-full" camera={{ position: [0, 0, 6] }}>
        <Environment preset="city" />
        <fog attach="fog" args={["#ffffff", 0.1, 100]} />
        <ambientLight intensity={0.5} color="#3232ff" />
        <directionalLight position={[-3, 3, 2]} intensity={2} color="red" />
        <directionalLight position={[3, 3, 2]} intensity={5} color="blue" />

        {/* Objetos */}
        <ScrollPlanes />
        <RotatingMesh />

        <EffectComposer>
          <Bloom
            intensity={1.2}
            luminanceThreshold={0.01}
            luminanceSmoothing={0.9}
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
