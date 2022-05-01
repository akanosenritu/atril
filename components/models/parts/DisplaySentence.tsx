import React, {useRef} from "react"
import {Box, TextField} from "@mui/material"
import {Word} from "./Word"
import {PartMemo} from "../../../models/memo"
import {Sentence} from "../../../models/book"

type Props = {
  sentence: Sentence,
  memo?: PartMemo,
  updateMemo: (updatedMemo: PartMemo) => void,
}

export const DisplaySentence: React.FC<Props> = props => {
  const words = props.sentence.original.split(" ")
  const translationInputRef = useRef<HTMLTextAreaElement|null>(null)
  const onTranslationInputBlur = () => {
    const value = translationInputRef.current?.value
    if (!value) return
    props.updateMemo({translation: value, partId: props.sentence.id})
  }
  return <Box sx={{width: "100%", my: 2, ml: 2}}>
    <Box sx={{display: "flex", flexWrap: "wrap", "& .MuiBox-root": {margin: 0.5}, fontSize: "1.2rem"}}>
      {words.map(word => <Word key={word} text={word} />)}
    </Box>
    <Box sx={{p: 3}}>
      <TextField
        defaultValue={props.memo?.translation || ""}
        fullWidth={true}
        inputRef={translationInputRef}
        minRows={1}
        multiline={true}
        onBlur={onTranslationInputBlur}
        size={"small"}
        variant={"standard"}
      />
    </Box>
  </Box>
}