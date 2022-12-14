import { useEffect, useState } from 'react'
import { renderMetaTags } from 'react-datocms'
import { useStageLevelContext } from '../canvas/context/StageLevelContext'
import { Effects, Environment, PresentationControls } from '@react-three/drei'
import ExperienceBase from '../canvas/ExperienceBase'
import Head from 'next/head'
import Chapter from './Chapter'
import ExperienceNavigation from './ExperienceNavigation'
import DynamicExperienceMasks from './DynamicExperienceMasks'
import HeroContent from './HeroContent'
import Intro from './Intro'

export default function Page(props) {
  // Triggers when user touches canvas (used for css animations)
  const [isInteracting, setIsInteracting] = useState(false)
  // Wrapper state for isInteracting with stateful delays (used for css animations)
  const [isActive, setIsActive] = useState(false)
  // Manages responsive state for mobile devices
  const [isMobile, setIsMobile] = useState(false)

  const [width, setWidth] = useState(1500)

  console.log(
    'Thanks for looking at my work with such vigorous curiosity. As a reward, if you click the target on the optimize page, the car will go faster 😉',
  )

  const toggleIsInteracting = () => {
    setIsInteracting((prev) => !prev)
    if (isActive) {
      setIsActive((prev) => !prev)
    } else {
      // Taking a second for animation purposes
      setTimeout(() => setIsActive((prev) => !prev), 1000)
    }
  }

  // making sure this function is being called in client side only (not SSR)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWidth(window.innerWidth)

      const handleResize = () => {
        setWidth(window.innerWidth)
      }

      window.addEventListener('resize', handleResize)

      // Clean up the event listener when the component unmounts
      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [])

  useEffect(() => {
    if (width < 800) {
      // device is a mobile device
      setIsMobile(true)
      setIsInteracting(true)
      setIsActive(true)
    } else {
      setIsMobile(false)
    }
  }, [width])

  const [stageLevel, setStageLevel] = useStageLevelContext()

  // Parsing GraphQL Response into variables
  const { homepage } = props.data
  const { site } = props.data
  const chapters = props.data.allChapters
  const chapter0 = chapters.filter((element: { stageLevel: number }) => element.stageLevel === 0)[0]
  const chapter1 = chapters.filter((element: { stageLevel: number }) => element.stageLevel === 1)[0]
  const chapter2 = chapters.filter((element: { stageLevel: number }) => element.stageLevel === 2)[0]
  const chapter3 = chapters.filter((element: { stageLevel: number }) => element.stageLevel === 3)[0]
  const chapter4 = chapters.filter((element: { stageLevel: number }) => element.stageLevel === 4)[0]

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
        <button className={width < 800 ? 'hidden' : 'close'} aria-label='Close' onClick={toggleIsInteracting}>
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
      <section className='table-of-content'>
        <div className='columns'>
          {/* Put all chapters into one column if width gets below 1300, otherwise two columns */}
          {width > 1300 ? (
            <>
              <div className='column'>
                <Intro data={chapter0} />
                <Chapter chapterIndex={2} stageLevel={stageLevel} isActive={isActive} data={chapter2} />
                <Chapter chapterIndex={4} stageLevel={stageLevel} isActive={isActive} data={chapter4} />
              </div>
              <div className='column'>
                <Chapter chapterIndex={1} stageLevel={stageLevel} isActive={isActive} data={chapter1} />
                <Chapter chapterIndex={3} stageLevel={stageLevel} isActive={isActive} data={chapter3} />
              </div>
            </>
          ) : (
            <div className='column'>
              <Intro data={chapter0} />
              <Chapter chapterIndex={1} stageLevel={stageLevel} isActive={isActive} data={chapter1} />
              <Chapter chapterIndex={2} stageLevel={stageLevel} isActive={isActive} data={chapter2} />
              <Chapter chapterIndex={3} stageLevel={stageLevel} isActive={isActive} data={chapter3} />
              <Chapter chapterIndex={4} stageLevel={stageLevel} isActive={isActive} data={chapter4} />
            </div>
          )}
        </div>
      </section>
    </>
  )
}

// The page's canvas component that will be rendered according to the Layout component
Page.canvas = () => (
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
