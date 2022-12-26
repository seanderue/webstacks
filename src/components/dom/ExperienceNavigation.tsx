import { useLaptopContext } from '../canvas/context/LaptopContext'
import { useStageLevelContext } from '../canvas/context/StageLevelContext'

// This component handles the stage-level adjustments via two buttons (pev & next) and a label.

export default function ExperienceNavigation() {
  //Pull experience context
  const [stageLevel, setStageLevel] = useStageLevelContext()
  const [isClosed, setIsClosed] = useLaptopContext()

  //  --Dynamic Class Naming--
  const getActivity = (level: number) => {
    if (stageLevel > level) return 'is-before'
    if (stageLevel < level) return 'is-after'
    if (stageLevel === level) return 'is-current'
  }

  const openLaptopLabelClass = `level ${getActivity(0)}`
  const planLabelClass = `level ${getActivity(1)}`
  const designLabelClass = `level ${getActivity(2)}`
  const buildLabelClass = `level ${getActivity(3)}`
  const optimizeLabelClass = `level ${getActivity(4)}`

  //   --Event Handlers--

  // Examines current stage level and updates experience context
  const handleNextClick = () => {
    if (stageLevel < 4) {
      setIsClosed(false)
      setStageLevel((prev) => {
        return (prev += 1)
      })
    }
  }

  // Examines current stage level and updates experience context
  const handlePreviousClick = () => {
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
    <div className='navigation'>
      <button
        onClick={() => handlePreviousClick()}
        className={stageLevel > 0 ? 'js-previous sibling is-previous is-active' : 'js-previous sibling is-previous'}
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
  )
}
