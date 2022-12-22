import { StructuredText } from 'react-datocms'

export default function Chapter(props: { chapterIndex: number; stageLevel: any; isActive: any; data: any }) {
  if (props.chapterIndex > 4) console.warn('Experience & styles have not been updated for chapters beyond 4')

  const className =
    props.stageLevel === props.chapterIndex && props.isActive
      ? `chapter chapter-0${props.chapterIndex} is-active`
      : `chapter chapter-0${props.chapterIndex}`

  const content = props.data

  return (
    <div className={className}>
      <div className='grid'>
        <div className='shadow' />
      </div>
      {/* <div className='illustration'>
                <Image src={'/img/react.webp'} width='20' height='20' alt={'React logo'} />
              </div> */}
      <small className='number element ch-delay-0'>{content.subtitle}</small>
      <h3 className='section-title element ch-delay-1'>{content.mainTitle}</h3>
      <div className='description element ch-delay-2'>
        <StructuredText data={content.bodyText} />
      </div>
      <small className='description element ch-delay-3'>
        <i>{"Content hydrated statically from DatoCMS's GraphQL endpoint"}</i>
      </small>
    </div>
  )
}
