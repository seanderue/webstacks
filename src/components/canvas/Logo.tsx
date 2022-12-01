import * as THREE from 'three'
import { useMemo, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import { useFrame } from '@react-three/fiber'
import { useCursor, MeshReflectorMaterial } from '@react-three/drei'

export default function Logo({ route, ...props }) {
  const WEBSTACKS_BLUE = '#0a73dc'
  const SELECTED = '#bed8f1'

  const router = useRouter()
  const mesh = useRef(null)
  const [hovered, hover] = useState(false)

  useCursor(hovered)
  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime()
    mesh.current.rotation.y = Math.sin(t / 3) * (Math.PI / 8)
    mesh.current.rotation.x = Math.cos(t / 3) * (Math.PI / 8)
    // mesh.current.rotation.z -= delta / 4
  })

  return (
    <group
      ref={mesh}
      onClick={() => router.push(route)}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
      {...props}>
      <mesh position={[-2, 0, 0]}>
        <boxGeometry args={[1, 5, 1]} />
        <meshStandardMaterial color={hovered ? SELECTED : WEBSTACKS_BLUE} />
      </mesh>
      <mesh position={[-1, 2, 0]} scale={1}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={hovered ? SELECTED : WEBSTACKS_BLUE} />
      </mesh>
      <mesh position={[-1, -2, 0]} scale={1}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={hovered ? SELECTED : WEBSTACKS_BLUE} />
      </mesh>
      <mesh position={[2, 0, 0]} scale={1}>
        <boxGeometry args={[1, 5, 1]} />
        <meshStandardMaterial color={hovered ? SELECTED : WEBSTACKS_BLUE} />
      </mesh>
      <mesh position={[1, 2, 0]} scale={1}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={hovered ? SELECTED : WEBSTACKS_BLUE} />
      </mesh>
      <mesh position={[1, -2, 0]} scale={1}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={hovered ? SELECTED : WEBSTACKS_BLUE} />
      </mesh>
    </group>
  )
}
