import { Environment } from '@react-three/drei'

export default function Lights() {
  return (
    <>
      <pointLight castShadow color={'#FFFFFF'} position={[-10, -10, -10]} />

      <color attach='background' args={['#cd7c7c']} />

      <Environment preset={'dawn'} />
    </>
  )
}
