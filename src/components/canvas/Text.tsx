import { Center, Float, Text3D, useFBO } from '@react-three/drei'
import { useFrame, useLoader, useThree } from '@react-three/fiber'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { RGBELoader } from 'three-stdlib'
import { MeshRefractionMaterial } from './shaders/MeshRefractionMaterial'
import { useControls } from 'leva'

export default function Text({ children, font = '/Inter_Medium_Regular.json', ...props }) {
  const ref = useRef<THREE.Group>()
  const fbo = useFBO(1024)

  const texture = useLoader(
    RGBELoader,
    'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/aerodynamics_workshop_1k.hdr',
  )
  // const config = useControls('Options', {
  //   text: '[ ]',
  //   clearcoat: { value: 1, min: 0.1, max: 1 },
  //   clearcoatRoughness: { value: 0.25, min: 0, max: 1 },
  //   uRefractPower: { value: 0.35, min: 0, max: 5 },
  //   uTransparent: { value: 0.25, min: 0, max: 5 },
  //   uIntensity: { value: 1.3, min: 0.0, max: 5.0 },
  //   uNoise: { value: 0.03, min: 0, max: 1, step: 0.01 },
  //   uSat: { value: 1.0, min: 1, max: 1.25, step: 0.01 },
  //   letterSpacing: { value: -0.03, min: -1, max: 5 },
  //   uColor: '#421fef',
  //   gColor: '#7a88ff',
  //   shadow: '#544480',
  //   autoRotate: false,
  // })
  let oldBg
  useFrame((state) => {
    // Hide the outer groups contents
    ref.current.visible = false
    // Set render target to the local buffer
    state.gl.setRenderTarget(fbo)
    // Save the current background and set the HDR as the new BG

    // This is what creates the reflections
    oldBg = state.scene.background
    state.scene.background = texture

    // Render into the buffer
    state.gl.render(state.scene, state.camera)
    // Set old state back
    state.scene.background = oldBg
    state.gl.setRenderTarget(null)
    ref.current.visible = true

    // Floating animation
    // const t = state.clock.getElapsedTime()
    // ref.current.rotation.z = -0.2 - (1 + Math.sin(t / 1.5)) / 20
    // ref.current.rotation.x = Math.cos(t / 4) / 8
    // ref.current.rotation.y = Math.sin(t / 4) / 8
    // ref.current.position.y = (1 + Math.sin(t / 1.5)) / 10
  })

  return (
    <>
      <group ref={ref}>
        <Center scale={[0.8, 1, 1]} front right top {...props}>
          <Text3D
            castShadow
            // Can test if receive is needed
            receiveShadow
            bevelEnabled
            font={font}
            scale={5}
            // letterSpacing={config.letterSpacing}
            letterSpacing={0}
            height={0.1}
            bevelSize={0.01}
            bevelSegments={25}
            curveSegments={8}
            bevelThickness={0.01}>
            {children}
            {/** Pass the rendered buffer into the refraction shader */}
            {/* <MeshRefractionMaterial uSceneTex={fbo.texture} {...config} /> */}
            {/* <MeshRefractionMaterial
              uSceneTex={fbo.texture}
              clearcoat={1}
              clearcoatRoughness={0.34}
              uRefractPower={0.23}
              uTransparent={1.25}
              uIntensity={1.3}
              uNoise={0.01}
              uSat={1.0}
              uColor={'#19579d'}
              gColor={'#7dd3ff'}
            /> */}
            <meshStandardMaterial color='blue' />
          </Text3D>
          {/** Double up the text as a flat layer at the bottom for more interesting refraction */}
          <Center scale={[0.8, 1, 1]} front right top {...props}></Center>
          <Text3D font={font} scale={5} letterSpacing={0} height={0.01} curveSegments={32}>
            {children}
            <meshBasicMaterial color={'#7dd3ff'} />
          </Text3D>
        </Center>
      </group>
    </>
  )
}
