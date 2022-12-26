import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { Preload } from '@react-three/drei'
import { useRef } from 'react'
import styles from '../../styles/scene.module.scss'

export default function Scene({ children, ...props }) {
  // Everything defined in here will persist between route changes, only children are swapped
  return (
    <Canvas
      id='canvas'
      className={styles.expandedCanvas}
      shadows
      dpr={[1, 2]}
      camera={{ position: [-0.45, -1.5, 8.5], rotation: [0, 0, 0], fov: 35 }}
      gl={{ preserveDrawingBuffer: true }}
      onCreated={({ gl, scene }) => {
        scene.background = new THREE.Color('#10172e')
      }}
      {...props}>
      <directionalLight shadow-bias={0} shadow-normalBias={0.1} castShadow intensity={0.75} />

      <fog attach='fog' args={['#10172e', 0, 60]} />

      {children}

      <Preload all />
    </Canvas>
  )
}
