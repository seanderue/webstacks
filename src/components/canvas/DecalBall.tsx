import { Decal, Float, useTexture } from '@react-three/drei'
import { Vector3, Color } from '@react-three/fiber'
import { useState } from 'react'
import { Euler } from 'three'

export default function Component(props: {
  scale: Vector3
  rotation: Euler
  decalRotation: number | Euler
  imgPath: any
  position: Vector3
  geoArgs: [radius?: number, detail?: number]
  color: Color
  decalPosition: Vector3
  decalScale: Vector3
}) {
  const [decal] = useTexture([props.imgPath])
  const [hovered, setHovered] = useState(false)

  return (
    <Float speed={1} rotationIntensity={0.25} floatIntensity={0.5}>
      <mesh castShadow receiveShadow rotation={props.rotation} position={props.position} scale={props.scale}>
        <icosahedronGeometry args={props.geoArgs} />
        <meshStandardMaterial
          color={hovered ? '#2885f6' : props.color}
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          // debug
          position={props.decalPosition}
          rotation={props.decalRotation}
          scale={props.decalScale}
          map={decal}
          map-anisotropy={16}
          flatShading></Decal>
      </mesh>
    </Float>
  )
}
