export default function Chapter(props) {
  if (props.chapterIndex > 4) console.warn('Experience & styles have not been updated for chapters beyond 4')

  const className =
    props.stageLevel === props.chapterIndex && props.isActive
      ? `chapter chapter-0${props.chapterIndex} is-active`
      : `chapter chapter-0${props.chapterIndex}`

  return (
    <div className={className}>
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
  )
}
