import { MeshReflectorMaterial } from '@react-three/drei'

export default function PlaneReflector() {
  return (
    <mesh receiveShadow scale={10} position={[0, -0.2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry />
      <meshStandardMaterial color='greenyellow' metalness={0} roughness={0} />
    </mesh>
  )
}
