import { MeshReflectorMaterial } from '@react-three/drei'

export default function Component(props) {
  return (
    <mesh scale={50} rotation={[-Math.PI / 2, 0, 0]} {...props}>
      <planeGeometry />
      <MeshReflectorMaterial
        blur={[300, 100]}
        resolution={2048}
        mixBlur={1}
        mixStrength={3}
        roughness={1}
        depthScale={1.2}
        minDepthThreshold={0.09}
        maxDepthThreshold={1.4}
        color='#181c2a'
        metalness={1}
        mirror={0}
      />
    </mesh>
  )
}
