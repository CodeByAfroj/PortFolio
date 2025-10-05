import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
  OrbitControls,
  Sparkles,
  Html,
  Float,
  MeshPortalMaterial,
} from '@react-three/drei';
import * as THREE from 'three';
import { EffectComposer, Bloom } from '@react-three/postprocessing';

function PortalRibbons({ count = 6 }) {
  const group = useRef();
  useFrame(({ clock }) => {
    group.current.rotation.y = clock.getElapsedTime() * 0.1;
  });

  return (
    <group ref={group}>
      {Array(count).fill().map((_, i) => (
        <mesh key={i}>
          <tubeGeometry
            args={[
              new THREE.CatmullRomCurve3(
                Array(8)
                  .fill()
                  .map((_, j) => {
                    const a = (j / 8) * Math.PI * 2 + (i * Math.PI * 2) / count;
                    const r = 3 + i * 0.2;
                    return new THREE.Vector3(
                      Math.cos(a) * r,
                      Math.sin(a) * r * 0.2,
                      Math.sin(a) * r
                    );
                  })
              ),
              200,
              0.02 + i * 0.005,
              8,
              true,
            ]}
          />
          <meshBasicMaterial
            color={`hsl(${(i / count) * 360},50%,60%)`}
            transparent
            opacity={0.6}
          />
        </mesh>
      ))}
    </group>
  );
}

const DataPortal = () => {
  const [open, setOpen] = useState(false);
  return (
    <mesh onClick={() => setOpen(!open)}>
      <circleGeometry args={[1.5, 64]} />
      <MeshPortalMaterial side={THREE.DoubleSide}>
        {open && (
          <Html center>
            <div
              style={{
                background: '#111',
                color: 'white',
                padding: '20px',
                borderRadius: '12px',
              }}
            >
              <h2>🔮 Data Portal</h2>
              <p>Your interactive UI panel here.</p>
              <button
                style={{
                  padding: '8px 16px',
                  marginTop: '12px',
                  borderRadius: '6px',
                  border: 'none',
                  background: 'cyan',
                  color: '#000',
                  cursor: 'pointer',
                }}
                onClick={() => alert('Button inside portal clicked')}
              >
                Action
              </button>
            </div>
          </Html>
        )}
      </MeshPortalMaterial>
    </mesh>
  );
};

function SceneContent() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 10, 5]} intensity={1} />
      <Sparkles count={200} size={2} scale={[6, 6, 6]} speed={0.5} />
      <Float floatIntensity={1.2}>
        <DataPortal />
      </Float>
      <PortalRibbons />
      <OrbitControls autoRotate enableZoom={false} />
      <EffectComposer>
        <Bloom intensity={1.2} luminanceThreshold={0.3} />
      </EffectComposer>
    </>
  );
}

export default function AbstractPortalScene() {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
      <SceneContent />
    </Canvas>
  );
}
