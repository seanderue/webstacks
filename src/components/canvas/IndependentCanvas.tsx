import { Perf } from 'r3f-perf'
import Blob from './Blob'
import Scene from './Scene'
import Text from '@/components/canvas/Text'
import Grid from './Grid'

export default function IndependentCanvas({ route, ...props }) {
  return (
    <Scene className='scene' style={{ pointerEvents: 'none' }} eventSource={props.ref} eventPrefix='client'>
      <Perf position='top-left' />
      <Blob route='/' position-y={3.75} />
      <Text rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 2.25]}>
        [ ]
      </Text>
      <Grid />
    </Scene>
  )
}
