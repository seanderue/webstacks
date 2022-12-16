import { Torus } from '@react-three/drei'
import { useControls } from 'leva'
import { useMemo } from 'react'
import { Shape } from 'three'

export default function VennDiagram({
  radius,
  tubeRadius,
  radialSegments,
  tubularSegments,
  position,
  rotation,
  scale,
}): JSX.Element {
  return (
    <>
      <group position={position} rotation={rotation} scale={scale}>
        <Torus position={[0, 0, 0.075]} args={[radius, tubeRadius, radialSegments, tubularSegments]}>
          <meshStandardMaterial flatShading color='white' />
        </Torus>
        <Torus position={[radius + tubeRadius, 0, -0.075]} args={[radius, tubeRadius, radialSegments, tubularSegments]}>
          <meshStandardMaterial flatShading color='#2885f6' />
        </Torus>
        <Torus
          position={[(radius + tubeRadius) / 2, radius + tubeRadius, 0]}
          args={[radius, tubeRadius, radialSegments, tubularSegments]}>
          <meshStandardMaterial flatShading color='#94bae9' />
        </Torus>
      </group>
    </>
  )
}
