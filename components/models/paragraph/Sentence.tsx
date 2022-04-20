import React from "react"
import {Box, TextField} from "@mui/material"
import {Word} from "./Word"

type Props = {
  text: string
}

export const Sentence: React.FC<Props> = props => {
  const words = props.text.split(" ")
  return <Box sx={{width: "100%", my: 2, display: "flex"}}>
    <Box sx={{display: "flex", flexWrap: "wrap", "& .MuiBox-root": {margin: 0.5}, width: "50%", minWidth: 300, fontSize: "1.2rem"}}>
      {words.map(word => <Word key={word} text={word} />)}
    </Box>
    <Box sx={{width: "50%", minWidth: 300, p: 1}}>
      <TextField multiline={true} minRows={1} fullWidth={true} size={"small"} variant={"standard"}/>
    </Box>
  </Box>
}