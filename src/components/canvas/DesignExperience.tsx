import { animated, config, useSpring } from '@react-spring/three'
import { Float } from '@react-three/drei'
import { useControls } from 'leva'
import { useLaptopContext } from './context/LaptopContext'
import { useStageLevelContext } from './context/StageLevelContext'
import PaintBrush from './PaintBrush'
import Backlog from './Backlog'
import VennDiagram from './VennDiagram'
import TechConstellation from './TechConstellation'
import { EulerOrder } from 'three'

export default function Experience(props) {
  const [isClosed, setIsClosed] = useLaptopContext()
  const [stageLevel, setStageLevel] = useStageLevelContext()

  const isDisplayed = !isClosed && stageLevel === 2

  interface brushPositionSpring {
    scale: number
    position: [x: number, y: number, z: number]
  }

  const spring = useSpring<brushPositionSpring>({
    scale: isDisplayed ? 1 : 0,
    position: isDisplayed ? [1, 2.05, 0] : [3, 5, 0],
  })

  const [{ rotation }] = useSpring(
    () => ({
      from: {
        rotation: [Math.PI / 2, -Math.PI / 1.5, 0],
      },
      to: {
        rotation: [Math.PI / 2, -Math.PI / 1.75, -Math.PI / 10],
      },
      config: config.slow,
      loop: {
        reverse: true,
      },
      // immediate: true,
    }),
    [],
  )

  return (
    // @ts-ignore
    <animated.group position={spring.position} rotation={rotation} scale={spring.scale}>
      <PaintBrush />
    </animated.group>
  )
}
