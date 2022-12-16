import { Shape } from 'three'

export default function EmptyLaptopScreen() {
  // Set the dimensions of the shape
  const width = 5
  const height = 3.28

  // Set the radius of the rounded corners
  const radius = 0.1

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
    <mesh scale={1} position={[-2.5, 0, -0.2]} rotation={[-Math.PI / 2, 0, 0]}>
      <shapeGeometry attach='geometry' args={[shape]} />
      <meshBasicMaterial attach='material' color='white' />
    </mesh>
  )
}
