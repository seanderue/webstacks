import { Euler } from 'three'
import DecalBall from './DecalBall'
import { animated, useSpring } from '@react-spring/three'
import { useLaptopContext } from './context/LaptopContext'
import { useStageLevelContext } from './context/StageLevelContext'

export default function Component(props) {
  const rotations = {
    graphQL: new Euler(-0.5, -0.94, 0),
    typescript: new Euler(-5.3, -0.16, -8.06),
    aws: new Euler(0.9, -2.84, -0.06),
    netlify: new Euler(0.68, -2.99, 0.41),
    vercel: new Euler(-0.97, 0.03, 0.16),
    react: new Euler(-2.73, -1.19, 0),
    reactNative: new Euler(-3.58, -4.4, -0.35),
    next: new Euler(-0.05, -4.91, -3.96),
  }

  const [isClosed, setIsClosed] = useLaptopContext()
  const [stageLevel, setStageLevel] = useStageLevelContext()

  const AnimatedDecalBall = animated(DecalBall)

  interface springTypes {
    graphQLPosition: [x: number, y: number, z: number]
    typesciptPosition: [x: number, y: number, z: number]
    awsPosition: [x: number, y: number, z: number]
    netlifyPosition: [x: number, y: number, z: number]
    vercelPosition: [x: number, y: number, z: number]
    reactPosition: [x: number, y: number, z: number]
    reactNativePosition: [x: number, y: number, z: number]
    nextPosition: [x: number, y: number, z: number]
    largestScale: [radius: number, scale: number]
    largeScale: [radius: number, scale: number]
    midScale: [radius: number, scale: number]
    smallScale: [radius: number, scale: number]
    scale: number
    decalScale: number
    decalScaleLarge: number
  }

  const displayBalls = !isClosed && stageLevel === 3

  const spring = useSpring<springTypes>({
    graphQLPosition: displayBalls ? [-4.25, 0.55, -2] : [0, 0, 0],
    typesciptPosition: displayBalls ? [-2.29, 0.6, 0.29] : [0, 0, 0],
    awsPosition: displayBalls ? [0.5, 3.5, -3.5] : [0, 0, 0],
    netlifyPosition: displayBalls ? [1.36, 2.63, -3.5] : [0, 0, 0],
    vercelPosition: displayBalls ? [-0.69, 3.7, -3.5] : [0, 0, 0],
    reactPosition: displayBalls ? [1.25, 1.25, 0.5] : [0, 0, 0],
    reactNativePosition: displayBalls ? [2, 0.75, 0.65] : [0, 0, 0],
    nextPosition: displayBalls ? [2.25, 1.25, 0] : [0, 0, 0],
    decalScale: displayBalls ? 0.5 : 0,
    decalScaleLarge: displayBalls ? 0.75 : 0,
  })

  const scale = 1

  return (
    <>
      {/* GraphQL */}
      <AnimatedDecalBall
        // @ts-ignore
        scale={scale}
        imgPath={'./img/graphql.webp'}
        position={spring.graphQLPosition}
        rotation={rotations.graphQL}
        geoArgs={[0.5, 1]}
        color={'#92c1fa'}
        decalPosition={[0.09, -0.04, 0.04]}
        decalRotation={1.67}
        decalScale={spring.decalScaleLarge}
      />
      {/* Typescript */}
      <AnimatedDecalBall
        scale={scale}
        imgPath={'./img/typescript.webp'}
        position={spring.typesciptPosition}
        rotation={rotations.typescript}
        geoArgs={[0.4, 1]}
        color={'#92c1fa'}
        decalPosition={[-0.34, 0.1, 0.04]}
        decalScale={spring.decalScale}
        decalRotation={Math.PI / 2}
      />
      {/* AWS */}
      <AnimatedDecalBall
        scale={scale}
        imgPath={'./img/aws.webp'}
        position={spring.awsPosition}
        rotation={rotations.aws}
        geoArgs={[0.5, 1]}
        color={'#e1d0b3'}
        decalPosition={[0.06, 0.38, -0.29]}
        decalScale={spring.decalScale}
        decalRotation={0}
      />
      {/* Netlify */}
      <AnimatedDecalBall
        scale={scale}
        imgPath={'./img/netlify.webp'}
        position={spring.netlifyPosition}
        rotation={rotations.netlify}
        geoArgs={[0.4, 1]}
        color={'#7d8285'}
        decalPosition={[0.08, 0.18, -0.22]}
        decalRotation={-5.78}
        decalScale={spring.decalScale}
      />
      {/* Vercel */}
      <AnimatedDecalBall
        scale={scale}
        imgPath={'./img/vercel.webp'}
        position={spring.vercelPosition}
        rotation={rotations.vercel}
        geoArgs={[0.5, 1]}
        color={'#74808f'}
        decalPosition={[0.04, -0.33, 0.39]}
        decalScale={spring.decalScale}
        decalRotation={-6.33}
      />
      {/* React */}
      <AnimatedDecalBall
        scale={scale}
        imgPath={'./img/react.png'}
        position={spring.reactPosition}
        rotation={rotations.react}
        geoArgs={[0.55, 1]}
        color={'#92c1fa'}
        decalPosition={[-0.43, -0.42, -0.22]}
        decalScale={spring.decalScaleLarge}
        decalRotation={0}
      />
      {/* React Native */}
      <AnimatedDecalBall
        scale={scale}
        imgPath={'./img/react-native.webp'}
        position={spring.reactNativePosition}
        rotation={rotations.reactNative}
        geoArgs={[0.35, 1]}
        color={'#245a9d'}
        decalPosition={[0.29, 0.06, 0.12]}
        decalScale={spring.decalScale}
        decalRotation={-2.8}
      />
      {/* Next.JS */}
      <AnimatedDecalBall
        scale={scale}
        imgPath={'./img/next.webp'}
        position={spring.nextPosition}
        rotation={rotations.next}
        geoArgs={[0.35, 1]}
        color={'#b9cee8'}
        decalPosition={[0.2, 0.1, -0.02]}
        decalScale={spring.decalScale}
        decalRotation={-Math.PI}
      />
    </>
  )
}
