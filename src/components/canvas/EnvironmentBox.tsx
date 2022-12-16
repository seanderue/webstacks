import { Environment } from '@react-three/drei'
import { useControls } from 'leva'

function Striplight(props) {
  return (
    <mesh {...props}>
      <boxGeometry />
      <meshBasicMaterial color='white' />
    </mesh>
  )
}

export default function EnvironmentBox() {
  const config = useControls({
    scale: { value: 100, step: 1 },
    positionX: { value: 0, step: 1 },
    positionY: { value: 0, step: 1 },
    positionZ: { value: -5, step: 1 },
    rotationX: { value: 0, step: 1 },
    rotationY: { value: 0, step: 1 },
    rotationZ: { value: 0, step: 1 },
  })

  return (
    <>
      <Environment resolution={64}>
        {/* 
        Using a giant plane for a backdrop
        <mesh scale={100}>
          <sphereGeometry args={[1, 64, 64]} />
          <meshBasicMaterial color={'red'} side={THREE.BackSide} />
        </mesh> */}
      </Environment>

      <mesh
        receiveShadow
        scale={config.scale}
        position={[config.positionX, config.positionY, config.positionZ]}
        // position={[50, -25, -50]}
        rotation={[config.rotationX, config.rotationY, config.rotationZ]}>
        {/* rotation={[-Math.PI / 2, -Math.PI / 2, 0]}> */}
        <planeGeometry />
        <meshStandardMaterial color='red' />
      </mesh>
    </>
  )
}
