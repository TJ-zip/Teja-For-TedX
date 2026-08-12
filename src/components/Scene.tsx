"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { useScrollProgress } from "./ScrollProgress";

const RED = new THREE.Color("#eb0028");
const WHITE = new THREE.Color("#f5f5f5");

function damp(current: number, target: number, lambda: number, dt: number) {
  return current + (target - current) * (1 - Math.exp(-lambda * dt));
}

/** Depth field of points the camera travels through as the page scrolls. */
function StarField({ count }: { count: number }) {
  const points = useRef<THREE.Points>(null);
  const progress = useScrollProgress();

  const geometry = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    for (let i = 0; i < count; i += 1) {
      const radius = 6 + Math.random() * 26;
      const theta = Math.random() * Math.PI * 2;
      const y = (Math.random() - 0.5) * 26;
      positions[i * 3] = Math.cos(theta) * radius;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = Math.sin(theta) * radius - 20;

      const tint = Math.random() < 0.22 ? RED : WHITE;
      colors[i * 3] = tint.r;
      colors[i * 3 + 1] = tint.g;
      colors[i * 3 + 2] = tint.b;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    return geo;
  }, [count]);

  useEffect(() => () => geometry.dispose(), [geometry]);

  useFrame((_, delta) => {
    const mesh = points.current;
    if (!mesh) return;
    const dt = Math.min(delta, 0.1);
    mesh.rotation.y += dt * 0.035;
    mesh.rotation.x = damp(mesh.rotation.x, progress.current * 0.4, 2, dt);
  });

  return (
    <points ref={points} geometry={geometry}>
      <pointsMaterial
        size={0.055}
        sizeAttenuation
        vertexColors
        transparent
        opacity={0.75}
        depthWrite={false}
      />
    </points>
  );
}

/**
 * The core: a wireframe icosahedron representing the event as a single system.
 * It tightens and reddens as the page moves through the department sections.
 */
function Core() {
  const mesh = useRef<THREE.Mesh>(null);
  const material = useRef<THREE.MeshBasicMaterial>(null);
  const progress = useScrollProgress();

  useFrame((state, delta) => {
    const node = mesh.current;
    if (!node) return;
    const dt = Math.min(delta, 0.1);
    const p = progress.current;

    node.rotation.y += dt * 0.25;
    node.rotation.x = damp(node.rotation.x, 0.3 + p * 1.2, 2.5, dt);

    const scale = 1.15 + Math.sin(state.clock.elapsedTime * 0.6) * 0.03 - p * 0.35;
    node.scale.setScalar(Math.max(0.45, scale));

    if (material.current) {
      material.current.color.lerpColors(WHITE, RED, Math.min(1, p * 1.6));
      material.current.opacity = 0.28 + Math.min(0.42, p * 0.6);
    }
  });

  return (
    <mesh ref={mesh} position={[0, 0, -3]}>
      <icosahedronGeometry args={[1.6, 1]} />
      <meshBasicMaterial ref={material} wireframe transparent opacity={0.3} color="#f5f5f5" />
    </mesh>
  );
}

/** Four pillars for the four departments. They lock into formation on scroll. */
function Pillars() {
  const group = useRef<THREE.Group>(null);
  const progress = useScrollProgress();

  const offsets = useMemo(() => [0, 1, 2, 3].map((i) => (i / 4) * Math.PI * 2), []);

  useFrame((state, delta) => {
    const node = group.current;
    if (!node) return;
    const dt = Math.min(delta, 0.1);
    const p = progress.current;
    // 0 -> scattered, 1 -> locked into a tight square formation
    const lock = Math.min(1, Math.max(0, (p - 0.12) / 0.35));

    node.rotation.y += dt * (0.5 - lock * 0.38);

    node.children.forEach((child, i) => {
      const radius = 4.4 - lock * 1.8;
      const angle = offsets[i];
      child.position.x = Math.cos(angle) * radius;
      child.position.z = Math.sin(angle) * radius - 3;
      child.position.y = damp(
        child.position.y,
        Math.sin(state.clock.elapsedTime * 0.5 + i) * (1 - lock) * 1.1,
        2,
        dt,
      );
      child.rotation.y += dt * 0.4;
    });
  });

  return (
    <group ref={group}>
      {offsets.map((_, i) => (
        <mesh key={i}>
          <boxGeometry args={[0.42, 1.5, 0.42]} />
          <meshBasicMaterial
            wireframe
            transparent
            opacity={0.42}
            color={i % 2 === 0 ? "#eb0028" : "#8a8a8a"}
          />
        </mesh>
      ))}
    </group>
  );
}

/** Scroll drives the camera; pointer adds a small parallax. */
function CameraRig() {
  const progress = useScrollProgress();
  const { camera } = useThree();
  const pointer = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      pointer.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      pointer.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  useFrame((_, delta) => {
    const dt = Math.min(delta, 0.1);
    const p = progress.current;
    camera.position.x = damp(camera.position.x, pointer.current.x * 0.6, 3, dt);
    camera.position.y = damp(camera.position.y, p * 2.6 - pointer.current.y * 0.4, 3, dt);
    camera.position.z = damp(camera.position.z, 7.5 - p * 4.2, 2.2, dt);
    camera.lookAt(0, p * 1.4, -3);
  });

  return null;
}

function supportsWebGL() {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(
      window.WebGLRenderingContext &&
        (canvas.getContext("webgl") || canvas.getContext("experimental-webgl")),
    );
  } catch {
    return false;
  }
}

export default function Scene() {
  const [enabled, setEnabled] = useState(false);
  const [count, setCount] = useState(900);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const small = window.matchMedia("(max-width: 768px)").matches;
    setCount(small ? 420 : 1100);
    // No WebGL, or the visitor has asked for reduced motion -> stay static.
    setEnabled(!reduced && supportsWebGL());
  }, []);

  if (!enabled) {
    return <div aria-hidden="true" className="scene-static" />;
  }

  return (
    <div aria-hidden="true" className="scene-canvas">
      <Canvas
        dpr={[1, 1.75]}
        gl={{ antialias: true, powerPreference: "high-performance" }}
        camera={{ position: [0, 0, 7.5], fov: 55 }}
      >
        <color attach="background" args={["#050505"]} />
        <fog attach="fog" args={["#050505", 8, 34]} />
        <StarField count={count} />
        <Core />
        <Pillars />
        <CameraRig />
      </Canvas>
    </div>
  );
}
