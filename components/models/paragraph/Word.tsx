import React from "react"
import {Box} from "@mui/material"

type Props = {
  text: string
}

export const Word: React.FC<Props> = props => {
  return <Box>
    {props.text}
  </Box>
}