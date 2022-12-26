import React from 'react'
import { createGenericContext } from './createGenericContext'
import { UseLaptopProps, useLaptop } from './useLaptop'

// Generate context
const [useLaptopContext, LaptopContextProvider] = createGenericContext<UseLaptopProps>()

// Generate provider
interface Props {
  children: React.ReactNode
}

const LaptopProvider = ({ children }: Props) => {
  const [isClosed, setIsClosed] = useLaptop(true)

  return <LaptopContextProvider value={[isClosed, setIsClosed]}>{children}</LaptopContextProvider>
}

export { LaptopProvider, useLaptopContext }
