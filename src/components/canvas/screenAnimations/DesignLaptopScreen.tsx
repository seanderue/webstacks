import { useControls } from 'leva'
import { Shape } from 'three'
import EmptyLaptopScreen from './EmptyLaptopScreen'
// import RoundedSquare from './RoundedSquare'
import RoundedSquareGrid from './RoundedSquareGrid'
import VennDiagram from '../VennDiagram'
import VisualStudio from './VisualStudio'
import Figma from './Figma'

export default function DesignLaptopScreen() {
  return (
    <>
      <Figma position={[-1.56, 0.05, -2.38]} rotation={[-Math.PI / 2, 0, 0]} />
    </>
  )
}
