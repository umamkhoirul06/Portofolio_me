// File: src/components/canvas/HeroCanvas.tsx
"use client";

import React, { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

function InteractiveGeometry() {
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    // Rotasi konstan yang tenang
    meshRef.current.rotation.y += delta * 0.25;
    meshRef.current.rotation.x += delta * 0.15;

    // Interaksi Mouse: objek melirik ke arah kursor dengan interpolasi halus (lerp)
    const targetX = (state.pointer.x * Math.PI) / 6;
    const targetY = (state.pointer.y * Math.PI) / 6;

    meshRef.current.rotation.y = THREE.MathUtils.lerp(
      meshRef.current.rotation.y,
      targetX + state.clock.elapsedTime * 0.2,
      0.05
    );
    meshRef.current.rotation.x = THREE.MathUtils.lerp(
      meshRef.current.rotation.x,
      -targetY,
      0.05
    );
  });

  return (
    <Float speed={2} rotationIntensity={0.4} floatIntensity={1.2}>
      <group ref={meshRef} scale={1.15}>
        {/* Layer 1: Core Solid Matte Dark */}
        <mesh>
          <torusKnotGeometry args={[1, 0.32, 128, 32]} />
          <meshStandardMaterial
            color="#121212"
            roughness={0.3}
            metalness={0.8}
          />
        </mesh>

        {/* Layer 2: Precision Wireframe Overlay (Gaya Industrial/Engineering) */}
        <mesh scale={1.008}>
          <torusKnotGeometry args={[1, 0.32, 64, 16]} />
          <meshBasicMaterial
            color="#CCFF00"
            wireframe={true}
            transparent={true}
            opacity={0.35}
          />
        </mesh>
      </group>
    </Float>
  );
}

export default function HeroCanvas() {
  return (
    <div className="w-full h-[380px] md:h-[520px] relative cursor-grab active:cursor-grabbing">
      <Canvas
        camera={{ position: [0, 0, 4.2], fov: 45 }}
        dpr={[1, 2]} // Membatasi pixel ratio maksimal 2 agar HP/laptop kentang tidak ngelag
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} color="#ffffff" />
        <directionalLight position={[-5, -5, -2]} intensity={0.8} color="#CCFF00" />
        
        <Suspense fallback={null}>
          <InteractiveGeometry />
          <Environment preset="city" />
          <ContactShadows
            position={[0, -2, 0]}
            opacity={0.5}
            scale={8}
            blur={2.5}
            far={4}
          />
        </Suspense>
      </Canvas>

      {/* Indikator interaktif bergaya teknis */}
      <div className="absolute bottom-2 right-2 font-mono text-[11px] text-neutral-500 uppercase tracking-widest pointer-events-none">
        [WEBGL_R3F : INTERACTIVE_MESH // MOVE CURSOR]
      </div>
    </div>
  );
}