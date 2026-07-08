import { Environment, Float, PerspectiveCamera, RoundedBox, Sparkles, ContactShadows } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'

function FloatingLaptop() {
  const groupRef = useRef()
  const screenRef = useRef()
  const glowRef = useRef()

  useFrame((state) => {
    const { pointer, clock } = state

    if (groupRef.current) {
      groupRef.current.rotation.y = pointer.x * 0.3
      groupRef.current.rotation.x = -pointer.y * 0.18
    }

    if (screenRef.current) {
      screenRef.current.rotation.x = pointer.y * 0.12
    }

    if (glowRef.current) {
      // subtle shimmer so the screen reads as "live" rather than a flat tint
      glowRef.current.material.opacity = 0.22 + Math.sin(clock.elapsedTime * 1.4) * 0.05
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.8} floatIntensity={1.6}>
      <group ref={groupRef} position={[0, -0.3, 0]}>
        {/* base */}
        <RoundedBox args={[2.6, 1.6, 0.08]} radius={0.05} smoothness={4} position={[0, 0.1, 0]} rotation={[-0.06, 0, 0]} castShadow>
          <meshStandardMaterial color="#0f172a" metalness={0.36} roughness={0.16} />
        </RoundedBox>

        {/* screen housing */}
        <RoundedBox ref={screenRef} args={[2.5, 1.4, 0.05]} radius={0.04} smoothness={4} position={[0, 0.22, -0.82]} rotation={[-0.28, 0, 0]} castShadow>
          <meshStandardMaterial color="#020617" metalness={0.48} roughness={0.22} />
        </RoundedBox>

        {/* screen glow — subtle animated shimmer instead of a flat wash */}
        <mesh ref={glowRef} position={[0, 0.18, -0.795]} rotation={[-0.28, 0, 0]}>
          <planeGeometry args={[2.35, 1.22]} />
          <meshBasicMaterial color="#7c3aed" transparent opacity={0.22} />
        </mesh>
        <mesh position={[0, 0.18, -0.79]} rotation={[-0.28, 0, 0]}>
          <planeGeometry args={[2.15, 1.02]} />
          <meshBasicMaterial color="#22d3ee" transparent opacity={0.1} />
        </mesh>

        {/* keyboard deck */}
        <RoundedBox args={[2.7, 1.3, 0.04]} radius={0.05} smoothness={4} position={[0, -0.82, -0.28]} rotation={[0.95, 0, 0]} castShadow>
          <meshStandardMaterial color="#111827" metalness={0.34} roughness={0.2} />
        </RoundedBox>

        {/* logo ring */}
        <mesh position={[0, -0.22, 0.48]}>
          <torusGeometry args={[0.56, 0.08, 16, 52]} />
          <meshStandardMaterial color="#22d3ee" emissive="#22d3ee" emissiveIntensity={1.5} />
        </mesh>
      </group>
    </Float>
  )
}

function ParticleCloud() {
  return (
    <Sparkles
      count={70}
      scale={6}
      size={4}
      speed={0.28}
      color="#93c5fd"
      opacity={0.55}
    />
  )
}

export default function HeroScene() {
  return (
    <div className="relative h-[420px] w-full overflow-hidden rounded-[2rem] border border-white/10 bg-black/30 md:h-[540px]">
      <Canvas shadows dpr={[1, 1.75]} gl={{ antialias: true, alpha: true }}>
        <PerspectiveCamera makeDefault position={[0, 0.15, 6]} fov={42} />
        <color attach="background" args={["#050816"]} />
        <fog attach="fog" args={["#050816", 7, 12]} />
        <ambientLight intensity={0.72} />
        <directionalLight position={[4, 7, 6]} intensity={2.4} color="#ffffff" castShadow />
        <directionalLight position={[-4, -2, 4]} intensity={1.2} color="#38bdf8" />
        <pointLight position={[-3, 1, 3]} intensity={0.9} color="#c084fc" />
        <Environment preset="city" />
        <ParticleCloud />
        <FloatingLaptop />
        <ContactShadows position={[0, -1.4, 0]} opacity={0.4} scale={8} blur={2.4} far={3} />
      </Canvas>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.18),transparent_48%)]" />
    </div>
  )
}