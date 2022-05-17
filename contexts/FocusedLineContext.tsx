import React, {useState, ReactNode} from "react"

type FocusedLineContextValueType = {
  focusedLine: string | null,
  focusedLineId: string | null,
  updateFocusedLine: (line: string | null, lineId: string | null) => void,
}

const defaultFocusedLineContextValue: FocusedLineContextValueType = {
  focusedLine: null,
  focusedLineId: null,
  updateFocusedLine: () => {},
}

export const FocusedLineContext = React.createContext<FocusedLineContextValueType>(defaultFocusedLineContextValue)

export const FocusedLineProvider = (props: {children: ReactNode}) => {
  const [focusedLine, setFocusedLine] = useState<string|null>(null)
  const [focusedLineId, setFocusedLineId] = useState<string|null>(null)
  const updateFocusedLine = (line: string | null, lineId: string | null) => {
    setFocusedLine(line)
    setFocusedLineId(lineId)
  }
  return <FocusedLineContext.Provider value={{focusedLine, focusedLineId, updateFocusedLine: updateFocusedLine}}>
    {props.children}
  </FocusedLineContext.Provider>
}