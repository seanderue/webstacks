import { Perf } from 'r3f-perf'
import Blob from './Blob'
import Scene from './Scene'
import Text from '@/components/canvas/Text'
import Grid from './Grid'
import { useEffect, useRef } from 'react'
import { useThree } from '@react-three/fiber'
import * as THREE from 'three'

export default function IndependentCanvas({ route, ...props }) {
  return (
    <Scene className='scene' style={{ pointerEvents: 'none' }} eventSource={props.ref} eventPrefix='client'>
      {/* <color ref={null} args={['#000000']} attach='background' /> */}
      <Perf position='top-left' />
      <Blob route='/' position-y={3.75} />
      <Text rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 2.25]}>
        [ ]
      </Text>
      {/* <Grid /> */}
    </Scene>
  )
}
