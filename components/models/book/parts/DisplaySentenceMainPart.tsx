import {Box} from "@mui/material"
import {Word} from "./Word"
import {useContext} from "react"
import {FocusedLineContext} from "../../../../contexts/FocusedLineContext"

export const DisplaySentenceMainPart = (props: {line: string, onClick: () => void}) => {
  const {focusedLine} = useContext(FocusedLineContext)
  const borderLeft = focusedLine === props.line ? "5px solid lightpink": ""
  return <Box sx={{display: "flex", pl: 1, borderLeft, flexWrap: "wrap", "& .MuiBox-root": {margin: 0.5}, fontSize: "1.2rem"}} onClick={props.onClick}>
    {props.line.split(" ").map((word, index) => <Word key={`${index}-${word}`} text={word} />)}
  </Box>

}