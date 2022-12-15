import { Text } from '@react-three/drei'
import dynamic from 'next/dynamic'
import { createContext, useState } from 'react'
import { LaptopProvider } from './context/LaptopContext'
import { StageLevelProvider } from './context/StageLevelContext'
import Laptop from './Laptop'
import PlanExperience from './PlanExperience'
import ProcessButtons from './ProcessButtons'
// import PlaneReflector from './PlaneReflector'
const PlaneReflector = dynamic(() => import('@/components/canvas/PlaneReflector'), { ssr: false })

// Defining experience stage context to animate accordingly
export const StageContext = createContext({
  laptopClosed: true,
  toggleLaptopClosed: () => {},
})

export default function Experience(props) {
  const [laptopClosed, setLaptopClosed] = useState(true)
  const [experienceStage, setExperienceStage] = useState(true)

  const handleLaptopClick = (e) => {
    // e.stopPropagation()
    setLaptopClosed((prev) => !prev)
    console.log('experience base state change')
  }

  return (
    <>
      <StageLevelProvider>
        <LaptopProvider>
          <ProcessButtons />
          <Laptop position={[0, 0, 0]} rotation={[0.122173, 0.296706, 0.03490659]}></Laptop>
          {/* Reflection Plane */}
          <PlaneReflector position={[0, 0, 0]} />
          <PlanExperience />
        </LaptopProvider>
      </StageLevelProvider>
    </>
  )
}
