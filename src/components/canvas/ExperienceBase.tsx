// import dynamic from 'next/dynamic'
import { createContext, useState } from 'react'
import { LaptopProvider } from './context/LaptopContext'
import { StageLevelProvider } from './context/StageLevelContext'
import Laptop from './Laptop'
import PlanExperience from './PlanExperience'
import ProcessButtons from './ProcessButtons'
// import PlaneReflector from './PlaneReflector'
import { MeshReflectorMaterial } from '@react-three/drei'
import BuildExperience from './BuildExperience'
import DesignExperience from './DesignExperience'
import OptimizeExperience from './OptimizeExperience'
// const PlaneReflector = dynamic(() => import('@/components/canvas/PlaneReflector'), { ssr: false })

// Defining experience stage context to animate accordingly
export const StageContext = createContext({
  laptopClosed: true,
  toggleLaptopClosed: () => {},
})

export default function Experience(props) {
  return (
    <>
      <group position={[-0.5, 0, 0]}>
        {/* Experiences */}
        <PlanExperience />
        <DesignExperience />
        <BuildExperience />
        <OptimizeExperience />

        {/* Laptop & Buttons*/}
        <ProcessButtons />
        <Laptop position={[0, 0, 0]} rotation={[0.122173, 0.296706, 0.03490659]}></Laptop>
      </group>

      {/* Reflection Plane */}
      {/* <PlaneReflector position={[0, 0, 0]} />*/}
      <mesh scale={50} rotation={[-Math.PI / 2, 0, 0]} {...props}>
        <planeGeometry />
        {/* <MeshReflectorMaterial {...config} /> */}
        <MeshReflectorMaterial
          blur={[300, 100]}
          resolution={2048}
          mixBlur={1}
          mixStrength={3}
          roughness={1}
          depthScale={1.2}
          minDepthThreshold={0.09}
          maxDepthThreshold={1.4}
          color='#181c2a'
          metalness={1}
          mirror={0}
        />
      </mesh>
    </>
  )
}
