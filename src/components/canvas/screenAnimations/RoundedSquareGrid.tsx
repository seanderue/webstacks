import { useControls } from 'leva'
import { Shape } from 'three'
import RoundedSquare from './RoundedSquare'

export default function RoundedSquareGrid({ position, rotation }) {
  //   const { position, rotation } = useControls({
  //     position: { value: [-2.03, 0.04, -2.23], step: 0.01 },
  //     rotation: { value: [-Math.PI / 2, 0, 0], step: 0.01 },
  //   })

  // Set the dimensions & color of squares
  const squareParams = {
    width: 0.7,
    height: 0.7,
    radius: 0.03,
    scale: 1,
    color: 'gray',
  }
  const gap = 0.1

  return (
    <group position={position} rotation={rotation}>
      {/* Row 1 w/ 4 col  */}
      <RoundedSquare {...squareParams} position={[(squareParams.width + gap) * 0, 0, 0]} rotation={[0, 0, 0]} />
      <RoundedSquare {...squareParams} position={[(squareParams.width + gap) * 1, 0, 0]} rotation={[0, 0, 0]} />
      <RoundedSquare {...squareParams} position={[(squareParams.width + gap) * 2, 0, 0]} rotation={[0, 0, 0]} />
      <RoundedSquare {...squareParams} position={[(squareParams.width + gap) * 3, 0, 0]} rotation={[0, 0, 0]} />
      {/* Row 2 w/ 4 col  */}
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
