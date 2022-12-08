import { EffectComposer, Bloom, Noise, Vignette, DepthOfField, SSR } from '@react-three/postprocessing'
import { useControls } from 'leva'
import { BlendFunction } from 'postprocessing'

export default function Effects() {
  // const ssrProps = useControls({
  //   temporalResolve: true,
  //   STRETCH_MISSED_RAYS: true,
  //   USE_MRT: true,
  //   USE_NORMALMAP: true,
  //   USE_ROUGHNESSMAP: true,
  //   ENABLE_JITTERING: true,
  //   ENABLE_BLUR: true,
  //   temporalResolveMix: { value: 0.9, min: 0, max: 1 },
  //   temporalResolveCorrectionMix: { value: 0.25, min: 0, max: 1 },
  //   maxSamples: { value: 0, min: 0, max: 1 },
  //   resolutionScale: { value: 1, min: 0, max: 1 },
  //   blurMix: { value: 0.5, min: 0, max: 1 },
  //   blurKernelSize: { value: 8, min: 0, max: 8 },
  //   blurSharpness: { value: 0.5, min: 0, max: 1 },
  //   rayStep: { value: 0.3, min: 0, max: 1 },
  //   intensity: { value: 1, min: 0, max: 5 },
  //   maxRoughness: { value: 0.1, min: 0, max: 1 },
  //   jitter: { value: 0.7, min: 0, max: 5 },
  //   jitterSpread: { value: 0.45, min: 0, max: 1 },
  //   jitterRough: { value: 0.1, min: 0, max: 1 },
  //   roughnessFadeOut: { value: 1, min: 0, max: 1 },
  //   rayFadeOut: { value: 0, min: 0, max: 1 },
  //   MAX_STEPS: { value: 20, min: 0, max: 20 },
  //   NUM_BINARY_SEARCH_STEPS: { value: 5, min: 0, max: 10 },
  //   maxDepthDifference: { value: 3, min: 0, max: 10 },
  //   maxDepth: { value: 1, min: 0, max: 1 },
  //   thickness: { value: 10, min: 0, max: 10 },
  //   ior: { value: 1.45, min: 0, max: 2 },
  // })

  return (
    <EffectComposer>
      {/* <Bloom luminanceThreshold={0.65} intensity={0.5} levels={30.0} mipmapBlur /> */}

      {/* <Vignette offset={0.5} darkness={0.5} eskil={true} blendFunction={BlendFunction.NORMAL} /> */}
      {/* <Noise opacity={0.06} premultiply blendFunction={BlendFunction.ADD} /> */}
      {/* <DepthOfField focalLength={0.025} focusDistance={0.025} bokehScale={6} /> */}

      {/* <SSR {...ssrProps} /> */}
    </EffectComposer>
  )
}
