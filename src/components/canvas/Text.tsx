import { Center, Text3D, useFBO } from '@react-three/drei'
import { useFrame, useLoader } from '@react-three/fiber'
import { useRef } from 'react'
import { Group } from 'three'
import { RGBELoader } from 'three-stdlib'
import Grid from './Grid'
import { MeshRefractionMaterial } from './shaders/MeshRefractionMaterial'
import { useControls } from 'leva'

export default function Text({ children, font = '/Inter_Medium_Regular.json', ...props }) {
  const ref = useRef<Group>()
  const fbo = useFBO(1024)
  const texture = useLoader(
    RGBELoader,
    'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/aerodynamics_workshop_1k.hdr',
  )
  const config = useControls('Options', {
    text: '[ ]',
    clearcoat: { value: 1, min: 0.1, max: 1 },
    clearcoatRoughness: { value: 0.25, min: 0, max: 1 },
    uRefractPower: { value: 0.35, min: 0, max: 5 },
    uTransparent: { value: 0.25, min: 0, max: 5 },
    uIntensity: { value: 1.3, min: 0.0, max: 5.0 },
    uNoise: { value: 0.03, min: 0, max: 1, step: 0.01 },
    uSat: { value: 1.0, min: 1, max: 1.25, step: 0.01 },
    letterSpacing: { value: -0.03, min: -1, max: 5 },
    uColor: '#421fef',
    gColor: '#7a88ff',
    shadow: '#544480',
    autoRotate: false,
  })
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
  })

  return (
    <>
      <group ref={ref}>
        <Center scale={[0.8, 1, 1]} front top {...props}>
          <Text3D
            castShadow
            bevelEnabled
            font={font}
            scale={5}
            letterSpacing={config.letterSpacing}
            height={0.1}
            bevelSize={0.01}
            bevelSegments={10}
            curveSegments={128}
            bevelThickness={0.01}>
            {children}
            {/** Pass the rendered buffer into the refraction shader */}
            <MeshRefractionMaterial uSceneTex={fbo.texture} {...config} />
          </Text3D>
        </Center>
        <Grid />
      </group>
      {/** Double up the text as a flat layer at the bottom for more interesting refraction */}
      <Center scale={[0.8, 1, 1]} front top {...props}>
        <Text3D font={font} scale={5} letterSpacing={config.letterSpacing} height={0.01} curveSegments={32}>
          {children}
          <meshBasicMaterial color={config.gColor} />
        </Text3D>
      </Center>
    </>
  )
}
