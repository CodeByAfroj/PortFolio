import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

const SCREEN_IMAGE_URL =
  "https://images.pexels.com/photos/7199194/pexels-photo-7199194.jpeg";

function GamingPC() {
  const group = useRef();
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const { size } = useThree();
  const texture = useLoader(THREE.TextureLoader, SCREEN_IMAGE_URL);

  useEffect(() => {
    function onMouseMove(event) {
      setMouse({
        x: (event.clientX / size.width) * 2 - 1,
        y: -(event.clientY / size.height) * 2 + 1,
      });
    }
    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, [size]);

  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += (mouse.x * 0.5 - group.current.rotation.y) * 0.1;
      group.current.rotation.x += (mouse.y * 0.3 - group.current.rotation.x) * 0.1;
    }
  });

  return (
    <group ref={group} position={[0, -1, 0]}>
      {/* PC Tower */}
      <mesh castShadow position={[0, 1, 0]}>
        <boxGeometry args={[1.2, 2, 0.8]} />
        <meshStandardMaterial color="#222" roughness={0.4} metalness={0.8} />
      </mesh>

      {/* Pink glowing CPU light */}
      <mesh position={[-0.3, 1.5, 0.45]}>
        <boxGeometry args={[0.3, 0.4, 0.1]} />
        <meshStandardMaterial
          color="#ff3ca6"
          emissive="#ff3ca6"
          emissiveIntensity={8}
          toneMapped={false}
        />
      </mesh>

      {/* Monitor screen */}
      <mesh position={[0, 2.3, -0.4]} rotation={[0, 0, 0]}>
        <planeGeometry args={[1.5, 0.9]} />
        <meshBasicMaterial map={texture} toneMapped={false} />
      </mesh>
    </group>
  );
}

export default function LaptopScene() {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 1.5, 6], fov: 50 }}
      style={{ height: "100vh", background: "#121212" }}
    >
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 10, 5]} intensity={1} castShadow />
      <GamingPC />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
