import React, {useContext} from "react"
import {Box} from "@mui/material"
import {FocusedWordContext} from "../../../../contexts/FocusedWordContext"

type Props = {
  text: string
}

export const Word: React.FC<Props> = props => {
  const focusedWordContextValue = useContext(FocusedWordContext)
  const onClickWord = () => {
    focusedWordContextValue.setFocusedWord(props.text)
  }
  return <Box onClick={onClickWord}>
    {props.text}
  </Box>
}