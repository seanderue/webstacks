export default function Component() {
  return
}
// type Position = SpringValue<[x: number, y: number, z: number]>

// function AnimatedBox({ position }: { position: [number, number, number] }) {
//   const spring: Position = useSpring({
//     to: async (next, cancel) => {
//       await next({ y: position[1] + 2 })
//       await new Promise((resolve) => setTimeout(resolve, 1000))
//       await next({ y: position[1] + 4 })
//       await new Promise((resolve) => setTimeout(resolve, 1000))
//       cancel()
//     },
//     from: { y: position[1] },
//   })

//   return (
//     <animated.mesh position={[0, spring, 0]}>
//       <boxGeometry attach='geometry' args={[1, 1, 0.25]} />
//       <meshBasicMaterial attach='material' color='#00ff00' />
//     </animated.mesh>
//   )
// }

// function Grid() {
//   const boxes = []

//   for (let i = 0; i < 10; i++) {
//     for (let j = 0; j < 10; j++) {
//       boxes.push(<AnimatedBox position={[i, 0, j]} key={`box-${i}-${j}`} />)
//     }
//   }

//   return <group>{boxes}</group>
