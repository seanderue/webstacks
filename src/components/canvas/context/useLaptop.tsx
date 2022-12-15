import { useEffect, useState } from 'react'

export type UseLaptopProps = [boolean, React.Dispatch<React.SetStateAction<boolean>>]

export const useLaptop = (newClosedValue: boolean): UseLaptopProps => {
  const [isClosed, setIsClosed] = useState(true)

  useEffect(() => {
    setIsClosed(newClosedValue)
  }, [newClosedValue])

  return [isClosed, setIsClosed]
}
