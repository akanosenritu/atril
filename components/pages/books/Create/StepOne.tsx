import {Box, Button, TextField, Typography} from "@mui/material"
import React, {useState} from "react"
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow'

type ParseResult = {
  type: "header" | "sentence",
  original: string,
}[]

type Props = {
  handleNext: (original: string, parsedParts: ParseResult) => void,
}

export const StepOne = (props: Props) => {
  const textInputRef = React.createRef<HTMLTextAreaElement>()
  const [parseResult, setParseResult] = useState<{parts: ParseResult, original: string}|null>(null)
  const onClickParse = () => {
    const text = textInputRef.current?.value
    if (!text) return
    const lines = text.split("\n").filter(line => line)
    const parts = lines.map(line => {
      const type: "header" | "sentence" = line.startsWith("#") ? "header": "sentence"
      const original = line.replace(/^#+/, "")
      return {type, original}
    })
    setParseResult({parts, original: text})
  }
  const onClickNext = () => {
    if (!parseResult) return
    props.handleNext(parseResult.original, parseResult.parts)
  }
  return <Box p={2}>
    <Box key={"explanation"} m={2}>
      <Box>Paste the text from which you want to create a book. Any line that starts with # will be parsed as a header. Empty lines will be ignored.</Box>
      <Box>If you are satisfied with the parse result, click the next button.</Box>
    </Box>
    <Box sx={{display: "flex", justifyContent: "space-between",}}>
      <Box sx={{width: 450, p: 2}} key={"textInput"}>
        <Box sx={{display: "flex", justifyContent: "center"}}>
          <Typography variant={"h6"}>Text</Typography>
        </Box>
        <Box sx={{height: "50vh", overflowY:"auto"}}>
          <TextField
            inputRef={textInputRef}
            fullWidth={true}
            minRows={22}
            multiline={true}
            spellCheck={false}
          />
        </Box>
      </Box>
      <Box sx={{width: 100, display: "flex", alignItems: "center", justifyContent: "center"}}>
        <Box>
          <Button onClick={onClickParse}>
            Parse: <DoubleArrowIcon />
          </Button>
        </Box>
      </Box>
      <Box key={"parseResult"} sx={{width: 450, p: 2,}}>
        <Box sx={{display: "flex", justifyContent: "center"}}>
          <Typography variant={"h6"}>Parse Result</Typography>
        </Box>
        <Box sx={{overflowY: "auto", height: "50vh"}}>
          {parseResult != null && parseResult.parts.map(part => <Box
            sx={{
              fontWeight: part.type === "header"? "bold": "",
              overflow: "hidden",
              height: "1.4rem",
              pl: part.type === "sentence" ? 1: 0,
            }} key={part.original}
          >{part.original}</Box>)}
        </Box>
      </Box>
    </Box>
    <Box sx={{display: "flex", justifyContent: "end"}}>
      <Button variant={"contained"} onClick={onClickNext} disabled={!parseResult}>Next</Button>
    </Box>
  </Box>
}