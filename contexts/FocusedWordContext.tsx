import React, {useState, ReactNode} from "react"

type FocusedWordContextValueType = {
  focusedWord: string | null,
  focusedWordIndex: number | null,
  setFocusedWord: (word: string | null, index: number | null) => void,
}

const defaultFocusedWordContextValue: FocusedWordContextValueType = {
  focusedWord: null,
  focusedWordIndex: null,
  setFocusedWord: () => {},
}

export const FocusedWordContext = React.createContext<FocusedWordContextValueType>(defaultFocusedWordContextValue)

export const FocusedWordProvider = (props: {children: ReactNode}) => {
  const [focusedWordData, setFocusedWordData] = useState<{word: string | null, index: number | null}>({word: null, index: null})
  const setFocusedWord = (word: string | null, index: number | null) => {
    setFocusedWordData({word, index})
  }
  return <FocusedWordContext.Provider value={{focusedWord: focusedWordData.word, focusedWordIndex: focusedWordData.index, setFocusedWord}}>
    {props.children}
  </FocusedWordContext.Provider>
}