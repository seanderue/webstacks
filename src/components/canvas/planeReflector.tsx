import { MeshReflectorMaterial } from '@react-three/drei'
import { MeshProps } from '@react-three/fiber'
import { useControls } from 'leva'

export default function PlaneReflector(props: MeshProps) {
  // const config = useControls({
  //   blur: { value: [300, 100] },
  //   resolution: { value: 2048 },
  //   mixBlur: { value: 1 },
  //   mixStrength: { value: 3 },
  //   roughness: { value: 1 },
  //   depthScale: { value: 1.2 },
  //   minDepthThreshold: { value: 0.09 },
  //   maxDepthThreshold: { value: 1.4 },
  //   color: { value: '#181c2a' },
  //   metalness: { value: 1 },
  //   mirror: { value: 0 },
  // })

  return (
    <mesh scale={50} rotation={[-Math.PI / 2, 0, 0]} {...props}>
      <planeGeometry />
      {/* <MeshReflectorMaterial {...config} /> */}
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
