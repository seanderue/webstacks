import * as THREE from 'three'
import { Canvas, useThree } from '@react-three/fiber'
import {
  AccumulativeShadows,
  BakeShadows,
  Environment,
  Lightformer,
  OrbitControls,
  Preload,
  RandomizedLight,
  softShadows,
  Backdrop,
} from '@react-three/drei'
import { useEffect, useRef, useState } from 'react'
import styles from '../../styles/scene.module.scss'
import Effects from './Effects'
import Lights from './Lights'
import EnvironmentBox from './EnvironmentBox'

export default function Scene({ children, ...props }) {
  // Everything defined in here will persist between route changes, only children are swapped
  return (
    <Canvas
      className={styles.expandedCanvas}
      shadows
      orthographic
      camera={{ position: [10, 5, 20], zoom: 80 }}
      gl={{ preserveDrawingBuffer: true }}
      onCreated={({ gl, scene }) => {
        scene.background = new THREE.Color('#10172e')
        console.log(scene)
        console.log(gl)
      }}
      {...props}>
      <directionalLight castShadow intensity={0.75} />
      <ambientLight intensity={0.75} />
      {/* <EnvironmentBox /> */}

      <Backdrop receiveShadow scale={[20, 5, 5]} floor={1.5} position={[0, -0.5, -2]}>
        {children}
      </Backdrop>

      <Preload all />
      <OrbitControls
        autoRotate={false}
        autoRotateSpeed={-0.5}
        zoomSpeed={0.25}
        minZoom={40}
        maxZoom={140}
        enablePan={false}
        dampingFactor={0.05}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 3}
        // minAzimuthAngle={0}
        // maxAzimuthAngle={Math}
      />
      {/** The environment is just a bunch of shapes emitting light. This is needed for the clear-coat */}
      {/* <Environment preset='city' background resolution={32}> */}
      {/* <group rotation={[-Math.PI / 2, 0, 0]}>
          <Lightformer intensity={10} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[10, 10, 1]} />
          <Lightformer intensity={4} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={[10, 2, 1]} />
          <Lightformer intensity={20} rotation-y={Math.PI / 2} position={[-5, -1, -1]} scale={[10, 2, 1]} />
          <Lightformer intensity={10} rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={[20, 2, 1]} />
          <Lightformer type='ring' intensity={10} rotation-y={Math.PI / 2} position={[-0.1, -1, -5]} scale={10} />
        </group> */}
      {/* </Environment> */}

      {/* <Lights /> */}
      {/* <Effects /> */}
      {/* <AccumulativeShadows
        temporal
        frames={100}
        color={'#544480'}
        colorBlend={5}
        toneMapped={true}
        alphaTest={0.9}
        opacity={1}
        scale={30}
        position={[0, -1.01, 0]}>
        <RandomizedLight
          amount={4}
          radius={10}
          ambient={0.5}
          intensity={1}
          position={[0, 10, -10]}
          size={15}
          mapSize={1024}
          bias={0.0001}
        />
      </AccumulativeShadows> */}
    </Canvas>
  )
}
