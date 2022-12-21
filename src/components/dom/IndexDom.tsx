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

export default function Page(props) {
  // Triggers when user touches canvas (used for css animations)
  const [isInteracting, setIsInteracting] = useState(false)
  // Wrapper state for isInteracting with stateful delays (used for css animations)
  const [isActive, setIsActive] = useState(false)

  const toggleIsInteracting = () => {
    setIsInteracting((prev) => !prev)
    if (isActive) {
      setIsActive((prev) => !prev)
    } else {
      setTimeout(() => setIsActive((prev) => !prev), 1000)
    }
  }
  const [stageLevel, setStageLevel] = useStageLevelContext()
  const [isClosed, setIsClosed] = useLaptopContext()

  const getActivity = (level: number) => {
    // check to see if stage level is before plan
    if (stageLevel > level) return 'is-before'
    if (stageLevel < level) return 'is-after'
    if (stageLevel === level) return 'is-current'
  }

  const handleNextClick = () => {
    console.log('next clicked')
    console.log(stageLevel)
    if (stageLevel < 4) {
      setIsClosed(false)
      setStageLevel((prev) => {
        console.log(prev)
        return (prev += 1)
      })
    }
  }

  const handlePreviousClick = () => {
    console.log('next clicked')
    console.log(stageLevel)
    if (stageLevel === 1) {
      setIsClosed(true)
      setStageLevel((prev) => {
        return (prev -= 1)
      })
    }
    if (stageLevel > 1) {
      setIsClosed(false)
      setStageLevel((prev) => {
        return (prev -= 1)
      })
    }
  }

  const openLaptopLabelClass = `level ${getActivity(0)}`
  const planLabelClass = `level ${getActivity(1)}`
  const designLabelClass = `level ${getActivity(2)}`
  const buildLabelClass = `level ${getActivity(3)}`
  const optimizeLabelClass = `level ${getActivity(4)}`

  console.log(props.data.homepage)
  const { homepage } = props.data
  const { site } = props.data
  const { chapters } = props.data

  const description = homepage.heroContent.value.document.children
  console.log('description:')
  console.log(description)

  const descriptionElements = parseDescriptionWithDelays('element description', description)

  return (
    <>
      {/* Passing SEO metadata through DatoCMS */}
      <Head>{renderMetaTags(homepage.seo.concat(site.favicon))}</Head>
      <section className={isInteracting ? 'landing is-interacting' : 'landing is-not-interacting'}>
        {/* <Overlay /> */}
        <div className='mask is-top' />
        <div onClick={toggleIsInteracting} className='mask is-right' />
        <div className='mask is-bottom' />
        <div className='mask is-left' />
        <div className='content delay-1'>
          <h1 className='element main-title delay-0'>{props.data.homepage.title}</h1>
          <a href={homepage.authorLinkedinUrl} className='element author delay-1'>
            {/* Using DatoCMS Image for optimized image loading */}
            <Image className='picture' data={homepage.authorImage.responsiveImage} />
            <span className='label'>
              A Cover-Letter Experience <br /> by <span className='underline-container'>{homepage.authorName}</span>
            </span>
          </a>
          {descriptionElements}
        </div>
        <div className='experience' onMouseDown={!isInteracting ? toggleIsInteracting : () => {}}>
          {props.children}
          <div className='navigation'>
            <button
              onClick={() => handlePreviousClick()}
              className={
                stageLevel > 0 ? 'js-previous sibling is-previous is-active' : 'js-previous sibling is-previous'
              }
              aria-label='Previous'>
              <div className='icon'>
                <svg width='11' height='7' viewBox='0 0 11 7' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    opacity='0.5'
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M5.5 7C5.10218 7 4.72064 6.84197 4.43934 6.56066L0.439339 2.56066C-0.146447 1.97487 -0.146447 1.02513 0.439339 0.43934C1.02513 -0.146446 1.97487 -0.146446 2.56066 0.43934L5.5 3.37868L8.43934 0.43934C9.02513 -0.146447 9.97487 -0.146447 10.5607 0.439339C11.1464 1.02513 11.1464 1.97487 10.5607 2.56066L6.56066 6.56066C6.27936 6.84197 5.89782 7 5.5 7Z'
                    fill='white'></path>
                </svg>
              </div>
            </button>
            <div className='label'>
              <div className='inner'>
                <div className={'value'}>
                  <span className={openLaptopLabelClass}> Open Laptop </span>
                  <span className={planLabelClass}> Plan </span>
                  <span className={designLabelClass}> Design </span>
                  <span className={buildLabelClass}> Build </span>
                  <span className={optimizeLabelClass}> Optimize </span>
                </div>
              </div>
            </div>
            <button
              onClick={() => handleNextClick()}
              className={stageLevel < 4 ? 'js-next sibling is-next is-active' : 'js-next sibling is-next'}
              aria-label='next'>
              <div className='icon'>
                <svg width='11' height='7' viewBox='0 0 11 7' fill='none' xmlns='https://www.w3.org/2000/svg'>
                  <path
                    opacity='0.5'
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M5.5 7C5.10218 7 4.72064 6.84197 4.43934 6.56066L0.439339 2.56066C-0.146447 1.97487 -0.146447 1.02513 0.439339 0.43934C1.02513 -0.146446 1.97487 -0.146446 2.56066 0.43934L5.5 3.37868L8.43934 0.43934C9.02513 -0.146447 9.97487 -0.146447 10.5607 0.439339C11.1464 1.02513 11.1464 1.97487 10.5607 2.56066L6.56066 6.56066C6.27936 6.84197 5.89782 7 5.5 7Z'
                    fill='white'></path>
                </svg>
              </div>
            </button>
          </div>
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
          <div className='container'>
            <div className={stageLevel === 1 && isActive ? 'chapter chapter-01 is-active' : 'chapter chapter-01'}>
              {/* <div className={`chapter chapter-01 is-active`}> */}
              <div className='grid'>
                <div className='shadow' />
              </div>
              {/* <div className='illustration'>
                <Image src={'/img/react.webp'} width='20' height='20' alt={'React logo'} />
              </div> */}
              <small className='number element ch-delay-0'>01</small>
              <h3 className='section-title element ch-delay-1'>Planning</h3>
              <div className='description element ch-delay-2'>
                <p>
                  {
                    "Something something T-shaped skillset that means I won't need a translator for marketing-speak. I know expertise shines in the details. I know what is important to the end user."
                  }
                </p>
              </div>
            </div>
            <div className={stageLevel === 2 && isActive ? 'chapter chapter-02 is-active' : 'chapter chapter-02'}>
              {/* <div className={`chapter chapter-01 is-active`}> */}
              <div className='grid'>
                <div className='shadow' />
              </div>
              <div className='illustration'>
                {/* <Image src={'/img/react.webp'} width='20' height='20' alt={'React logo'} /> */}
              </div>
              <small className='number element ch-delay-0'>02</small>
              <h3 className='section-title element ch-delay-1'>Designing</h3>
              <div className='description element ch-delay-2'>
                <p>I can design</p>
              </div>
            </div>
            <div className={stageLevel === 3 && isActive ? 'chapter chapter-03 is-active' : 'chapter chapter-03'}>
              {/* <div className={`chapter chapter-01 is-active`}> */}
              <div className='grid'>
                <div className='shadow' />
              </div>
              <div className='illustration'>
                {/* <Image src={'/img/react.webp'} width='20' height='20' alt={'React logo'} /> */}
              </div>
              <small className='number element ch-delay-0'>03</small>
              <h3 className='section-title element ch-delay-1'>Building</h3>
              <div className='description element ch-delay-2'>
                <p>Build build build build</p>
              </div>
            </div>
            <div className={stageLevel === 4 && isActive ? 'chapter chapter-04 is-active' : 'chapter chapter-04'}>
              {/* <div className={`chapter chapter-01 is-active`}> */}
              <div className='grid'>
                <div className='shadow' />
              </div>
              <div className='illustration'>
                {/* <Image src={'/img/react.webp'} width='20' height='20' alt={'React logo'} /> */}
              </div>
              <small className='number element ch-delay-0'>04</small>
              <h3 className='section-title element ch-delay-1'>Optimizing</h3>
              <div className='description element ch-delay-2'>
                <p>Optimize Optimize Optimize</p>
              </div>
            </div>
          </div>
          <div className='overlay is-top' />
          <div className='overlay is-bottom' />
        </div>
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
