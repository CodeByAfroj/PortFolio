// src/components/GameEarth.jsx
import React, { useRef } from 'react';
import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import * as THREE from 'three';

const Earth = () => {
  const earthRef = useRef();
  const cloudsRef = useRef();
  const { mouse } = useThree();

  // Load textures
 const [colorMap, bumpMap, specMap, cloudMap] = useLoader(THREE.TextureLoader, [
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/101090/earthmap1k.jpg",
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/101090/earthbump1k.jpg",
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/101090/earthspec1k.jpg",
 "https://s3-us-west-2.amazonaws.com/s.cdpn.io/122460/earth_clouds_2048x1024.jpg"
]);


  useFrame(() => {
    const targetX = mouse.x * Math.PI * 0.5;
    const targetY = mouse.y * Math.PI * 0.25;

    // Smoothly interpolate rotation for a "game-like" feel
    if (earthRef.current) {
      earthRef.current.rotation.y += (targetX - earthRef.current.rotation.y) * 0.05;
      earthRef.current.rotation.x += (targetY - earthRef.current.rotation.x) * 0.05;
    }

    if (cloudsRef.current) {
      cloudsRef.current.rotation.y += 0.0008;
    }
  });

  return (
    <>
      {/* Cloud Layer */}
      <mesh ref={cloudsRef}>
        <sphereGeometry args={[2.03, 64, 64]} />
        <meshPhongMaterial
          map={cloudMap}
          transparent
          opacity={0.4}
          depthWrite={false}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Earth */}
      <mesh ref={earthRef}>
        <sphereGeometry args={[2, 64, 64]} />
        <meshPhongMaterial
          map={colorMap}
          bumpMap={bumpMap}
          bumpScale={0.04}
          specularMap={specMap}
          specular={new THREE.Color('grey')}
        />
      </mesh>
    </>
  );
};

const EarthScene = () => {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Stars radius={100} depth={50} count={5000} factor={4} fade />
      <Earth />
    </Canvas>
  );
};

export default EarthScene;
