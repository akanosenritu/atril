import React, {useState, ReactNode} from "react"

type FocusedWordContextValueType = {
  focusedWord: string | null,
  setFocusedWord: (word: string | null) => void,
}

const defaultFocusedWordContextValue: FocusedWordContextValueType = {
  focusedWord: null,
  setFocusedWord: () => {},
}

export const FocusedWordContext = React.createContext<FocusedWordContextValueType>(defaultFocusedWordContextValue)

export const FocusedWordProvider = (props: {children: ReactNode}) => {
  const [focusedWord, setFocusedWord] = useState<string|null>(null)
  return <FocusedWordContext.Provider value={{focusedWord, setFocusedWord}}>
    {props.children}
  </FocusedWordContext.Provider>
}