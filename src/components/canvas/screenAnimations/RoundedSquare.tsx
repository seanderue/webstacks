import { useControls } from 'leva'
import { ExtrudeGeometry, Shape } from 'three'

export default function RoundedSquare({
  width,
  height,
  radius,
  scale,
  position,
  rotation,
  color,
  ...props
}): JSX.Element {
  // {"width":0.7}
  // {"height":0.7}
  // radius:0.3
  // scale: 1
  // {"position":[-2.03,0.03,-2.23]}
  // {"rotation":[-1.57,0,0]}

  // Create a new Shape
  const shape = new Shape()

  // Add a rounded rectangle to the shape
  shape.moveTo(0, radius)
  shape.lineTo(0, height - radius)
  shape.quadraticCurveTo(0, height, radius, height)
  shape.lineTo(width - radius, height)
  shape.quadraticCurveTo(width, height, width, height - radius)
  shape.lineTo(width, radius)
  shape.quadraticCurveTo(width, 0, width - radius, 0)
  shape.lineTo(radius, 0)
  shape.quadraticCurveTo(0, 0, 0, radius)

  const extrudeSettings = {
    steps: 2, // ui: steps
    depth: 2, // ui: depth
    bevelEnabled: true, // ui: bevelEnabled
    bevelThickness: 1, // ui: bevelThickness
    bevelSize: 1, // ui: bevelSize
    bevelSegments: 2, // ui: bevelSegments
  }

  return (
    <mesh scale={scale} position={position} rotation={rotation}>
      <shapeGeometry attach='geometry' args={[shape]} />
      <meshBasicMaterial attach='material' color={color} />
    </mesh>
  )
}
