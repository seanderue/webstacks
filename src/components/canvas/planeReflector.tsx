import { MeshReflectorMaterial } from '@react-three/drei'
import { useControls } from 'leva'

export default function PlaneReflector() {
  const config = useControls({
    blur: { value: [300, 100] },
    resolution: { value: 2048 },
    mixBlur: { value: 1 },
    mixStrength: { value: 50 },
    roughness: { value: 1 },
    depthScale: { value: 1.2 },
    minDepthThreshold: { value: 0.4 },
    maxDepthThreshold: { value: 1.4 },
    color: { value: '#050505' },
    metalness: { value: 0.5 },
    mirror: { value: 0 },
  })

  return (
    <mesh scale={100} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry />
      <MeshReflectorMaterial {...config} />
      {/* <MeshReflectorMaterial
        blur={[300, 100]}
        resolution={2048}
        mixBlur={1}
        mixStrength={50}
        roughness={1}
        depthScale={1.2}
        minDepthThreshold={0.4}
        maxDepthThreshold={1.4}
        color='#050505'
        metalness={0.5}
        mirror={0}
      /> */}
    </mesh>
  )
}
