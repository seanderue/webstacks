import dynamic from 'next/dynamic'
import Instructions from '@/components/dom/Instructions'
import Grid from '@/components/canvas/Grid'
import Text from '@/components/canvas/Text'
import { Perf } from 'r3f-perf'
import Overlay from '@/components/dom/Overlay'
import { useState } from 'react'
import PlaneReflector from '@/components/canvas/planeReflector'
import { useControls } from 'leva'
// import CryptoCoin from '@/components/canvas/CryptoCoin'

const Blob = dynamic(() => import('@/components/canvas/Blob'), { ssr: false })
const CryptoCoin = dynamic(() => import('@/components/canvas/CryptoCoin'), { ssr: false })

export default function Page(props) {
  const [isInteracting, setIsInteracting] = useState(false)
  const toggleIsInteracting = () => {
    setIsInteracting((prev) => !prev)
  }

  return (
    <>
      <section className={`landing ${isInteracting ? 'is-interacting' : 'is-not-interacting'}`}>
        {/* <Overlay /> */}
        <div className='mask is-top' />
        <div onClick={toggleIsInteracting} className='mask is-right' />
        <div className='mask is-bottom' />
        <div className='mask is-left' />
        <div className='content delay-1'>
          <h1 className='element main-title delay-0'>
            Your Next React Engineer
            {/* <br /> Hire a React Engineer */}
          </h1>
          <a href='https://www.linkedin.com/in/sean-derue/' className='element author delay-1' target='_blank'>
            <img className='picture' src='img/author.jpeg' />
            <span className='label'>
              A Cover-Letter Experience <br /> by <span className='underline-container'>Sean DeRue</span>
            </span>
          </a>
          <p className='element description delay-2'>
            I want to be a part of Webstacks' next success stories. I made this site to prove it.
          </p>
          <p className='element description delay-3'>
            ( Built in 20 days using Typescript, React, Next.js, Three.js, with responsive, accessible, and SEO
            friendliness in mind )
          </p>
          <p className='element description delay-4'>Separator</p>
        </div>
        <div className={'experience'} onMouseDown={!isInteracting ? toggleIsInteracting : () => {}}>
          {props.children}
          <button className='click' aria-label='Explore'>
            <span className='hover' />
            <span className='label'>Click to explore</span>
          </button>
        </div>
        <button className='close' aria-label='Close' onClick={toggleIsInteracting}>
          <span className='background' />
          <span className='bars'>
            <span className='bar bar-1' />
            <span className='bar bar-2' />
          </span>
        </button>
      </section>
      <section className='presentation'>
        <div className='content'>
          <h1 style={{ textAlign: 'center' }}>Temporary styling within temp div on presentation</h1>
        </div>
      </section>
    </>
  )
}

Page.canvas = (props) => (
  <>
    <Perf position='top-left' />
    <Blob route='/' position-y={3.75} />
    <Text rotation={[0, 0, 0]} position={[-1, -2, 2.25]}>
      [ ]
    </Text>
    {/* <CryptoCoin /> */}
    {/* <group position={[-2, -2, 0]}>
      <PlaneReflector />
    </group> */}
    {/* <Grid /> */}
  </>
)

export async function getStaticProps() {
  return { props: { title: 'Blob' } }
}
