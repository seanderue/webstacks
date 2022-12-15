import { useRef, forwardRef } from 'react'
import { mergeRefs } from 'react-merge-refs'

// @ts-ignore
const Layout = forwardRef(({ children, ...props }, ref) => {
  const localRef = useRef()
  return (
    <main ref={mergeRefs([ref, localRef])} className='fullscreen'>
      {children}
    </main>
  )
})
Layout.displayName = 'Layout'

export default Layout
