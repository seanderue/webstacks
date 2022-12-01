import { useRef, forwardRef } from 'react'
import { mergeRefs } from 'react-merge-refs'

const Layout = forwardRef(({ children, ...props }, ref) => {
  const localRef = useRef()
  return (
    <div ref={mergeRefs([ref, localRef])} className='fullscreen'>
      {children}
    </div>
  )
})
Layout.displayName = 'Layout'

export default Layout
