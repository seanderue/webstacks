import { useControls } from 'leva'
import { Shape } from 'three'
import { useLaptopContext } from '../context/LaptopContext'
import { useStageLevelContext } from '../context/StageLevelContext'
import EmptyLaptopScreen from './EmptyLaptopScreen'
import RoundedSquare from './RoundedSquare'

export default function RoundedSquareGrid({ position, rotation }) {
  const [isClosed, setIsclosed] = useLaptopContext()
  const [stageLevel, setStageLevel] = useStageLevelContext()

  // Set the dimensions & color of squares
  const conditionalScale = !isClosed && stageLevel === 3 ? 1 : 0

  const workspaceSquareParams = {
    width: 4,
    height: 2.25,
    radius: 0.0,
    scale: conditionalScale,
    color: '#2a2928',
  }
  const rectangleParams = {
    color: '#363332',
    height: 0.2,
    width: 0.65,
    radius: 0.0,
    scale: conditionalScale,
  }
  const terminalSquareParams = {
    width: 4,
    height: 0.5,
    radius: 0.0,
    scale: conditionalScale,
    color: '#2a2928',
  }
  const textSquareParams = {
    width: 1,
    height: 0.0975,
    radius: 0.0975 / 2,
    rotation: [0, 0, 0],
    scale: conditionalScale,
    color: '#2a2928',
  }

  const gap = 0.1

  return (
    <group position={position} rotation={rotation}>
      {/* ---Workspace--- */}
      <RoundedSquare {...workspaceSquareParams} position={[0, -1.35, 0.05]} rotation={[0, 0, 0]} />
      {/* import statements */}
      <RoundedSquare {...textSquareParams} width={0.9} position={[0.25, 0.65, 0.05]} color={'#6d496c'} />
      <RoundedSquare {...textSquareParams} width={1} position={[0.25, 0.65 - 0.125, 0.05]} color={'#6d496c'} />
      <RoundedSquare {...textSquareParams} width={0.55} position={[0.25, 0.65 - 0.125 * 2, 0.05]} color={'#6d496c'} />
      {/* main function */}
      <RoundedSquare {...textSquareParams} width={1.25} position={[0.25, 0.65 - 0.125 * 4, 0.05]} color={'#3e60ce'} />
      {/* code thereafter */}
      <RoundedSquare {...textSquareParams} width={0.75} position={[0.25, 0.65 - 0.125 * 6, 0.05]} color={'#d8d88f'} />
      <RoundedSquare {...textSquareParams} width={0.75} position={[0.25, 0.65 - 0.125 * 7, 0.05]} color={'#d8d88f'} />
      <RoundedSquare {...textSquareParams} width={1.15} position={[0.25, 0.65 - 0.125 * 9, 0.05]} color={'#3e60ce'} />
      <RoundedSquare {...textSquareParams} width={0.4} position={[0.25, 0.65 - 0.125 * 10, 0.05]} color={'#3ea8ce'} />
      <RoundedSquare {...textSquareParams} width={0.6} position={[0.25, 0.65 - 0.125 * 11, 0.05]} color={'#3ea8ce'} />
      <RoundedSquare {...textSquareParams} width={1.75} position={[0.25, 0.65 - 0.125 * 12, 0.05]} color={'#3ea8ce'} />
      <RoundedSquare {...textSquareParams} width={1.2} position={[0.25, 0.65 - 0.125 * 13, 0.05]} color={'#3ea8ce'} />
      <RoundedSquare {...textSquareParams} width={0.9} position={[0.25, 0.65 - 0.125 * 15, 0.05]} color={'#3e60ce'} />
      {/* ---Workspace Tabs--- */}
      <RoundedSquare {...rectangleParams} position={[0, 0.9, 0]} rotation={[0, 0, 0]} />
      <RoundedSquare
        {...rectangleParams}
        position={[(rectangleParams.width + 0.025) * 1, 0.9, 0.0]}
        rotation={[0, 0, 0]}
      />
      <RoundedSquare
        {...rectangleParams}
        position={[(rectangleParams.width + 0.025) * 2, 0.9, 0.0]}
        rotation={[0, 0, 0]}
      />
      {/* Active tab */}
      <RoundedSquare
        width={1}
        height={1}
        radius={0.5}
        scale={conditionalScale * 0.075}
        position={[2.525, 0.95, 0.05]}
        rotation={[0, 0, 0]}
        color={'#ffffff'}
      />
      <RoundedSquare
        {...textSquareParams}
        width={0.35}
        radius={textSquareParams.height / 2}
        position={[2.1, 0.9375, 0.05]}
        rotation={[0, 0, 0]}
        color={'#496d5a'}
      />
      <RoundedSquare
        {...rectangleParams}
        color={'#2a2928'}
        position={[(rectangleParams.width + 0.025) * 3, 0.9, 0]}
        rotation={[0, 0, 0]}
      />
      <RoundedSquare
        {...rectangleParams}
        position={[(rectangleParams.width + 0.025) * 4, 0.9, 0]}
        rotation={[0, 0, 0]}
      />
      {/* ---Terminal Tabs--- */}
      <RoundedSquare
        {...rectangleParams}
        color={'#2a2928'}
        position={[0, 0.89 - workspaceSquareParams.height - rectangleParams.height, -0.05]}
        rotation={[0, 0, 0]}
      />
      <RoundedSquare
        {...rectangleParams}
        position={[
          (rectangleParams.width + 0.025) * 1,
          0.89 - workspaceSquareParams.height - rectangleParams.height,
          0.0,
        ]}
        rotation={[0, 0, 0]}
      />
      <RoundedSquare
        {...rectangleParams}
        position={[
          (rectangleParams.width + 0.025) * 2,
          0.89 - workspaceSquareParams.height - rectangleParams.height,
          0.0,
        ]}
        rotation={[0, 0, 0]}
      />
      <RoundedSquare
        {...rectangleParams}
        position={[
          (rectangleParams.width + 0.025) * 3,
          0.89 - workspaceSquareParams.height - rectangleParams.height,
          0.0,
        ]}
        rotation={[0, 0, 0]}
      />
      <RoundedSquare
        {...rectangleParams}
        position={[
          (rectangleParams.width + 0.025) * 4,
          0.89 - workspaceSquareParams.height - rectangleParams.height,
          0.0,
        ]}
        rotation={[0, 0, 0]}
      />
      {/* ---Terminal--- */}
      <RoundedSquare
        {...terminalSquareParams}
        position={[0, 0.89 - workspaceSquareParams.height - rectangleParams.height - terminalSquareParams.height, 0.0]}
        rotation={[0, 0, 0]}
      />
      <RoundedSquare {...textSquareParams} width={2.75} position={[0.25, 0.65 - 0.125 * 20, 0]} color={'#dadada'} />
      <RoundedSquare {...textSquareParams} width={1.5} position={[0.25, 0.65 - 0.125 * 21, 0]} color={'#dadada'} />
      {/* ---Explorer--- */}
      <RoundedSquare
        width={0.75}
        height={3.25}
        radius={0}
        scale={conditionalScale}
        position={[-0.75, -2.175, 0]}
        rotation={[0, 0, 0]}
        color={'#383636'}
      />
      <RoundedSquare {...textSquareParams} width={0.5} position={[-0.65, 0.65 - 0.125 * -1, 0.05]} color={'#747474'} />
      <RoundedSquare {...textSquareParams} width={0.55} position={[-0.65, 0.65 - 0.125 * 0, 0.05]} color={'#747474'} />
      <RoundedSquare {...textSquareParams} width={0.6} position={[-0.65, 0.65 - 0.125 * 1, 0.05]} color={'#747474'} />
      <RoundedSquare {...textSquareParams} width={0.4} position={[-0.65, 0.65 - 0.125 * 2, 0.05]} color={'#747474'} />
      <RoundedSquare {...textSquareParams} width={0.15} position={[-0.65, 0.65 - 0.125 * 3, 0.05]} color={'#d0b781'} />
      <RoundedSquare {...textSquareParams} width={0.45} position={[-0.55, 0.65 - 0.125 * 4, 0.05]} color={'#d0b781'} />
      <RoundedSquare {...textSquareParams} width={0.35} position={[-0.45, 0.65 - 0.125 * 5, 0.05]} color={'#d0b781'} />
      <RoundedSquare {...textSquareParams} width={0.3} position={[-0.35, 0.65 - 0.125 * 6, 0.05]} color={'#747474'} />
      <RoundedSquare {...textSquareParams} width={0.3} position={[-0.35, 0.65 - 0.125 * 7, 0.05]} color={'#747474'} />
      <RoundedSquare {...textSquareParams} width={0.3} position={[-0.35, 0.65 - 0.125 * 8, 0.05]} color={'#747474'} />
      <RoundedSquare {...textSquareParams} width={0.3} position={[-0.35, 0.65 - 0.125 * 9, 0.05]} color={'#747474'} />
      <RoundedSquare {...textSquareParams} width={0.35} position={[-0.55, 0.65 - 0.125 * 10, 0.05]} color={'#d0b781'} />
      <RoundedSquare {...textSquareParams} width={0.25} position={[-0.45, 0.65 - 0.125 * 11, 0.05]} color={'#747474'} />
      <RoundedSquare {...textSquareParams} width={0.35} position={[-0.45, 0.65 - 0.125 * 12, 0.05]} color={'#747474'} />
      <RoundedSquare {...textSquareParams} width={0.3} position={[-0.45, 0.65 - 0.125 * 13, 0.05]} color={'#747474'} />
      <RoundedSquare {...textSquareParams} width={0.4} position={[-0.45, 0.65 - 0.125 * 14, 0.05]} color={'#747474'} />
      <RoundedSquare {...textSquareParams} width={0.35} position={[-0.55, 0.65 - 0.125 * 15, 0.05]} color={'#d0b781'} />
      <RoundedSquare {...textSquareParams} width={0.35} position={[-0.45, 0.65 - 0.125 * 16, 0.05]} color={'#747474'} />
      <RoundedSquare {...textSquareParams} width={0.3} position={[-0.45, 0.65 - 0.125 * 17, 0.05]} color={'#747474'} />
      <RoundedSquare {...textSquareParams} width={0.25} position={[-0.45, 0.65 - 0.125 * 18, 0.05]} color={'#747474'} />
      <RoundedSquare {...textSquareParams} width={0.4} position={[-0.45, 0.65 - 0.125 * 19, 0.05]} color={'#747474'} />
      <RoundedSquare {...textSquareParams} width={0.35} position={[-0.65, 0.65 - 0.125 * 20, 0.05]} color={'#d0b781'} />
      <RoundedSquare {...textSquareParams} width={0.5} position={[-0.65, 0.65 - 0.125 * 21, 0.05]} color={'#d0b781'} />
      {/* ---Status Bar--- */}
      <RoundedSquare
        width={4.75}
        height={0.1}
        radius={0.03}
        scale={conditionalScale}
        position={[-0.95, -2.175, 0]}
        rotation={[0, 0, 0]}
        color={'#357853'}
      />
      <RoundedSquare
        width={4.75}
        height={0.1}
        radius={0}
        scale={conditionalScale}
        position={[-0.75, -2.175, 0]}
        rotation={[0, 0, 0]}
        color={'#2885f6'}
      />
    </group>
  )
}
