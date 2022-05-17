import {PartMemo} from "../../../../models/memo"
import {Header} from "../../../../models/book"
import {Box} from "@mui/material"
import {Word} from "./Word"
import {useContext} from "react"
import {FocusedLineContext} from "../../../../contexts/FocusedLineContext"

type Props = {
  header: Header,
  memo?: PartMemo,
  updateMemo: (updatedMemo: PartMemo) => void,
}

export const DisplayHeader = (props: Props) => {
  const header = props.header
  const words = header.original.split(" ")
  const {focusedLine} = useContext(FocusedLineContext)
  const isLineFocused = focusedLine === props.header.original
  return <Box sx={{width: "100%", my: 2}}>
    <Box sx={{display: "flex", flexWrap: "wrap", "& .MuiBox-root": {margin: 0.5}, fontSize: "1.8rem", fontWeight: "bolder"}}>
      {words.map((word, index) => <Word key={`${index}-${word}`} text={word} index={index} isLineFocused={isLineFocused} />)}
    </Box>
  </Box>
}