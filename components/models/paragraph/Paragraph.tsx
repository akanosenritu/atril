import React from "react"
import {Box} from "@mui/material"
import {Sentence} from "./Sentence"

type Props = {
  text: string,
}

export const Paragraph: React.FC<Props> = props => {
  const sentences = props.text
    .split(".")
    .map(sentence => sentence.trim())
    .filter(sentence => sentence)
    .map(sentence => sentence + ".")
  return <Box>
    {sentences.map(sentence => <Sentence key={sentence} text={sentence} />)}
  </Box>
}
