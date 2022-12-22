import { useLaptopContext } from '../context/LaptopContext'
import { useStageLevelContext } from '../context/StageLevelContext'
import RoundedSquare from './RoundedSquare'

export default function RoundedSquareGrid({ position, rotation }) {
  const [isClosed, setIsclosed] = useLaptopContext()
  const [stageLevel, setStageLevel] = useStageLevelContext()

  // Set the dimensions & color of squares
  const conditionalScale = !isClosed && stageLevel === 2 ? 1 : 0

  const workspaceSquareParams = {
    width: 3.15,
    height: 3.1,
    radius: 0.0,
    scale: conditionalScale,
    color: '#dcdbd7',
  }
  const rectangleParams = {
    color: '#363332',
    height: 0.2,
    width: 0.65,
    radius: 0.0,
    scale: conditionalScale,
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
      <RoundedSquare {...workspaceSquareParams} position={[0, -2.19, -0.045]} rotation={[0, 0, 0]} />
      {/* navbar */}
      <RoundedSquare
        {...rectangleParams}
        height={1.5}
        width={2.51}
        color='#0c2b51'
        position={[0.3, -0.9, -0.03]}
        rotation={[0, 0, 0]}
      />
      <RoundedSquare
        {...rectangleParams}
        height={0.1}
        width={0.1}
        radius={0.05}
        color='#fff'
        position={[-0.9, 0.95, -0.015]}
        rotation={[0, 0, 0]}
      />
      <RoundedSquare
        {...rectangleParams}
        height={0.2}
        width={0.2}
        radius={0.0}
        color='#2885f6'
        position={[-0.7, 0.9, -0.015]}
        rotation={[0, 0, 0]}
      />
      <RoundedSquare
        {...rectangleParams}
        height={0.1}
        width={0.1}
        radius={0.05}
        color='#fff'
        position={[-0.65, 0.95, -0.015]}
        rotation={[0, 0, 0]}
      />
      <RoundedSquare
        {...rectangleParams}
        height={0.1}
        width={0.1}
        radius={0.05}
        color='#fff'
        position={[-0.425, 0.95, -0.015]}
        rotation={[0, 0, 0]}
      />
      <RoundedSquare
        {...rectangleParams}
        height={0.1}
        width={0.1}
        radius={0.05}
        color='#fff'
        position={[-0.2, 0.95, -0.015]}
        rotation={[0, 0, 0]}
      />
      <RoundedSquare
        {...rectangleParams}
        height={0.1}
        width={0.1}
        radius={0.05}
        color='#fff'
        position={[0.025, 0.95, -0.015]}
        rotation={[0, 0, 0]}
      />
      <RoundedSquare
        {...rectangleParams}
        height={0.15}
        width={2.51}
        color='#fff'
        position={[0.3, 0.6, -0.03]}
        rotation={[0, 0, 0]}
      />
      {/* hero */}
      <RoundedSquare
        {...textSquareParams}
        width={1.25}
        height={0.3}
        radius={0.15}
        color='#f8f8f8'
        position={[0.4, 0.0, -0.015]}
        rotation={[0, 0, 0]}
      />
      <RoundedSquare
        {...textSquareParams}
        width={1}
        height={0.1}
        radius={0.05}
        color='#f8f8f8'
        position={[0.525, -0.225, -0.015]}
        rotation={[0, 0, 0]}
      />
      <RoundedSquare
        {...rectangleParams}
        width={0.95}
        height={0.95}
        radius={0.05}
        color='#59676f'
        position={[1.75, -0.55, -0.015]}
        rotation={[0, 0, 0]}
      />
      <RoundedSquare
        {...rectangleParams}
        width={0.6}
        height={0.2}
        radius={0.01}
        color='#2885f6'
        position={[0.725, -0.55, -0.015]}
        rotation={[0, 0, 0]}
      />
      {/* underfold */}
      <RoundedSquare
        {...rectangleParams}
        height={1.25}
        width={2.51}
        color='#091e4e'
        position={[0.3, -2.15, -0.03]}
        rotation={[0, 0, 0]}
      />
      <RoundedSquare
        {...rectangleParams}
        width={0.5}
        height={0.5}
        radius={0.05}
        color='#59676f'
        position={[0.55, -1.55, -0.015]}
        rotation={[0, 0, 0]}
      />
      <RoundedSquare
        {...textSquareParams}
        width={0.4}
        radius={0.05}
        color='#ffffff'
        position={[0.6, -1.75, -0.015]}
        rotation={[0, 0, 0]}
      />
      <RoundedSquare
        {...rectangleParams}
        width={0.5}
        height={0.5}
        radius={0.05}
        color='#59676f'
        position={[1.3, -1.55, -0.015]}
        rotation={[0, 0, 0]}
      />
      <RoundedSquare
        {...textSquareParams}
        width={0.4}
        radius={0.05}
        color='#ffffff'
        position={[1.35, -1.75, -0.015]}
        rotation={[0, 0, 0]}
      />
      <RoundedSquare
        {...rectangleParams}
        width={0.5}
        height={0.5}
        radius={0.05}
        color='#59676f'
        position={[2.05, -1.55, -0.015]}
        rotation={[0, 0, 0]}
      />
      <RoundedSquare
        {...textSquareParams}
        width={0.4}
        radius={0.05}
        color='#ffffff'
        position={[2.1, -1.75, -0.015]}
        rotation={[0, 0, 0]}
      />
      {/* Top Bar */}
      <RoundedSquare
        {...textSquareParams}
        color={'#ffffff'}
        width={0.5}
        position={[0.45 * 3, 0.95, -0.02]}
        rotation={[0, 0, 0]}
      />
      <RoundedSquare
        {...rectangleParams}
        color={'#2a2928'}
        width={5.01}
        position={[-0.3145 * 3, 0.9, -0.045]}
        rotation={[0, 0, 0]}
      />
      {/* ---Explorer--- */}
      <RoundedSquare
        width={0.95}
        height={3.1}
        radius={0}
        scale={conditionalScale}
        position={[-0.95, -2.19, -0.04]}
        rotation={[0, 0, 0]}
        color={'#fff'}
      />
      <RoundedSquare
        {...textSquareParams}
        width={0.5}
        position={[-0.65 - 0.15, 0.65 - 0.125 * -1, 0]}
        color={'#747474'}
      />
      <RoundedSquare
        {...textSquareParams}
        width={0.55}
        position={[-0.65 - 0.05, 0.65 - 0.125 * 0, 0]}
        color={'#9e60a4'}
      />
      <RoundedSquare
        {...textSquareParams}
        width={0.6}
        position={[-0.65 - 0.05, 0.65 - 0.125 * 1, 0]}
        color={'#747474'}
      />
      <RoundedSquare
        {...textSquareParams}
        width={0.4}
        position={[-0.65 - 0.05, 0.65 - 0.125 * 2, 0]}
        color={'#747474'}
      />
      <RoundedSquare
        {...textSquareParams}
        width={0.15}
        position={[-0.65 - 0.05, 0.65 - 0.125 * 3, 0]}
        color={'#747474'}
      />
      <RoundedSquare
        {...textSquareParams}
        width={0.45}
        position={[-0.55 - 0.05, 0.65 - 0.125 * 4, 0]}
        color={'#747474'}
      />
      <RoundedSquare
        {...textSquareParams}
        width={0.35}
        position={[-0.45 - 0.05, 0.65 - 0.125 * 5, 0]}
        color={'#747474'}
      />
      <RoundedSquare
        {...textSquareParams}
        width={0.3}
        position={[-0.35 - 0.05, 0.65 - 0.125 * 6, 0]}
        color={'#747474'}
      />
      <RoundedSquare
        {...textSquareParams}
        width={0.3}
        position={[-0.35 - 0.05, 0.65 - 0.125 * 7, 0]}
        color={'#747474'}
      />
      <RoundedSquare
        {...textSquareParams}
        width={0.3}
        position={[-0.35 - 0.05, 0.65 - 0.125 * 8, 0]}
        color={'#9e60a4'}
      />
      <RoundedSquare
        {...textSquareParams}
        width={0.3}
        position={[-0.35 - 0.05, 0.65 - 0.125 * 9, 0]}
        color={'#747474'}
      />
      <RoundedSquare
        {...textSquareParams}
        width={0.35}
        position={[-0.55 - 0.05, 0.65 - 0.125 * 10, 0]}
        color={'#9e60a4'}
      />
      <RoundedSquare
        {...textSquareParams}
        width={0.25}
        position={[-0.45 - 0.05, 0.65 - 0.125 * 11, 0]}
        color={'#9e60a4'}
      />
      <RoundedSquare
        {...textSquareParams}
        width={0.35}
        position={[-0.45 - 0.05, 0.65 - 0.125 * 12, 0]}
        color={'#747474'}
      />
      <RoundedSquare
        {...textSquareParams}
        width={0.3}
        position={[-0.45 - 0.05, 0.65 - 0.125 * 13, 0]}
        color={'#747474'}
      />
      <RoundedSquare
        {...textSquareParams}
        width={0.4}
        position={[-0.45 - 0.05, 0.65 - 0.125 * 14, 0]}
        color={'#9e60a4'}
      />
      <RoundedSquare
        {...textSquareParams}
        width={0.35}
        position={[-0.55 - 0.05, 0.65 - 0.125 * 15, 0]}
        color={'#747474'}
      />
      <RoundedSquare
        {...textSquareParams}
        width={0.35}
        position={[-0.45 - 0.05, 0.65 - 0.125 * 16, 0]}
        color={'#9e60a4'}
      />
      <RoundedSquare
        {...textSquareParams}
        width={0.3}
        position={[-0.45 - 0.05, 0.65 - 0.125 * 17, 0]}
        color={'#747474'}
      />
      <RoundedSquare
        {...textSquareParams}
        width={0.25}
        position={[-0.45 - 0.05, 0.65 - 0.125 * 18, 0]}
        color={'#747474'}
      />
      <RoundedSquare
        {...textSquareParams}
        width={0.4}
        position={[-0.45 - 0.05, 0.65 - 0.125 * 19, 0]}
        color={'#747474'}
      />
      <RoundedSquare
        {...textSquareParams}
        width={0.35}
        position={[-0.65 - 0.05, 0.65 - 0.125 * 20, 0]}
        color={'#747474'}
      />
      <RoundedSquare
        {...textSquareParams}
        width={0.5}
        position={[-0.65 - 0.05, 0.65 - 0.125 * 21, 0]}
        color={'#747474'}
      />
      {/* Right-Dock */}
      <RoundedSquare
        width={0.95}
        height={3.1}
        radius={0}
        scale={conditionalScale}
        position={[3.12, -2.19, -0.04]}
        rotation={[0, 0, 0]}
        color={'#ffffff'}
      />
      <RoundedSquare {...textSquareParams} width={0.2} position={[3.2, 0.65 - 0.125 * -0.5, 0]} color={'#000000'} />
      <RoundedSquare {...textSquareParams} width={0.25} position={[3.45, 0.65 - 0.125 * -0.5, 0]} color={'#cbcbcb'} />
      <RoundedSquare {...textSquareParams} width={0.225} position={[3.75, 0.65 - 0.125 * -0.5, 0]} color={'#cbcbcb'} />
      <RoundedSquare {...textSquareParams} width={0.3} position={[3.2, 0.65 - 0.125 * 1.5, 0]} color={'#000000'} />
      <RoundedSquare {...textSquareParams} width={0.6} position={[3.2, 0.65 - 0.125 * 3, 0]} color={'#cbcbcb'} />
      <RoundedSquare {...textSquareParams} width={0.1} position={[3.9, 0.65 - 0.125 * 3, 0]} color={'#cbcbcb'} />
      <RoundedSquare {...textSquareParams} width={0.3} position={[3.2, 0.65 - 0.125 * 5, 0]} color={'#000000'} />
      <RoundedSquare {...textSquareParams} width={0.1} position={[3.9, 0.65 - 0.125 * 5, 0]} color={'#000000'} />
      <RoundedSquare {...textSquareParams} width={0.43} position={[3.2, 0.65 - 0.125 * 7, 0]} color={'#cbcbcb'} />
      <RoundedSquare {...textSquareParams} width={0.35} position={[3.2, 0.65 - 0.125 * 8.5, 0]} color={'#cbcbcb'} />
      <RoundedSquare {...textSquareParams} width={0.29} position={[3.2, 0.65 - 0.125 * 10, 0]} color={'#cbcbcb'} />
      <RoundedSquare {...textSquareParams} width={0.42} position={[3.2, 0.65 - 0.125 * 11.5, 0]} color={'#cbcbcb'} />
      <RoundedSquare {...textSquareParams} width={0.4} position={[3.2, 0.65 - 0.125 * 13, 0]} color={'#cbcbcb'} />
      <RoundedSquare {...textSquareParams} width={0.1} position={[3.2, 0.65 - 0.125 * 16, 0]} color={'#2885f6'} />
      <RoundedSquare {...textSquareParams} width={0.1} position={[3.2, 0.65 - 0.125 * 17.5, 0]} color={'#7babe6'} />
      <RoundedSquare {...textSquareParams} width={0.1} position={[3.2, 0.65 - 0.125 * 19, 0]} color={'#142b61'} />
    </group>
  )
}
