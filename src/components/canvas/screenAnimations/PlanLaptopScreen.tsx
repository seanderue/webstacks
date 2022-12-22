import { useControls } from 'leva'
import { Shape } from 'three'
import EmptyLaptopScreen from './EmptyLaptopScreen'
// import RoundedSquare from './RoundedSquare'
import RoundedSquareGrid from './RoundedSquareGrid'
import VennDiagram from '../VennDiagram'

export default function PlanLaptopScreen() {
  // const config = useControls({
  //   rotation: { value: [-Math.PI / 2, 0, 0], step: 0.1 },
  //   position: { value: [-2.5, 0.06, -0.2], step: 0.01 },
  //   width: { value: 5, step: 0.01 },
  //   height: { value: 3.28, step: 0.01 },
  //   radius: { value: 0.1, step: 0.01 },
  //   scale: { value: 1, step: 0.01 },
  // })

  return (
    <>
      <RoundedSquareGrid position={[-1.56, 0.05, -2.38]} rotation={[-Math.PI / 2, 0, 0]} />
    </>
  )
}
