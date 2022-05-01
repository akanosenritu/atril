import {PartMemo} from "../../../../models/memo"
import {Header, Part} from "../../../../models/book"
import {DisplaySentence} from "./DisplaySentence"
import { Box } from "@mui/material"
import {Word} from "./Word"

type Props = {
  header: Header,
  memo?: PartMemo,
  updateMemo: (updatedMemo: PartMemo) => void,
}

export const DisplayHeader = (props: Props) => {
  const header = props.header
  const words = header.original.split(" ")
  return <Box sx={{width: "100%", my: 2}}>
    <Box sx={{display: "flex", flexWrap: "wrap", "& .MuiBox-root": {margin: 0.5}, fontSize: "1.8rem", fontWeight: "bolder"}}>
      {words.map(word => <Word key={word} text={word} />)}
    </Box>
  </Box>
}