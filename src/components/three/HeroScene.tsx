import {
  Component,
  Suspense,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { ContactShadows, Html, useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import { MaxwellFallback } from './MaxwellFallback'

const MODEL_URL = '/oiia-cat.glb'
const SOUND_URL = '/sound.mp3'

// Preload so the click-to-spin feels instant once the bundle is in.
useGLTF.preload(MODEL_URL)

interface SpinningCatProps {
  spinning: boolean
  hovered: boolean
  onPointerOver: () => void
  onPointerOut: () => void
  onClick: () => void
}

function SpinningCat({
  spinning,
  hovered,
  onPointerOver,
  onPointerOut,
  onClick,
}: SpinningCatProps) {
  const root = useRef<THREE.Group>(null)
  const wrapper = useRef<THREE.Group>(null)

  const gltf = useGLTF(MODEL_URL)

  // Center + scale the model so it sits nicely regardless of source units.
  const scene = gltf.scene
  useEffect(() => {
    const box = new THREE.Box3().setFromObject(scene)
    const size = new THREE.Vector3()
    const center = new THREE.Vector3()
    box.getSize(size)
    box.getCenter(center)
    scene.position.sub(center) // recenter at origin
    const target = 4.2 // bigger — fills more of the canvas
    const max = Math.max(size.x, size.y, size.z) || 1
    const k = target / max
    scene.scale.setScalar(k)
  }, [scene])

  useFrame((state, delta) => {
    if (!root.current || !wrapper.current) return
    const t = state.clock.elapsedTime

    // Spin only when the user is interacting. At rest he sits still.
    // Hover: medium speed. Click (toggle on): full speed + sound.
    const speed = spinning ? 14 : hovered ? 4 : 0
    root.current.rotation.y += speed * delta

    // Tiny vertical bob so he doesn't look frozen when at rest.
    wrapper.current.position.y = Math.sin(t * 1.6) * 0.04
  })

  return (
    <group ref={wrapper} position={[0, 0.05, 0]}>
      <group
        ref={root}
        onPointerOver={(e) => {
          e.stopPropagation()
          onPointerOver()
        }}
        onPointerOut={(e) => {
          e.stopPropagation()
          onPointerOut()
        }}
        onClick={(e) => {
          e.stopPropagation()
          onClick()
        }}
      >
        <primitive object={scene} />
      </group>

      {spinning && (
        <Html
          position={[0, 2.6, 0]}
          center
          style={{ pointerEvents: 'none' }}
          zIndexRange={[100, 0]}
        >
          <div className="px-3 py-1 bg-paper border-3 border-ink rounded-md shadow-brutal font-display uppercase text-2xl text-ink whitespace-nowrap">
            OIIA OIIA OIIA
          </div>
        </Html>
      )}
    </group>
  )
}

/**
 * Class-based error boundary so a missing /oiia-cat.glb falls back to the
 * static Maxwell illustration instead of crashing the page.
 */
class SceneBoundary extends Component<
  { fallback: ReactNode; children: ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false }
  static getDerivedStateFromError() {
    return { hasError: true }
  }
  componentDidCatch(error: unknown) {
    // Surface in dev so the user knows the model isn't there yet.
    console.warn('[HeroScene] failed to load 3D scene:', error)
  }
  render() {
    if (this.state.hasError) return this.props.fallback
    return this.props.children
  }
}

function CatStage() {
  const [hovered, setHovered] = useState(false)
  const [spinning, setSpinning] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  // Build the audio element once.
  useEffect(() => {
    const audio = new Audio(SOUND_URL)
    audio.loop = true
    audio.volume = 0.55
    audio.preload = 'auto'
    audioRef.current = audio
    return () => {
      audio.pause()
      audio.src = ''
      audioRef.current = null
    }
  }, [])

  // Play whenever the cat is moving — hover OR click-toggle.
  // Note: browsers block audio until the user has interacted with the page
  // at least once. Before that first click anywhere on the site, hover-audio
  // may stay silent. That's a browser autoplay policy, not a bug here.
  const shouldPlay = hovered || spinning
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    if (shouldPlay) {
      if (audio.paused) {
        // Reset to start only when transitioning from silent to playing.
        audio.currentTime = 0
        void audio.play().catch(() => undefined)
      }
    } else {
      audio.pause()
    }
  }, [shouldPlay])

  return (
    <SpinningCat
      spinning={spinning}
      hovered={hovered}
      onPointerOver={() => {
        setHovered(true)
        document.body.style.cursor = 'pointer'
      }}
      onPointerOut={() => {
        setHovered(false)
        document.body.style.cursor = 'auto'
      }}
      onClick={() => setSpinning((s) => !s)}
    />
  )
}

export function HeroScene() {
  return (
    <Canvas
      aria-hidden="true"
      camera={{ position: [0, 0.1, 4.2], fov: 42 }}
      dpr={[1, 1.6]}
      gl={{ antialias: true, alpha: true }}
      style={{ width: '100%', height: '100%' }}
    >
      <ambientLight intensity={0.9} />
      <directionalLight position={[3, 5, 4]} intensity={0.6} />
      <directionalLight position={[-3, 2, 1]} intensity={0.3} color="#ffd2a8" />
      <SceneBoundary
        fallback={
          <Html center>
            <MaxwellFallback />
          </Html>
        }
      >
        <Suspense fallback={null}>
          <CatStage />
          <ContactShadows
            position={[0, -1.35, 0]}
            opacity={0.5}
            scale={5}
            blur={2.6}
            far={2}
            color="#1a1a1a"
          />
        </Suspense>
      </SceneBoundary>
    </Canvas>
  )
}

export default HeroScene
