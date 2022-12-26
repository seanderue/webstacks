// Dynamic import is used to prevent a payload when the website starts, that includes threejs, r3f etc..

import { Environment, PresentationControls } from '@react-three/drei'
import ExperienceBase from '@/components/canvas/ExperienceBase'
import { StageLevelProvider, useStageLevelContext } from '@/components/canvas/context/StageLevelContext'
import { LaptopProvider } from '@/components/canvas/context/LaptopContext'
import IndexDom from '@/components/dom/IndexDom'
import { request } from '@/lib/datocms'

export const QUERY = `query MyQuery {
  site: _site {
    favicon: faviconMetaTags {
      attributes
      content
      tag
    }
  }
  allChapters {
      bodyText {
        blocks {
          __typename
        	... on ImageRecord {
          id
						image {
            responsiveImage {
              alt
              aspectRatio
              base64
              bgColor
              height
              sizes
              src
              srcSet
              title
              webpSrcSet
              width
            }
          }
      	}
      }
        value
    }
    slug
    mainTitle
    subtitle
    seo: _seoMetaTags {
      attributes
      content
      tag
    }
    stageLevel
  }
  homepage {
    heroContent1 {
      value
    }
    heroContent2 {
      value
    }
    heroContent3 {
      value
    }
    authorName
    authorLinkedinUrl
    authorImage {
      responsiveImage(imgixParams: {fit: crop, w: 64, h: 64, auto: format}) {
        alt
        aspectRatio
        bgColor
        base64
        height
        sizes
        src
        srcSet
        title
        webpSrcSet
        width
      }
    }
    title
    seo: _seoMetaTags {
      attributes
      content
      tag
    }
  }
}
`

export async function getStaticProps() {
  const data = await request({
    query: QUERY,
    variables: null,
    includeDrafts: false,
    excludeInvalid: true,
  })
  return {
    props: { data },
  }
}

export default function Home(props) {
  const { data } = props

  return (
    <StageLevelProvider>
      <LaptopProvider>
        <IndexDom data={data}>{props.children}</IndexDom>
      </LaptopProvider>
    </StageLevelProvider>
  )
}

Home.canvas = (props) => (
  <>
    <group position={[0, -3, 0]}>
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
