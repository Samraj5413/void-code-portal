import { Canvas } from '@react-three/fiber'
import { OrbitControls, Float, Text3D, Center } from '@react-three/drei'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function RotatingCube() {
  const meshRef = useRef<THREE.Mesh>(null!)
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.5
      meshRef.current.rotation.y += delta * 0.3
    }
  })

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial 
          color="#00d4ff" 
          emissive="#0088cc" 
          emissiveIntensity={0.2}
          transparent
          opacity={0.8}
        />
      </mesh>
    </Float>
  )
}

function FloatingShapes() {
  const shapes = []
  
  for (let i = 0; i < 8; i++) {
    shapes.push(
      <Float key={i} speed={1 + Math.random()} rotationIntensity={1} floatIntensity={1}>
        <mesh position={[
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 8,
          (Math.random() - 0.5) * 5
        ]}>
          {Math.random() > 0.5 ? 
            <octahedronGeometry args={[0.3]} /> : 
            <tetrahedronGeometry args={[0.4]} />
          }
          <meshStandardMaterial 
            color={Math.random() > 0.5 ? "#ff00ff" : "#00ffff"} 
            emissive={Math.random() > 0.5 ? "#880088" : "#008888"}
            emissiveIntensity={0.3}
            transparent
            opacity={0.6}
          />
        </mesh>
      </Float>
    )
  }
  
  return <>{shapes}</>
}

interface ThreeSceneProps {
  className?: string
}

export default function ThreeScene({ className }: ThreeSceneProps) {
  return (
    <div className={className}>
      <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00d4ff" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff00ff" />
        
        <RotatingCube />
        <FloatingShapes />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  )
}