import { Text } from '@react-three/drei'
import RoundedSquareExtruded from './RoundedSquareExtruded'
import { animated } from '@react-spring/three'

export default function Backlog() {
  // Set the dimensions & color of squares
  const bigSquareParams = {
    width: 1.5,
    height: 1.5,
    radius: 0.01,
    scale: 1,
    color: 'gray',
  }

  const smallSquareParams = {
    width: 1.5 / 6,
    height: 1.5 / 6,
    radius: 0.01,
    scale: 1,
    color: '#61ebeb',
  }

  const bigExtrudeSettings = {
    steps: 1, // ui: steps
    depth: 0.11, // ui: depth
    bevelEnabled: true, // ui: bevelEnabled
    bevelThickness: 0.02, // ui: bevelThickness
    bevelSize: 0.09, // ui: bevelSize
    bevelSegments: 2, // ui: bevelSegments
  }
  const smallExtrudeSettings = {
    steps: 1, // ui: steps
    depth: 0.055, // ui: depth
    bevelEnabled: true, // ui: bevelEnabled
    bevelThickness: 0.02, // ui: bevelThickness
    bevelSize: 0.09, // ui: bevelSize
    bevelSegments: 2, // ui: bevelSegments
  }

  const gap = 0.1
  const verticalGap = 0.5

  const AnimatedText = animated(Text)

  return (
    <group scale={0.75} position={[-3.25, 0.56, 0.55]} rotation={[-Math.PI / 2, 0, 0]}>
      <AnimatedText
        scale={1}
        strokeOpacity={0}
        font={'./fonts/woff/hinted-AvertaStd-Semibold.woff'}
        color={'white'}
        fontSize={0.5}
        characters='Backlog'
        anchorX={'center'}
        anchorY={'middle'}
        position={[0, 0.8, 1.5]}
        rotation={[Math.PI / 2, Math.PI / 2, 0]}>
        Backlog
      </AnimatedText>
      {/* Bottom Row Items */}
      <group>
        <RoundedSquareExtruded
          extrudeSettings={smallExtrudeSettings}
          {...smallSquareParams}
          position={[0, 0, verticalGap * 0.5 * 0.75]}
          rotation={[0, 0, 0]}
        />
        <RoundedSquareExtruded
          extrudeSettings={smallExtrudeSettings}
          {...smallSquareParams}
          position={[0, smallSquareParams.width + gap * 3, verticalGap * 0.5 * 0.75]}
          rotation={[0, 0, 0]}
          color={'#55a289'}
        />
        <RoundedSquareExtruded
          extrudeSettings={smallExtrudeSettings}
          {...smallSquareParams}
          position={[smallSquareParams.width + gap * 3, smallSquareParams.width + gap * 3, verticalGap * 0.5 * 0.75]}
          rotation={[0, 0, 0]}
          color={'#319bbb'}
        />
        <RoundedSquareExtruded
          extrudeSettings={smallExtrudeSettings}
          {...smallSquareParams}
          position={[
            (smallSquareParams.width + gap * 3) * 2,
            (smallSquareParams.width + gap * 3) * 2,
            verticalGap * 0.5 * 0.75,
          ]}
          rotation={[0, 0, 0]}
          color={'#6275c3'}
        />
        <RoundedSquareExtruded
          extrudeSettings={smallExtrudeSettings}
          {...smallSquareParams}
          position={[(smallSquareParams.width + gap * 3) * 2, 0, verticalGap * 0.5 * 0.75]}
          rotation={[0, 0, 0]}
          color={'#223eac'}
        />
      </group>
      {/* Middle Row Items */}
      <group>
        <RoundedSquareExtruded
          extrudeSettings={smallExtrudeSettings}
          {...smallSquareParams}
          position={[smallSquareParams.width + gap * 8.5, smallSquareParams.width + gap * 3, verticalGap * 0.5 * 2.75]}
          rotation={[0, 0, 0]}
          color={'#223eac'}
        />
        <RoundedSquareExtruded
          extrudeSettings={smallExtrudeSettings}
          {...smallSquareParams}
          position={[0, smallSquareParams.width + gap * 8.5, verticalGap * 0.5 * 2.75]}
          rotation={[0, 0, 0]}
        />
        <RoundedSquareExtruded
          extrudeSettings={smallExtrudeSettings}
          {...smallSquareParams}
          position={[smallSquareParams.width + gap * 3, smallSquareParams.width + gap * 8.5, verticalGap * 0.5 * 2.75]}
          rotation={[0, 0, 0]}
          color={'#55a289'}
        />
        <RoundedSquareExtruded
          extrudeSettings={smallExtrudeSettings}
          {...smallSquareParams}
          position={[0, 0, verticalGap * 0.5 * 2.75]}
          rotation={[0, 0, 0]}
        />
        <RoundedSquareExtruded
          extrudeSettings={smallExtrudeSettings}
          {...smallSquareParams}
          position={[smallSquareParams.width + gap * 3, smallSquareParams.width + gap * 3, verticalGap * 0.5 * 2.75]}
          rotation={[0, 0, 0]}
          color={'#6275c3'}
        />
        <RoundedSquareExtruded
          extrudeSettings={smallExtrudeSettings}
          {...smallSquareParams}
          position={[
            (smallSquareParams.width + gap * 3) * 2,
            (smallSquareParams.width + gap * 3) * 2,
            verticalGap * 0.5 * 2.75,
          ]}
          rotation={[0, 0, 0]}
          color={'#319bbb'}
        />
        <RoundedSquareExtruded
          extrudeSettings={smallExtrudeSettings}
          {...smallSquareParams}
          position={[(smallSquareParams.width + gap * 3) * 2, 0, verticalGap * 0.5 * 2.75]}
          rotation={[0, 0, 0]}
          color={'#319bbb'}
        />
      </group>
      {/* Top Row Items */}
      <group>
        <RoundedSquareExtruded
          extrudeSettings={smallExtrudeSettings}
          {...smallSquareParams}
          position={[smallSquareParams.width + gap * 8.5, smallSquareParams.width + gap * 3, verticalGap * 0.5 * 4.75]}
          rotation={[0, 0, 0]}
          color={'#319bbb'}
        />
        <RoundedSquareExtruded
          extrudeSettings={smallExtrudeSettings}
          {...smallSquareParams}
          position={[smallSquareParams.width + gap * 3, smallSquareParams.width + gap * 3, verticalGap * 0.5 * 4.75]}
          rotation={[0, 0, 0]}
        />
        <RoundedSquareExtruded
          extrudeSettings={smallExtrudeSettings}
          {...smallSquareParams}
          position={[
            (smallSquareParams.width + gap * 3) * 2,
            (smallSquareParams.width + gap * 3) * 2,
            verticalGap * 0.5 * 4.75,
          ]}
          rotation={[0, 0, 0]}
          color={'#223eac'}
        />
        <RoundedSquareExtruded
          extrudeSettings={smallExtrudeSettings}
          {...smallSquareParams}
          position={[(smallSquareParams.width + gap * 3) * 2, 0, verticalGap * 0.5 * 4.75]}
          rotation={[0, 0, 0]}
          color={'#6275c3'}
        />
      </group>

      {/* Row 1 w/ 1 col  */}
      <RoundedSquareExtruded
        extrudeSettings={bigExtrudeSettings}
        {...bigSquareParams}
        position={[0, 0, verticalGap * 0]}
        rotation={[0, 0, 0]}
      />
      {/* Row 2 w/ 1 col  */}
      <RoundedSquareExtruded
        extrudeSettings={bigExtrudeSettings}
        {...bigSquareParams}
        position={[0, 0, verticalGap * 1]}
        rotation={[0, 0, 0]}
      />
      {/* row 3 w/ 1 col */}
      <RoundedSquareExtruded
        extrudeSettings={bigExtrudeSettings}
        {...bigSquareParams}
        position={[0, 0, verticalGap * 2]}
        rotation={[0, 0, 0]}
      />
    </group>
  )
}
