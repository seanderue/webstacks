/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useEffect, useRef, useState } from 'react'
import { Html, useGLTF } from '@react-three/drei'
import { animated, useSpring } from '@react-spring/three'
import { useLaptopContext } from './context/LaptopContext'
import { customPointerEvents } from '@/helpers/customPointerEvents'
import { useStageLevelContext } from './context/StageLevelContext'
import PlanLaptopScreen from './screenAnimations/PlanLaptopScreen'
import BuildLaptopScreen from './screenAnimations/BuildLaptopScreen'
import EmptyLaptopScreen from './screenAnimations/EmptyLaptopScreen'
import DesignLaptopScreen from './screenAnimations/DesignLaptopScreen'
import OptimizeLaptopScreen from './screenAnimations/OptimizeLaptopScreen'

export default function Model(props) {
  const group = useRef()
  const laptopLight = useRef()
  const { nodes, materials } = useGLTF(
    'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf',
  )

  const [isClosed, setIsClosed] = useLaptopContext()
  const [stageLevel, setStageLevel] = useStageLevelContext()
  const [lastLevel, setLastLevel] = useState(stageLevel)
  // const config = useControls({
  //   position: { value: [0, 1.5, -0.3] },
  //   rotationX: { value: -1.57 },
  //   lightPosition: { value: [-0.03, -0.2, -1.866], step: 0.1 },
  //   lightRotation: { value: [-1.3, Math.PI, 0], step: 0.1 },
  // })

  const spring = useSpring({
    rotation: isClosed ? [Math.PI, 0, 0] : [Math.PI / 2.75, 0, 0],
  })

  useEffect(() => {
    if (!isClosed && stageLevel === 0) {
      setStageLevel(1)
    }
  }, [isClosed])

  const handleClick = (e: { stopPropagation: () => void }) => {
    e.stopPropagation()
    setIsClosed((prev) => !prev)
    setLastLevel(isClosed ? 0 : stageLevel)
    setStageLevel(isClosed ? lastLevel : 0)
    console.log(!isClosed)
  }

  return (
    <group {...customPointerEvents} onClick={handleClick} ref={group} {...props} dispose={null}>
      <group position={[0, 0.52, 0]} scale={[0.1, 0.1, 0.1]}>
        {/* @ts-ignore */}
        <mesh geometry={nodes.Circle001.geometry} material={nodes.Circle001.material} />
        {/* @ts-ignore */}
        <mesh geometry={nodes.Circle001_1.geometry} material={nodes.Circle001_1.material} />
        {/* @ts-ignore */}
        <mesh geometry={nodes.Circle001_2.geometry} material={materials.HeadPhoneHole} />
        {/* @ts-ignore */}
        <mesh geometry={nodes.Circle001_3.geometry} material={nodes.Circle001_3.material} />
        {/* @ts-ignore */}
        <mesh geometry={nodes.Circle001_4.geometry} material={nodes.Circle001_4.material} />
        {/* @ts-ignore */}
        <mesh geometry={nodes.Circle001_5.geometry} material={materials.TouchbarBorder} />
        {/* @ts-ignore */}
        <mesh geometry={nodes.Circle001_6.geometry} material={materials.Keyboard} />
        <mesh
          // @ts-ignore
          geometry={nodes.KeyboardKeyHole.geometry}
          // @ts-ignore
          material={nodes.KeyboardKeyHole.material}
          position={[-11.79, -0.15, -8.3]}
          scale={5.8}
        />
        <mesh
          // @ts-ignore
          geometry={nodes.RubberFoot.geometry}
          material={materials.DarkRubber}
          position={[-11.95, -0.75, 7.86]}
          scale={5.8}
        />
        <group position={[0.01, -0.21, -10.56]} scale={5.8}>
          {/* @ts-ignore  */}
          <mesh geometry={nodes.Circle012.geometry} material={materials.HingeBlack} />
          {/* @ts-ignore  */}
          <mesh geometry={nodes.Circle012_1.geometry} material={materials.HingeMetal} />
        </group>
        <group position={[0, -0.51, 0]} scale={5.8}>
          {/* @ts-ignore  */}
          <mesh geometry={nodes.Circle006.geometry} material={nodes.Circle006.material} />
          {/* @ts-ignore  */}
          <mesh geometry={nodes.Circle006_1.geometry} material={nodes.Circle006_1.material} />
        </group>
        <group position={[-11.79, -0.15, -8.3]} scale={5.8}>
          {/* @ts-ignore  */}
          <mesh geometry={nodes.Circle.geometry} material={nodes.Circle.material} />
          {/* @ts-ignore  */}
          <mesh geometry={nodes.Circle_1.geometry} material={materials.Key} />
          {/* @ts-ignore  */}
          <mesh geometry={nodes.Circle_2.geometry} material={materials.Touchbar} />
        </group>
        {/* @ts-ignore */}
        <animated.group position={[0.01, -0.47, -10.41]} rotation={spring.rotation} scale={5.8}>
          <mesh
            // @ts-ignore
            geometry={nodes.FrontCameraRing001.geometry}
            material={materials['CameraRIngBlack.002']}
            position={[-0.15, 19.57, -16.15]}
            scale={5.8}
          />
          {/* {props.children} */}

          <rectAreaLight
            ref={laptopLight}
            width={2.5}
            height={1.65}
            intensity={35}
            color={'#7dc9ed'}
            // rotation={config.lightRotation}
            rotation={[-1.3, Math.PI, 0]}
            // position={config.lightPosition}
            // position={[-0.03, -0.2, -1.866]}
          />
          {/* <Html
            transform
            wrapperClass='htmlScreen'
            distanceFactor={1.17}
            position={[-0.03, -0.063, -1.866]}
            rotation-x={-1.57}>
            <iframe src='https://seanderue.notion.site/f4bf4268a44e4f1a8309fbc0a34d589a?v=d77e97503ac54a858cb6afe563ab695d' />
          </Html> */}
          <EmptyLaptopScreen color={isClosed ? 'black' : stageLevel === 3 ? '#3c3a3a' : 'white'} />
          <PlanLaptopScreen />
          <BuildLaptopScreen />
          <DesignLaptopScreen />
          <OptimizeLaptopScreen />
          {/* @ts-ignore */}
          <mesh geometry={nodes.Circle002.geometry} material={nodes.Circle002.material} />
          {/* @ts-ignore */}
          <mesh geometry={nodes.Circle002_1.geometry} material={materials.Screen} />
          {/* @ts-ignore */}
          <mesh geometry={nodes.Circle002_2.geometry} material={materials.ScreenGlass} />
          {/* @ts-ignore */}
          <mesh geometry={nodes.Circle002_3.geometry} material={materials.Rubber} />
          {/* @ts-ignore */}
          <mesh geometry={nodes.Circle002_4.geometry} material={materials.DisplayGlass} />
          {/* <mesh
            geometry={nodes.AppleLogo000.geometry}
            material={materials['AppleLogo.004']}
            position={[0, -0.11, -1.8]}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={[0.58, 0.58, 0.58]}
          /> */}
        </animated.group>
        <group position={[-15.03, 0.03, 0.6]} scale={5.8}>
          {/* @ts-ignore */}
          <mesh geometry={nodes.Circle009.geometry} material={nodes.Circle009.material} />
          {/* @ts-ignore */}
          <mesh geometry={nodes.Circle009_1.geometry} material={nodes.Circle009_1.material} />
        </group>
        <group position={[12.2, 0.03, 0.6]} scale={5.8}>
          {/* @ts-ignore */}
          <mesh geometry={nodes.Circle003.geometry} material={nodes.Circle003.material} />
          {/* @ts-ignore */}
          <mesh geometry={nodes.Circle003_1.geometry} material={nodes.Circle003_1.material} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf')
