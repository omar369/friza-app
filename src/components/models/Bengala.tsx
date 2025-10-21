"use client";

import * as THREE from "three";
import { useRef, useEffect } from "react";
import { ThreeElements } from '@react-three/fiber'
import {
  useGLTF,
  useAnimations,
  MeshTransmissionMaterial,
} from "@react-three/drei";
import { GLTF } from "three-stdlib";

type ActionName = "Cylinder.002Action";

interface GLTFAction extends THREE.AnimationClip {
  name: ActionName;
}

type GLTFResult = GLTF & {
  nodes: {
    Cylinder002_1: THREE.Mesh;
    Cylinder002_2: THREE.Mesh;
  };
  animations: GLTFAction[];
};

export function Bengala(props: ThreeElements['group']) {
  const group = useRef<THREE.Group>(null!);
  const { nodes, animations } = useGLTF("/models/SOLO_VELA.glb") as unknown as GLTFResult
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (actions && actions["Cylinder.002Action"]) {
      actions["Cylinder.002Action"].play();
    }
  }, [actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="Cylinder002"
          rotation={[-0.014, 0.344, -0.18]}
          scale={[0.084, 0.088, 0.09]}
        >
          {/* Mesh 1 */}
          <mesh geometry={nodes.Cylinder002_1.geometry}>
            <MeshTransmissionMaterial
              transmission={0.5}
              roughness={0.2}
              thickness={0.3}
              ior={1}
              chromaticAberration={0.9}
              distortion={0.05}
              distortionScale={0.3}
              temporalDistortion={0.1}
              color="#fafafa"
            />
          </mesh>

          {/* Mesh 2 */}
          <mesh geometry={nodes.Cylinder002_2.geometry}>
            <MeshTransmissionMaterial
              transmission={0.1}
              roughness={0.2}
              thickness={0.3}
              ior={1}
              chromaticAberration={0.9}
              distortion={0.05}
              distortionScale={0.3}
              temporalDistortion={0.1}
              color="#bababa"
            />
          </mesh>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/SOLO_VELA.glb");
