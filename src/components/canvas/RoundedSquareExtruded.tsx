import { Shape } from 'three'

export default function RoundedSquare({
  width,
  height,
  radius,
  scale,
  position,
  rotation,
  color,
  extrudeSettings,
}): JSX.Element {
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

  return (
    <mesh scale={scale} position={position} rotation={rotation}>
      <extrudeGeometry attach='geometry' args={[shape, extrudeSettings]} />
      <meshStandardMaterial attach='material' color={color} />
    </mesh>
  )
}
