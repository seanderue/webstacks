import { useEffect, useState } from 'react'

export type UseStageLevelProps = [number, React.Dispatch<React.SetStateAction<number>>]

export const useStageLevel = (newStageLevelValue: number): UseStageLevelProps => {
  const [stageLevel, setStageLevel] = useState(0)

  useEffect(() => {
    setStageLevel(newStageLevelValue)
  }, [newStageLevelValue])

  return [stageLevel, setStageLevel]
}
