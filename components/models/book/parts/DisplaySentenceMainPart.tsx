import {Box} from "@mui/material"
import {Word} from "./Word"
import {useContext} from "react"
import {FocusedLineContext} from "../../../../contexts/FocusedLineContext"

export const DisplaySentenceMainPart = (props: {line: string, lineNumber: number, onClick: () => void}) => {
  const {focusedLine} = useContext(FocusedLineContext)
  const isLineFocused = focusedLine === props.line
  const borderLeft = isLineFocused ? "5px solid lightpink": ""
  return <Box sx={{display: "flex", width: "100%", pl: 1, borderLeft, flexWrap: "wrap", "& .MuiBox-root": {margin: 0.5}, fontSize: "1.2rem"}} onClick={props.onClick}>
    {props.line.split(" ").map((word, index) => <Word key={`${index}-${word}`} text={word} index={index} isLineFocused={isLineFocused} />)}
    <Box sx={{marginLeft: "auto!important", mr:1, fontSize: "0.7rem", alignSelf: "end"}}>{props.lineNumber}</Box>
  </Box>
}