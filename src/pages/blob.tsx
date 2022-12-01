import dynamic from 'next/dynamic'
import Instructions from '@/components/dom/Instructions'
import Grid from '@/components/canvas/Grid'
import Text from '@/components/canvas/Text'
import { Perf } from 'r3f-perf'
import Overlay from '@/components/dom/Overlay'

const Blob = dynamic(() => import('@/components/canvas/Blob'), { ssr: false })

export default function Page(props) {
  return (
    <>
      <Instructions>
        This is the <span className='text-green-200'>/blob</span> route. Click on the blob to navigate back. The canvas
        was not unmounted between route changes, only its contents. If you want scene contents to persist, put them into{' '}
        <span className='text-green-200'>@/components/canvas/Scene</span>.
      </Instructions>
      <Overlay />
    </>
  )
}

Page.canvas = (props) => (
  <>
    <Perf position='top-left' />
    <Blob route='/' position-y={3.75} />
    <Text rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 2.25]}>
      [ ]
    </Text>
    <Grid />
  </>
)

export async function getStaticProps() {
  return { props: { title: 'Blob' } }
}
