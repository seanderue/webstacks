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

  // Set the dimensions & color of squares
  const squareParams = {
    width: 0.7,
    height: 0.7,
    radius: 0.03,
    scale: !isClosed && stageLevel === 1 ? 1 : 0,
    color: '#b1bfde',
  }
  const rectangleParams = {
    color: '#245ce0',
    height: 0.175,
    width: 0.65,
    radius: 0.03,
    scale: !isClosed && stageLevel === 1 ? 1 : 0,
  }

  const gap = 0.1

  return (
    <group position={position} rotation={rotation}>
      {/* Row 1 w/ 4 col  */}
      {/* Rectangle Items */}
      <RoundedSquare
        {...rectangleParams}
        height={0.35}
        position={[(squareParams.width + gap) * 0 + 0.025, squareParams.width / 2 - 0.35 / 2, 0.04]}
        rotation={[0, 0, 0]}
      />
      <RoundedSquare
        {...rectangleParams}
        position={[(squareParams.width + gap) * 1 + 0.025, squareParams.width / 1 - 0.225, 0.04]}
        rotation={[0, 0, 0]}
      />
      <RoundedSquare
        {...rectangleParams}
        position={[(squareParams.width + gap) * 1 + 0.025, squareParams.width / 2 - 0.175 / 2, 0.04]}
        rotation={[0, 0, 0]}
      />
      <RoundedSquare
        {...rectangleParams}
        position={[(squareParams.width + gap) * 2 + 0.025, squareParams.width / 1 - 0.225, 0.04]}
        rotation={[0, 0, 0]}
      />
      <RoundedSquare
        {...rectangleParams}
        position={[(squareParams.width + gap) * 2 + 0.025, squareParams.width / 2 - 0.175 / 2, 0.04]}
        rotation={[0, 0, 0]}
      />
      <RoundedSquare
        {...rectangleParams}
        position={[(squareParams.width + gap) * 3 + 0.025, squareParams.width / 1 - 0.225, 0.04]}
        rotation={[0, 0, 0]}
      />
      {/* Grid items*/}
      <RoundedSquare {...squareParams} position={[(squareParams.width + gap) * 0, 0, 0]} rotation={[0, 0, 0]} />
      <RoundedSquare {...squareParams} position={[(squareParams.width + gap) * 1, 0, 0]} rotation={[0, 0, 0]} />
      <RoundedSquare {...squareParams} position={[(squareParams.width + gap) * 2, 0, 0]} rotation={[0, 0, 0]} />
      <RoundedSquare {...squareParams} position={[(squareParams.width + gap) * 3, 0, 0]} rotation={[0, 0, 0]} />
      {/* Row 2 w/ 4 col  */}
      {/* Rectangle Items */}
      <RoundedSquare
        {...rectangleParams}
        color={'#319bbb'}
        height={0.35}
        position={[
          (squareParams.width + gap) * 0 + 0.025,
          squareParams.width / 2 - 0.35 / 2 - (squareParams.height + gap),
          0.04,
        ]}
        rotation={[0, 0, 0]}
      />
      <RoundedSquare
        {...rectangleParams}
        color={'#319bbb'}
        position={[
          (squareParams.width + gap) * 1 + 0.025,
          squareParams.width / 1 - 0.225 - (squareParams.height + gap),
          0.04,
        ]}
        rotation={[0, 0, 0]}
      />
      <RoundedSquare
        {...rectangleParams}
        color={'#319bbb'}
        position={[
          (squareParams.width + gap) * 1 + 0.025,
          squareParams.width / 2 - 0.175 / 2 - (squareParams.height + gap),
          0.04,
        ]}
        rotation={[0, 0, 0]}
      />
      <RoundedSquare
        {...rectangleParams}
        color={'#319bbb'}
        position={[
          (squareParams.width + gap) * 1 + 0.025,
          squareParams.width / 3 - 0.175 - (squareParams.height + gap),
          0.04,
        ]}
        rotation={[0, 0, 0]}
      />
      <RoundedSquare
        {...rectangleParams}
        color={'#319bbb'}
        position={[
          (squareParams.width + gap) * 2 + 0.025,
          squareParams.width / 1 - 0.225 - (squareParams.height + gap),
          0.04,
        ]}
        rotation={[0, 0, 0]}
      />
      {/* Grid items*/}

      <RoundedSquare
        {...squareParams}
        position={[(squareParams.width + gap) * 0, -(squareParams.height + gap), 0]}
        rotation={[0, 0, 0]}
      />
      <RoundedSquare
        {...squareParams}
        position={[(squareParams.width + gap) * 1, -(squareParams.height + gap), 0]}
        rotation={[0, 0, 0]}
      />
      <RoundedSquare
        {...squareParams}
        position={[(squareParams.width + gap) * 2, -(squareParams.height + gap), 0]}
        rotation={[0, 0, 0]}
      />
      <RoundedSquare
        {...squareParams}
        position={[(squareParams.width + gap) * 3, -(squareParams.height + gap), 0]}
        rotation={[0, 0, 0]}
      />
      {/* row 3 w/ 4 cols */}
      {/* Rectangle Items */}
      <RoundedSquare
        {...rectangleParams}
        color={'#6275c3'}
        height={0.35}
        position={[
          (squareParams.width + gap) * 0 + 0.025,
          squareParams.width / 2 - 0.35 / 2 - (squareParams.height + gap) * 2,
          0.04,
        ]}
        rotation={[0, 0, 0]}
      />
      <RoundedSquare
        {...rectangleParams}
        color={'#6275c3'}
        position={[
          (squareParams.width + gap) * 1 + 0.025,
          squareParams.width / 1 - 0.225 - (squareParams.height + gap) * 2,
          0.04,
        ]}
        rotation={[0, 0, 0]}
      />
      <RoundedSquare
        {...rectangleParams}
        color={'#6275c3'}
        position={[
          (squareParams.width + gap) * 1 + 0.025,
          squareParams.width / 2 - 0.175 / 2 - (squareParams.height + gap) * 2,
          0.04,
        ]}
        rotation={[0, 0, 0]}
      />
      <RoundedSquare
        {...rectangleParams}
        color={'#6275c3'}
        position={[
          (squareParams.width + gap) * 2 + 0.025,
          squareParams.width / 2 - 0.175 / 2 - (squareParams.height + gap) * 2,
          0.04,
        ]}
        rotation={[0, 0, 0]}
      />
      <RoundedSquare
        {...rectangleParams}
        color={'#6275c3'}
        position={[
          (squareParams.width + gap) * 2 + 0.025,
          squareParams.width / 1 - 0.225 - (squareParams.height + gap) * 2,
          0.04,
        ]}
        rotation={[0, 0, 0]}
      />
      {/* Grid items*/}
      <RoundedSquare
        {...squareParams}
        position={[(squareParams.width + gap) * 0, -(squareParams.height + gap) * 2, 0]}
        rotation={[0, 0, 0]}
      />
      <RoundedSquare
        {...squareParams}
        position={[(squareParams.width + gap) * 1, -(squareParams.height + gap) * 2, 0]}
        rotation={[0, 0, 0]}
      />
      <RoundedSquare
        {...squareParams}
        position={[(squareParams.width + gap) * 2, -(squareParams.height + gap) * 2, 0]}
        rotation={[0, 0, 0]}
      />
      <RoundedSquare
        {...squareParams}
        position={[(squareParams.width + gap) * 3, -(squareParams.height + gap) * 2, 0]}
        rotation={[0, 0, 0]}
      />
    </group>
  )
}
