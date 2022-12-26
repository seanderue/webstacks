import { useRef } from 'react'
import dynamic from 'next/dynamic'
import Layout from '@/components/dom/Layout'
import '@/styles/index.scss'

const Scene = dynamic(() => import('@/components/canvas/Scene'), { ssr: true })

export default function App({ Component, pageProps = { title: 'index' } }) {
  const ref = useRef()

  return (
    <>
      {/* <Header title={pageProps.title} /> */}
      {/* @ts-ignore */}
      <Layout ref={ref}>
        <Component {...pageProps}>
          {/* The canvas can either be in front of the dom or behind. If it is in front it can overlay contents.
           * Setting the event source to a shared parent allows both the dom and the canvas to receive events.
           * Since the event source is now shared, the canvas would block events, we prevent that with pointerEvents: none. */}
          {/* I SEPARATED EVENT SOURCES */}
          {Component?.canvas && (
            <>
              <Scene className='scene' eventPrefix='client'>
                {Component.canvas(pageProps)}
              </Scene>
            </>
          )}
        </Component>
      </Layout>
    </>
  )
}
