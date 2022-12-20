import { useEffect, useState } from 'react'
import Image from 'next/image'
import { LaptopProvider, useLaptopContext } from '../canvas/context/LaptopContext'
import { StageLevelProvider, useStageLevelContext } from '../canvas/context/StageLevelContext'
import { Perf } from 'r3f-perf'
import { Effects, Environment, PresentationControls } from '@react-three/drei'
import ExperienceBase from '../canvas/ExperienceBase'

export default function Page(props) {
  const [isInteracting, setIsInteracting] = useState(false)
  const toggleIsInteracting = () => {
    setIsInteracting((prev) => !prev)
  }
  const [stageLevel, setStageLevel] = useStageLevelContext()
  const [isClosed, setIsClosed] = useLaptopContext()

  const [planActivity, setPlanActivity] = useState('is-after')
  const [designActivity, setDesignActivity] = useState('is-after')

  //Your tired ass tried something stupd that didn't work. Let's try this https://stackoverflow.com/questions/35224113/react-change-class-name-on-state-change
  useEffect(() => {
    setPlanActivity(getActivity(1))
    setDesignActivity(getActivity(2))
    console.log('new stage level')
    console.log(stageLevel)
  }, [isInteracting, stageLevel])

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
        <div className='experience' onMouseDown={!isInteracting ? toggleIsInteracting : () => {}}>
          {props.children}
          <div className='navigation'>
            <button
              onClick={() => handlePreviousClick()}
              className={`js-previous sibling is-previous ${stageLevel > 0 && 'is-active'}`}
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
                  <span className={`js-level level ${getActivity(0)}`}> Open Laptop </span>
                  <span className={`js-levels level ${getActivity(1)} `}> Plan </span>
                  <span className={`js-levels level ${getActivity(2)} `}> Design </span>
                  <span className={`js-levels level ${getActivity(3)} `}> Build </span>
                  <span className={`js-levels level ${getActivity(4)} `}> Optimize </span>
                </div>
              </div>
            </div>
            <button
              onClick={() => handleNextClick()}
              className={`js-next sibling is-next ${stageLevel < 4 && 'is-active'}`}
              aria-label='next'>
              <div className='icon'>
                <svg width='11' height='7' viewBox='0 0 11 7' fill='none' xmlns='https://www.w3.org/2000/svg'>
                  <path
                    opacity='0.5'
                    fill-rule='evenodd'
                    clip-rule='evenodd'
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
            {/* <div className={`chapter chapter-01 ${stageLevel === 1 && 'is-active'}`}> */}
            <div className={`chapter chapter-01 is-active`}>
              <div className='grid'>
                <div className='shadow' />
              </div>
              <div className='illustration'>
                <Image src={'/img/react.webp'} width='20' height='20' alt={'React logo'} />
              </div>
              <small className='number element delay-0'>01</small>
              <h3 className='section-title element delay-1'>Planning</h3>
              <div className='description element delay-2'>
                <p>
                  Something something T-shaped skillset that means I won't need a translator for marketing-speak. I know
                  expertise shines in the details. I know what is important to the end user.
                </p>
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
