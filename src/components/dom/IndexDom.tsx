import { useEffect, useState } from 'react'
// import Image from 'next/image'
import { Image, renderMetaTags, StructuredText } from 'react-datocms'
import { LaptopProvider, useLaptopContext } from '../canvas/context/LaptopContext'
import { StageLevelProvider, useStageLevelContext } from '../canvas/context/StageLevelContext'
import { Perf } from 'r3f-perf'
import { Effects, Environment, PresentationControls } from '@react-three/drei'
import ExperienceBase from '../canvas/ExperienceBase'
import Head from 'next/head'
import parseDescriptionWithDelays from '@/helpers/parseDescriptionWithDelays'
import Chapter from './Chapter'
import ExperienceNavigation from './ExperienceNavigation'
import DynamicExperienceMasks from './DynamicExperienceMasks'
import HeroContent from './HeroContent'

export default function Page(props) {
  // Triggers when user touches canvas (used for css animations)
  const [isInteracting, setIsInteracting] = useState(false)
  // Wrapper state for isInteracting with stateful delays (used for css animations)
  const [isActive, setIsActive] = useState(false)

  console.log(
    'Thanks for looking at my work with such vigorous curiosity. As a reward, if you click the target on the optimize page, the car will go faster 😉',
  )

  const toggleIsInteracting = () => {
    setIsInteracting((prev) => !prev)
    if (isActive) {
      setIsActive((prev) => !prev)
    } else {
      setTimeout(() => setIsActive((prev) => !prev), 1000)
    }
  }
  const [stageLevel, setStageLevel] = useStageLevelContext()

  // Parsing GraphQL Response into variables
  console.log(props.data.homepage)
  const { homepage } = props.data
  const { site } = props.data
  const chapters = props.data.allChapters
  const chapter0 = chapters.filter((element: { stageLevel: number }) => element.stageLevel === 0)[0]
  const chapter1 = chapters.filter((element: { stageLevel: number }) => element.stageLevel === 1)[0]
  const chapter2 = chapters.filter((element: { stageLevel: number }) => element.stageLevel === 2)[0]
  const chapter3 = chapters.filter((element: { stageLevel: number }) => element.stageLevel === 3)[0]
  const chapter4 = chapters.filter((element: { stageLevel: number }) => element.stageLevel === 4)[0]
  console.log('chapter0')
  console.log(chapter0)

  return (
    <>
      {/* Passing SEO metadata through DatoCMS */}
      <Head>{renderMetaTags(homepage.seo.concat(site.favicon))}</Head>
      <section className={isInteracting ? 'landing is-interacting' : 'landing is-not-interacting'}>
        {/* Adjusts canvas position by adjusting surrounding masks */}
        <DynamicExperienceMasks />
        <HeroContent onClick={toggleIsInteracting} homepage={homepage} />
        <div className='experience' onMouseDown={!isInteracting ? toggleIsInteracting : () => {}}>
          {props.children}
          {/* Experience */}
          <ExperienceNavigation />
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
        <div className='chapters'>
          <div className='overlay is-top' />
          <div className='container'>
            <Chapter chapterIndex={0} stageLevel={stageLevel} isActive={isActive} data={chapter0} />
            <Chapter chapterIndex={1} stageLevel={stageLevel} isActive={isActive} data={chapter1} />
            <Chapter chapterIndex={2} stageLevel={stageLevel} isActive={isActive} data={chapter2} />
            <Chapter chapterIndex={3} stageLevel={stageLevel} isActive={isActive} data={chapter3} />
            <Chapter chapterIndex={4} stageLevel={stageLevel} isActive={isActive} data={chapter4} />
          </div>
          <div className='overlay is-bottom' />
        </div>
      </section>

      {/* <section className='presentation'>
        <div className='content'>
          <h1 style={{ textAlign: 'center' }}>Temporary styling within temp div on presentation</h1>
        </div>
      </section> */}
    </>
  )
}

Page.canvas = (props) => (
  <>
    <group position={[0, -3, 0]}>
      <Effects />
      <Environment preset='city' />

      {/* Meshes */}
      <PresentationControls
        global
        cursor={true}
        rotation={[0.13, 0.1, 0]}
        polar={[-0.2, 0.2]}
        azimuth={[-1, 0.75]}
        config={{ mass: 2, tension: 400 }}>
        <ExperienceBase />
      </PresentationControls>
    </group>
  </>
)
