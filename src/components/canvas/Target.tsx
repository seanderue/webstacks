import { useGLTF } from '@react-three/drei'
import { useRef } from 'react'

export default function Model(props: JSX.IntrinsicAttributes & { [properties: string]: any }) {
  const { scene } = useGLTF('target.gltf')
  const ref = useRef(null)

  return (
    <group onClick={props.onClick} scale={1} rotation={[-0.2, -0.25, 0]} position={[2, 2.5, 0]}>
      <primitive ref={ref} object={scene} {...props} />
    </group>
  )
}
