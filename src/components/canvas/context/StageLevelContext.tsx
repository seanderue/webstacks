import React, { createContext, useContext, useEffect, useState } from 'react'
import { createGenericContext } from './createGenericContext'
import { UseStageLevelProps, useStageLevel } from './useStageLevel'

// Generate context
const [useStageLevelContext, StageLevelContextProvider] = createGenericContext<UseStageLevelProps>()

// Generate provider
interface Props {
  children: React.ReactNode
}

const StageLevelProvider = ({ children }: Props) => {
  const [stageLevel, setStageLevel] = useStageLevel(0)

  return <StageLevelContextProvider value={[stageLevel, setStageLevel]}>{children}</StageLevelContextProvider>
}

export { StageLevelProvider, useStageLevelContext }
