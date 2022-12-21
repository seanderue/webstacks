interface DatoNode {
  type: string
  children: {
    type: string
    value: string
  }[]
  key?: any
}

interface DatoNodes extends Array<DatoNode> {}

export default function parseDescriptionWithDelays(baseClassName: string, datoElements: DatoNodes, debug?: boolean) {
  const delayedElements = datoElements.map((element, i) => {
    if (element.children[0].value) {
      if (debug) console.log(element)
      const className = `${baseClassName} delay-${i + 1}`
      return (
        <p className={className} key={i}>
          {element.children[0].value}
        </p>
      )
    }
  })

  return delayedElements
}

// delayedElementsParser('element description', description)
