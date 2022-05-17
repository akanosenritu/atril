import React, {useContext, useRef} from "react"
import {Box, TextField} from "@mui/material"
import {PartMemo} from "../../../../models/memo"
import {Sentence} from "../../../../models/book"
import {FocusedLineContext} from "../../../../contexts/FocusedLineContext"
import {SettingsContext} from "../../../../contexts/SettingsContext"
import {DisplaySentenceMainPart} from "./DisplaySentenceMainPart"

type Props = {
  sentence: Sentence,
  lineNumber: number,
  memo?: PartMemo,
  updateMemo: (updatedMemo: PartMemo) => void,
}

export const DisplaySentence: React.FC<Props> = props => {
  // for translation input
  // it is uncontrolled and will be saved in cosmosDB on blur event.
  const translationInputRef = useRef<HTMLTextAreaElement|null>(null)
  const onBlurTranslationInput = () => {
    const value = translationInputRef.current?.value
    if (!value) return
    props.updateMemo({translation: value, partId: props.sentence.id})
  }

  // if the sentence is clicked, set it to the focused line
  const focusedLineContextValue = useContext(FocusedLineContext)
  const onClickSentence = () => {
    focusedLineContextValue.updateFocusedLine(props.sentence.original, props.sentence.id)
  }

  // if the translation input receives a focus and settings.books.doesFocusedMoveAutomatically is true,
  // set the focusedLine to this line.
  const {settings} = useContext(SettingsContext)
  const onFocusTranslationInput = () => {
    if (settings.books.doesFocusedMoveAutomatically) focusedLineContextValue.updateFocusedLine(props.sentence.original, props.sentence.id)
  }

  return <Box sx={{width: "100%", my: 2, ml: 2}}>
    <DisplaySentenceMainPart line={props.sentence.original} lineNumber={props.lineNumber} onClick={onClickSentence} />
    <Box sx={{p: 3}}>
      <TextField
        defaultValue={props.memo?.translation || ""}
        fullWidth={true}
        inputRef={translationInputRef}
        minRows={1}
        multiline={true}
        onBlur={onBlurTranslationInput}
        onFocus={onFocusTranslationInput}
        size={"small"}
        variant={"standard"}
      />
    </Box>
  </Box>
}