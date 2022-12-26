import { StructuredText, Image } from 'react-datocms'

export default function Intro(props: { data: any }) {
  const content = props.data

  return (
    <div className='intro'>
      <h2 className='section-title element'>{content.mainTitle}</h2>
      <div className='description element'>
        <StructuredText
          data={content.bodyText}
          renderBlock={({ record }) => {
            switch (record.__typename) {
              case 'ImageRecord':
                // @ts-ignore
                return <Image data={record.image.responsiveImage} />
              default:
                return null
            }
          }}
        />
      </div>
    </div>
  )
}
