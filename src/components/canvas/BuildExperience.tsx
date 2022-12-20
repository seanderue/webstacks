import { animated, useSpring } from '@react-spring/three'
import { Float } from '@react-three/drei'
import { useControls } from 'leva'
import { useLaptopContext } from './context/LaptopContext'
import { useStageLevelContext } from './context/StageLevelContext'
import Backlog from './Backlog'
import VennDiagram from './VennDiagram'
import TechConstellation from './TechConstellation'

export default function Experience(props) {
  const [isClosed, setIsClosed] = useLaptopContext()
  const [stageLevel, setStageLevel] = useStageLevelContext()

  const isDisplayed = !isClosed && stageLevel === 3

  const spring = useSpring({
    scale: isDisplayed ? 1 : 0,
  })

  return (
    <animated.group scale={spring.scale}>
      <TechConstellation />
    </animated.group>
  )
}
