import { animated, useSpring } from '@react-spring/three'
import { Float } from '@react-three/drei'
import { useLaptopContext } from './context/LaptopContext'
import { useStageLevelContext } from './context/StageLevelContext'
import Backlog from './Backlog'
import VennDiagram from './VennDiagram'

export default function Experience(props) {
  const [isClosed, setIsClosed] = useLaptopContext()
  const [stageLevel, setStageLevel] = useStageLevelContext()

  const isDisplayed = !isClosed && stageLevel === 1

  const spring = useSpring({
    scale: isDisplayed ? 1 : 0,
  })

  return (
    <animated.group scale={spring.scale}>
      <Float speed={1} rotationIntensity={0.75} floatIntensity={0.75}>
        <VennDiagram
          position={[1.12, 2.57, -1.12]}
          rotation={[-0.13, -0.45, -0.12]}
          radius={0.5}
          tubeRadius={0.1}
          radialSegments={9.7}
          tubularSegments={16}
          scale={1}
        />
      </Float>
      <Backlog />
    </animated.group>
  )
}
