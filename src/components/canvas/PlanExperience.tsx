import { animated, useSpring } from '@react-spring/three'
import { Float } from '@react-three/drei'
import { useControls } from 'leva'
import { useLaptopContext } from './context/LaptopContext'
import { useStageLevelContext } from './context/StageLevelContext'
import Backlog from './Backlog'
import VennDiagram from './VennDiagram'
import TechConstellation from './TechConstellation'

export default function Experience(props) {
  const config = useControls({
    rotation: { value: [-0.6, 2, 0], step: 0.1 },
    position: { value: [-4, -1, 0], step: 0.1 },
  })

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
          // position={config.position}
          // rotation={config.rotation}
          radius={0.5}
          tubeRadius={0.1}
          radialSegments={9.7}
          tubularSegments={16}
          scale={1}
        />
      </Float>
      <Backlog position={[0, 0, 0]} rotation={[0, 0, 0]} />
    </animated.group>
  )
}
