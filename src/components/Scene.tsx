import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Box } from '@react-three/drei';
import * as THREE from 'three';

export default function Scene() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.001;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.1} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      
      {/* Grid */}
      <gridHelper args={[30, 30, 0x00ff00, 0x00ff00]} position={[0, -2, 0]} />
      
      {/* Floating spheres */}
      {Array.from({ length: 50 }).map((_, i) => (
        <Sphere
          key={i}
          position={[
            Math.random() * 20 - 10,
            Math.random() * 20 - 10,
            Math.random() * 20 - 10
          ]}
          scale={0.1}
        >
          <meshStandardMaterial
            color={0x00ff00}
            emissive={0x00ff00}
            emissiveIntensity={0.5}
          />
        </Sphere>
      ))}
      
      {/* Center piece */}
      <Box args={[2, 2, 2]} position={[0, 0, 0]}>
        <meshStandardMaterial
          color={0x00ff00}
          emissive={0x00ff00}
          emissiveIntensity={0.5}
          wireframe
        />
      </Box>
    </group>
  );
}