"use client";

import { Suspense, useRef } from "react";
import type { MouseEvent } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Environment, Center, Bounds } from "@react-three/drei";
import * as THREE from "three";
import { useReducedMotion } from "motion/react";

const MODEL_URL = "/brain.glb";

function RotatingBrain({ pointer }: { pointer: React.MutableRefObject<{ x: number; y: number }> }) {
  const group = useRef<THREE.Group>(null);
  const { scene } = useGLTF(MODEL_URL);
  const reduce = useReducedMotion();

  useFrame((state) => {
    if (!group.current) return;
    const idle = reduce ? 0 : Math.sin(state.clock.elapsedTime * 0.4) * 0.05;
    const targetY = reduce ? 0 : pointer.current.x * 0.9 + idle;
    const targetX = reduce ? 0 : pointer.current.y * -0.25;
    group.current.rotation.y += (targetY - group.current.rotation.y) * 0.06;
    group.current.rotation.x += (targetX - group.current.rotation.x) * 0.06;
  });

  return (
    <group ref={group}>
      <Center>
        <primitive object={scene} />
      </Center>
    </group>
  );
}

export function Brain3D({ className }: { className?: string }) {
  const pointer = useRef({ x: 0, y: 0 });

  function handleMove(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    pointer.current = {
      x: ((e.clientX - rect.left) / rect.width) * 2 - 1,
      y: ((e.clientY - rect.top) / rect.height) * 2 - 1,
    };
  }

  function handleLeave() {
    pointer.current = { x: 0, y: 0 };
  }

  return (
    <div onMouseMove={handleMove} onMouseLeave={handleLeave} className={className}>
      <Canvas
        camera={{ fov: 32 }}
        dpr={[1, 2]}
        gl={{ alpha: true, antialias: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[3, 4, 5]} intensity={1.6} color="#c9b8ff" />
        <directionalLight position={[-4, -2, -3]} intensity={0.9} color="#4fd689" />
        <directionalLight position={[0, -3, 4]} intensity={0.5} color="#ffffff" />
        <Suspense fallback={null}>
          <Bounds fit clip observe margin={1.35}>
            <RotatingBrain pointer={pointer} />
          </Bounds>
          {/* background:false — this only feeds reflections/lighting into the
              glossy material, it must never render as a visible skybox. */}
          <Environment preset="studio" background={false} />
        </Suspense>
      </Canvas>
    </div>
  );
}

useGLTF.preload(MODEL_URL);
