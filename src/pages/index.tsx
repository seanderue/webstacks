// Dynamic import is used to prevent a payload when the website starts, that includes threejs, r3f etc..
// WARNING ! errors might get obfuscated by using dynamic import.
// If something goes wrong go back to a static import to show the error.
// https://github.com/pmndrs/react-three-next/issues/49
import dynamic from 'next/dynamic'
import { Perf } from 'r3f-perf'
import { useState } from 'react'
import { Environment, PresentationControls } from '@react-three/drei'
import Effects from '@/components/canvas/Effects'
import ExperienceBase from '@/components/canvas/ExperienceBase'
import Image from 'next/image'
// import CryptoCoin from '@/components/canvas/CryptoCoin'

// const Blob = dynamic(() => import('@/components/canvas/Blob'), { ssr: false })

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
          <a href='https://www.linkedin.com/in/sean-derue/' className='element author delay-1'>
            <Image className='picture' src='/img/author.jpeg' alt={'Sean DeRue'} width={64} height={64} />
            <span className='label'>
              A Cover-Letter Experience <br /> by <span className='underline-container'>Sean DeRue</span>
            </span>
          </a>
          <p className='element description delay-2'>
            I want to be a part of Webstacks&apos; next success stories. I made this site to prove it.
          </p>
          <p className='element description delay-3'>
            ( Built in 20 days using Typescript, React, Next.js, Three.js, with responsive, accessible, and SEO
            friendliness in mind )
          </p>
          <p className='element description delay-4'>Lorem Ipsum</p>
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
    <group position={[0, -3, 0]}>
      <Perf position='top-left' />

      {/* Staging */}
      {/* <directionalLight shadow-bias={0.1} castShadow intensity={2} position={[10, 6, 6]} shadow-mapSize={[1024, 1024]}>
        <orthographicCamera attach='shadow-camera' left={-20} right={20} top={20} bottom={-20} />
      </directionalLight> */}

      <Effects />
      <Environment preset='city' />

      {/* Meshes */}
      {/* <Blob route='/' position-y={3.75} /> */}
      <PresentationControls
        global
        cursor={true}
        rotation={[0.13, 0.1, 0]}
        polar={[-0.2, 0.2]}
        azimuth={[-1, 0.75]}
        config={{ mass: 2, tension: 400 }}>
        <ExperienceBase />
      </PresentationControls>

      {/* 3D Text */}
      {/* <Text rotation={[0, 0, 0]} position={[-2.5, 0, 0]}>
        [ ]
      </Text> */}
    </group>
  </>
)

// export async function getStaticProps() {
//   return { props: { title: 'Blob' } }
// }
