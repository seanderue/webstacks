import { animated, useSpring } from '@react-spring/three'
import { Float } from '@react-three/drei'
import { useLaptopContext } from './context/LaptopContext'
import { useStageLevelContext } from './context/StageLevelContext'
import IndyCar from './IndyCar'
import Target from './Target'
import { useEffect, useState } from 'react'

export default function Experience(props) {
  const [isClosed, setIsClosed] = useLaptopContext()
  const [stageLevel, setStageLevel] = useStageLevelContext()
  const [speed, setSpeed] = useState(2)

  const isDisplayed = !isClosed && stageLevel === 4

  const spring = useSpring({
    scale: isDisplayed ? 1 : 0,
  })

  useEffect(() => setSpeed(2), [stageLevel])

  const handleTargetClick = (e: { stopPropagation: () => void }) => {
    e.stopPropagation()
    setSpeed((prev) => prev + 1)
  }

  return (
    <animated.group scale={spring.scale}>
      <IndyCar speed={speed} />
      <Float>
        <Target onClick={handleTargetClick} />
      </Float>
    </animated.group>
  )
}
