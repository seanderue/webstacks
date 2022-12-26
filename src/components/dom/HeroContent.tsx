import { Image, StructuredText } from 'react-datocms'

export default function HeroContent({ homepage, onClick }) {
  return (
    <div className='content delay-1'>
      <h1 className='element main-title delay-0'>{homepage.title}</h1>
      <a href={homepage.authorLinkedinUrl} className='element author delay-1'>
        {/* Using DatoCMS Image for optimized image loading */}
        <Image className='picture' data={homepage.authorImage.responsiveImage} />
        <span className='label'>
          A Cover-Letter Experience <br /> by <span className='underline-container'>{homepage.authorName}</span>
        </span>
      </a>

      {/* Description */}
      <div className='description element delay-1'>
        <StructuredText data={homepage.heroContent1.value} />
      </div>
      <div className='description element delay-2'>
        <StructuredText data={homepage.heroContent2.value} />
      </div>
      <div className='description element delay-4'>
        <StructuredText data={homepage.heroContent3.value} />
      </div>
    </div>
  )
}
