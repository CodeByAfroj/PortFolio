// src/components/FloatingIsland.jsx
import React, { useRef, useState } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, Html, useGLTF, Sparkles, Float, Environment, ContactShadows } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';

const FloatingIsland = ({ onCrystalClick }) => {
  const group = useRef();
  const { scene } = useGLTF('https://assets.codepen.io/370061/scene-r.gltf');

  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.001;
    }
  });

  return (
    <group ref={group} scale={2}>
      <primitive object={scene} />
      
      {/* Glowing Crystal */}
      <mesh position={[0, 1.5, 0]} onClick={() => onCrystalClick()}>
        <icosahedronGeometry args={[0.3, 1]} />
        <meshStandardMaterial color="aqua" emissive="cyan" emissiveIntensity={1} />
        <Html position={[0, 0.5, 0]}>
          <div className="tooltip">🔮 Crystal</div>
        </Html>
      </mesh>
    </group>
  );
};

const SceneContent = () => {
  const [clicked, setClicked] = useState(false);

  const handleCrystalClick = () => {
    setClicked(true);
    alert("🌟 You activated the crystal!");
  };

  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 10, 5]} intensity={1.2} />
      <pointLight position={[-10, -10, -10]} intensity={1} />

      <Environment preset="sunset" />
      <Sparkles count={200} size={2} scale={[10, 10, 10]} speed={0.5} />

      <Float speed={1.5} floatIntensity={2}>
        <FloatingIsland onCrystalClick={handleCrystalClick} />
      </Float>

      <ContactShadows position={[0, -2, 0]} opacity={0.4} blur={2} far={4} />
      <OrbitControls autoRotate enableZoom={true} />

      <EffectComposer>
        <Bloom intensity={1.4} luminanceThreshold={0.3} />
      </EffectComposer>
    </>
  );
};

const FloatingIslandScene = () => {
  return (
    <Canvas camera={{ position: [0, 2, 8], fov: 45 }}>
      <SceneContent />
    </Canvas>
  );
};

export default FloatingIslandScene;
