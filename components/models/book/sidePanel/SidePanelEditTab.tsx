import {Book, Part} from "../../../../models/book"
import {Box, Button, TextField, Typography} from "@mui/material"
import {useContext, useRef, useState} from "react"
import {FocusedLineContext} from "../../../../contexts/FocusedLineContext"

type Status = "initial" | "updating" | "updated" | "updateFailed"

export const SidePanelEditTab = (props: {book: Book}) => {
  // status
  const [status, setStatus] = useState<Status>("initial")

  const {focusedLine, focusedLineId} = useContext(FocusedLineContext)
  const inputRef = useRef<HTMLTextAreaElement>()
  const onClickSave = async () => {
    setStatus("updating")

    const updatedText = inputRef.current?.value
    if (!updatedText) {
      setStatus("updateFailed")
      return
    }

    // search for the part whose id is the same as focusedLineId
    const partIndex = props.book.parts.findIndex(part => part.id === focusedLineId)
    if (partIndex === -1) {
      setStatus("updateFailed")
      return
    }

    // create the new part
    const newPart: Part = {
      ...props.book.parts[partIndex],
      original: updatedText
    }

    // update the parts array with the new part
    const newParts = [...props.book.parts]
    newParts[partIndex] = newPart

    // update the book
    const newBook = {
      ...props.book,
      parts: newParts
    }

    // upload the updated book
    const res = await fetch(`/api/books/${props.book.id}`, {
      method: "PUT",
      body: JSON.stringify(newBook),
      headers: {
        "Content-Type": "application/json",
      }
    })
    if (res.ok) setStatus("updated")
    else setStatus("updateFailed")
  }

  const onClickDiscard = () => {
    if (inputRef.current && inputRef.current.value && focusedLine) {
      inputRef.current.value = focusedLine
    }
  }
  return  <Box m={3}>
    <Box sx={{display: "flex", justifyContent: "space-between"}}>
      <Typography variant={"h6"}>Edit</Typography>
    </Box>
    <Box sx={{display: "flex", lineHeight: "2rem", flexDirection: "column"}}>
      <Box m={1}>
        <Box sx={{marginLeft: "auto", marginRight: "auto", fontWeight: "bold", textAlign: "center", my: 1}}>
          Original
        </Box>
        <Box>
          {focusedLine}
        </Box>
      </Box>
      <Box m={1}>
        <Box sx={{marginLeft: "auto", marginRight: "auto", fontWeight: "bold", textAlign: "center", my: 1}}>
          Edited
        </Box>
        <Box>
          <TextField multiline={true} fullWidth={true} minRows={2} defaultValue={focusedLine} spellCheck={false} inputRef={inputRef}/>
        </Box>
      </Box>
    </Box>
    <Box sx={{display: "flex", flexDirection: "row-reverse", "& .MuiButton-root": {mx: 1, }}}>
      <Button color={"success"} variant={"contained"} size={"small"} onClick={onClickSave}>Save</Button>
      <Button color={"error"} variant={"contained"} size={"small"} onClick={onClickDiscard}>Reset</Button>
      <Box sx={{flexGrow: 1}}>
        {status === "updating" && "Updating... Please wait for a moment."}
        {status === "updated" && "The book has been updated."}
        {status === "updateFailed" && "Update failed."}
      </Box>
    </Box>
  </Box>
}