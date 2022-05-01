import React, {useState, ReactNode} from "react"

type FocusedLineContextValueType = {
  focusedLine: string | null,
  setFocusedLine: (line: string | null) => void,
}

const defaultFocusedLineContextValue: FocusedLineContextValueType = {
  focusedLine: null,
  setFocusedLine: () => {},
}

export const FocusedLineContext = React.createContext<FocusedLineContextValueType>(defaultFocusedLineContextValue)

export const FocusedLineProvider = (props: {children: ReactNode}) => {
  const [focusedLine, setFocusedLine] = useState<string|null>(null)
  return <FocusedLineContext.Provider value={{focusedLine, setFocusedLine}}>
    {props.children}
  </FocusedLineContext.Provider>
}