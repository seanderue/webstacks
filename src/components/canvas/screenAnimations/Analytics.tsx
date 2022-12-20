import { useControls } from 'leva'
import { Shape } from 'three'
import { useLaptopContext } from '../context/LaptopContext'
import { useStageLevelContext } from '../context/StageLevelContext'
import RoundedSquare from './RoundedSquare'

export default function RoundedSquareGrid({ position, rotation }) {
  //   const { position, rotation } = useControls({
  //     position: { value: [-2.03, 0.04, -2.23], step: 0.01 },
  //     rotation: { value: [-Math.PI / 2, 0, 0], step: 0.01 },
  //   })

  const [isClosed, setIsclosed] = useLaptopContext()
  const [stageLevel, setStageLevel] = useStageLevelContext()

  const isDisplayed = !isClosed && stageLevel === 4 ? 1 : 0

  // Set the dimensions & color of squares
  const squareParams = {
    width: 4,
    height: 3,
    radius: 0.03,
    scale: isDisplayed,
    color: '#b1bfde',
  }
  const rectangleParams = {
    color: '#245ce0',
    height: 0.65,
    width: 0.4,
    radius: 0.0,
    scale: isDisplayed,
    rotation: [0, 0, 0],
  }

  const GAP = 0.45

  const BLUE = '#245ce0'
  const TEAL = '#319bbb'
  const VIOLET = '#6275c3'

  const COL_1_BLUE_HEIGHT = 0.35
  const COL_1_TEAL_HEIGHT = 0.3
  const COL_1_VIOLET_HEIGHT = 0.25

  const COL_2_BLUE_HEIGHT = 0.35
  const COL_2_TEAL_HEIGHT = 0.15
  const COL_2_VIOLET_HEIGHT = 0.45

  const COL_3_BLUE_HEIGHT = 0.55
  const COL_3_TEAL_HEIGHT = 0.35
  const COL_3_VIOLET_HEIGHT = 0.47

  const COL_4_BLUE_HEIGHT = 0.85
  const COL_4_TEAL_HEIGHT = 0.24
  const COL_4_VIOLET_HEIGHT = 0.25

  const COL_5_BLUE_HEIGHT = 0.8
  const COL_5_TEAL_HEIGHT = 0.3
  const COL_5_VIOLET_HEIGHT = 0.34

  const COL_6_BLUE_HEIGHT = 1
  const COL_6_TEAL_HEIGHT = 0.5
  const COL_6_VIOLET_HEIGHT = 0.6

  const COL_7_BLUE_HEIGHT = 1.2
  const COL_7_TEAL_HEIGHT = 0.35
  const COL_7_VIOLET_HEIGHT = 0.9

  const BASELINE = -1.6

  return (
    <group position={position} rotation={rotation}>
      {/* Backdrop */}
      {/* <RoundedSquare {...squareParams} position={[-0.45, -2.025, 0]} rotation={[0, 0, 0]} /> */}
      {/* Col 1 */}
      {/* DarkBlue */}
      <RoundedSquare
        {...rectangleParams}
        color={BLUE}
        height={COL_1_BLUE_HEIGHT}
        position={[GAP * 0, BASELINE, 0.04]}
      />
      {/* Teal */}
      <RoundedSquare
        {...rectangleParams}
        color={TEAL}
        height={COL_1_TEAL_HEIGHT}
        position={[GAP * 0, BASELINE + COL_1_BLUE_HEIGHT + COL_1_VIOLET_HEIGHT, 0.04]}
      />
      {/* Violet */}
      <RoundedSquare
        {...rectangleParams}
        color={VIOLET}
        height={COL_1_VIOLET_HEIGHT}
        position={[GAP * 0, BASELINE + COL_1_BLUE_HEIGHT, 0.04]}
      />
      {/* Col 2 */}
      <RoundedSquare
        {...rectangleParams}
        color={BLUE}
        height={COL_2_BLUE_HEIGHT}
        position={[GAP * 1, BASELINE, 0.04]}
      />
      {/* Teal */}
      <RoundedSquare
        {...rectangleParams}
        color={TEAL}
        height={COL_2_TEAL_HEIGHT}
        position={[GAP * 1, BASELINE + COL_2_BLUE_HEIGHT + COL_2_VIOLET_HEIGHT, 0.04]}
      />
      {/* Violet */}
      <RoundedSquare
        {...rectangleParams}
        color={VIOLET}
        height={COL_2_VIOLET_HEIGHT}
        position={[GAP * 1, BASELINE + COL_2_BLUE_HEIGHT, 0.04]}
      />
      {/* col 3 w/ 3 rows */}
      <RoundedSquare
        {...rectangleParams}
        color={BLUE}
        height={COL_3_BLUE_HEIGHT}
        position={[GAP * 2, BASELINE, 0.04]}
      />
      {/* Teal */}
      <RoundedSquare
        {...rectangleParams}
        color={TEAL}
        height={COL_3_TEAL_HEIGHT}
        position={[GAP * 2, BASELINE + COL_3_BLUE_HEIGHT + COL_3_VIOLET_HEIGHT, 0.04]}
      />
      {/* Violet */}
      <RoundedSquare
        {...rectangleParams}
        color={VIOLET}
        height={COL_3_VIOLET_HEIGHT}
        position={[GAP * 2, BASELINE + COL_3_BLUE_HEIGHT, 0.04]}
      />
      {/* COL 4 */}
      <RoundedSquare
        {...rectangleParams}
        color={BLUE}
        height={COL_4_BLUE_HEIGHT}
        position={[GAP * 3, BASELINE, 0.04]}
      />
      {/* Teal */}
      <RoundedSquare
        {...rectangleParams}
        color={TEAL}
        height={COL_4_TEAL_HEIGHT}
        position={[GAP * 3, BASELINE + COL_4_BLUE_HEIGHT + COL_4_VIOLET_HEIGHT, 0.04]}
      />
      {/* Violet */}
      <RoundedSquare
        {...rectangleParams}
        color={VIOLET}
        height={COL_4_VIOLET_HEIGHT}
        position={[GAP * 3, BASELINE + COL_4_BLUE_HEIGHT, 0.04]}
      />
      {/* COL 5 */}
      <RoundedSquare
        {...rectangleParams}
        color={BLUE}
        height={COL_5_BLUE_HEIGHT}
        position={[GAP * 4, BASELINE, 0.04]}
      />
      {/* Teal */}
      <RoundedSquare
        {...rectangleParams}
        color={TEAL}
        height={COL_5_TEAL_HEIGHT}
        position={[GAP * 4, BASELINE + COL_5_BLUE_HEIGHT + COL_5_VIOLET_HEIGHT, 0.04]}
      />
      {/* Violet */}
      <RoundedSquare
        {...rectangleParams}
        color={VIOLET}
        height={COL_5_VIOLET_HEIGHT}
        position={[GAP * 4, BASELINE + COL_5_BLUE_HEIGHT, 0.04]}
      />
      {/* COL 6 */}
      <RoundedSquare
        {...rectangleParams}
        color={BLUE}
        height={COL_6_BLUE_HEIGHT}
        position={[GAP * 5, BASELINE, 0.04]}
      />
      {/* Teal */}
      <RoundedSquare
        {...rectangleParams}
        color={TEAL}
        height={COL_6_TEAL_HEIGHT}
        position={[GAP * 5, BASELINE + COL_6_BLUE_HEIGHT + COL_6_VIOLET_HEIGHT, 0.04]}
      />
      {/* Violet */}
      <RoundedSquare
        {...rectangleParams}
        color={VIOLET}
        height={COL_6_VIOLET_HEIGHT}
        position={[GAP * 5, BASELINE + COL_6_BLUE_HEIGHT, 0.04]}
      />
      {/* COL 7 */}
      <RoundedSquare
        {...rectangleParams}
        color={BLUE}
        height={COL_7_BLUE_HEIGHT}
        position={[GAP * 6, BASELINE, 0.04]}
      />
      {/* Teal */}
      <RoundedSquare
        {...rectangleParams}
        color={TEAL}
        height={COL_7_TEAL_HEIGHT}
        position={[GAP * 6, BASELINE + COL_7_BLUE_HEIGHT + COL_7_VIOLET_HEIGHT, 0.04]}
      />
      {/* Violet */}
      <RoundedSquare
        {...rectangleParams}
        color={VIOLET}
        height={COL_7_VIOLET_HEIGHT}
        position={[GAP * 6, BASELINE + COL_7_BLUE_HEIGHT, 0.04]}
      />
      {/* LEGEND */}
      <RoundedSquare
        height={0.2}
        width={0.2}
        scale={isDisplayed}
        radius={0.1}
        color={BLUE}
        position={[0, -1.95, 0.04]}
        rotation={[0, 0, 0]}
      />
      <RoundedSquare
        height={0.1}
        width={0.26}
        scale={isDisplayed}
        radius={0.05}
        color={'#83a1bb'}
        position={[0.25, -1.9, 0.04]}
        rotation={[0, 0, 0]}
      />

      <RoundedSquare
        height={0.2}
        width={0.2}
        scale={isDisplayed}
        radius={0.1}
        color={VIOLET}
        position={[0.75, -1.95, 0.04]}
        rotation={[0, 0, 0]}
      />
      <RoundedSquare
        height={0.1}
        width={0.4}
        scale={isDisplayed}
        radius={0.05}
        color={'#83a1bb'}
        position={[1.0, -1.9, 0.04]}
        rotation={[0, 0, 0]}
      />

      <RoundedSquare
        height={0.2}
        width={0.2}
        scale={isDisplayed}
        radius={0.1}
        color={TEAL}
        position={[1.6, -1.95, 0.04]}
        rotation={[0, 0, 0]}
      />
      <RoundedSquare
        height={0.1}
        width={0.5}
        scale={isDisplayed}
        radius={0.05}
        color={'#83a1bb'}
        position={[1.85, -1.9, 0.04]}
        rotation={[0, 0, 0]}
      />
    </group>
  )
}
