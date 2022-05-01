import React, {useContext, useRef} from "react"
import {Box, TextField} from "@mui/material"
import {Word} from "./Word"
import {PartMemo} from "../../../../models/memo"
import {Sentence} from "../../../../models/book"
import {FocusedLineContext} from "../../../../contexts/FocusedLineContext"

type Props = {
  sentence: Sentence,
  memo?: PartMemo,
  updateMemo: (updatedMemo: PartMemo) => void,
}

export const DisplaySentence: React.FC<Props> = props => {
  // split the sentence into words by separating them by spaces
  const words = props.sentence.original.split(" ")

  // for translation input
  // it is uncontrolled and will be saved in cosmosDB on blur event.
  const translationInputRef = useRef<HTMLTextAreaElement|null>(null)
  const onTranslationInputBlur = () => {
    const value = translationInputRef.current?.value
    if (!value) return
    props.updateMemo({translation: value, partId: props.sentence.id})
  }

  // if the sentence is clicked, set it to the focused line
  const focusedLineContextValue = useContext(FocusedLineContext)
  const onClickSentence = () => {
    focusedLineContextValue.setFocusedLine(props.sentence.original)
  }

  return <Box sx={{width: "100%", my: 2, ml: 2}}>
    <Box sx={{display: "flex", flexWrap: "wrap", "& .MuiBox-root": {margin: 0.5}, fontSize: "1.2rem"}} onClick={onClickSentence}>
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