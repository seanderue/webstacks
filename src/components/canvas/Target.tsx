import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function Model(props: JSX.IntrinsicAttributes & { [properties: string]: any }) {
  const { scene } = useGLTF('target.gltf')
  const ref = useRef(null)

  // useFrame((state, delta) => {
  //   const angle = state.clock.elapsedTime * props.speed
  //   const up = new THREE.Vector3(-1, 0, 0)
  //   const direction = new THREE.Vector3(Math.sin(angle), 0, Math.cos(angle))
  //   const quaternion = new THREE.Quaternion().setFromUnitVectors(up, direction)
  //   ref.current.quaternion.copy(quaternion)
  //   ref.current.position.x = Math.sin(angle) * 5
  //   ref.current.position.z = Math.cos(angle) * 5
  // })

  return (
    <group onClick={props.onClick} scale={1} rotation={[-0.2, -0.25, 0]} position={[2, 2.5, 0]}>
      <primitive ref={ref} object={scene} {...props} />
    </group>
  )
}
