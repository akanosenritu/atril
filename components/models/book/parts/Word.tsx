import React, {useContext} from "react"
import {Box} from "@mui/material"
import {FocusedWordContext} from "../../../../contexts/FocusedWordContext"

type Props = {
  text: string,
  index: number,
  isLineFocused: boolean,
}

export const Word: React.FC<Props> = props => {
  const {focusedWord, focusedWordIndex, setFocusedWord}= useContext(FocusedWordContext)
  const onClickWord = () => {
    setFocusedWord(props.text, props.index)
  }
  const isWordFocused = props.isLineFocused && focusedWordIndex === props.index && focusedWord === props.text
  const borderBottom = isWordFocused ? "2px solid lightpink" : ""
  return <Box onClick={onClickWord} sx={{borderBottom}}>
    {props.text}
  </Box>
}