// Dynamic import is used to prevent a payload when the website starts, that includes threejs, r3f etc..
// WARNING ! errors might get obfuscated by using dynamic import.
// If something goes wrong go back to a static import to show the error.
// https://github.com/pmndrs/react-three-next/issues/49
import dynamic from 'next/dynamic'
import { Perf } from 'r3f-perf'
import { useState } from 'react'
import { Environment, PresentationControls } from '@react-three/drei'
import Effects from '@/components/canvas/Effects'
import ExperienceBase from '@/components/canvas/ExperienceBase'
import Image from 'next/image'
import { StageLevelProvider, useStageLevelContext } from '@/components/canvas/context/StageLevelContext'
import { LaptopProvider } from '@/components/canvas/context/LaptopContext'
import IndexDom from '@/components/dom/IndexDom'
import { request } from '@/lib/datocms'
// import CryptoCoin from '@/components/canvas/CryptoCoin'

// const Blob = dynamic(() => import('@/components/canvas/Blob'), { ssr: false })

const HOMEPAGE_QUERY = `query MyQuery {
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
    query: HOMEPAGE_QUERY,
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
  console.log(data)

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
      {/* <Perf position='top-left' /> */}

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
