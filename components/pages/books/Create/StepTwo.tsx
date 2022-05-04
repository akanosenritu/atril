import {Box, Button, Stack, TextField} from "@mui/material"
import {useState} from "react"

type Props = {
  handleNext: (title: string, author: string, description: string) => void,
}
export const StepTwo = (props: Props) => {
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [description, setDescription] = useState("")
  const onClickNext = () => {
    if (!title) return
    props.handleNext(title, author, description)
  }
  return <Box p={2}>
    <Box key={"explanation"} m={2}>
      <Box>Fill the form.</Box>
      <Box>If you are done writing, click the next button.</Box>
    </Box>
    <Box>
      <Stack sx={{"& .MuiTextField-root": {m: 2}}}>
        <TextField label={"Title"} InputLabelProps={{shrink: true}} value={title} onChange={(e)=>setTitle(e.target.value)} />
        <TextField label={"Author"} InputLabelProps={{shrink: true}} value={author} onChange={(e)=>setAuthor(e.target.value)} />
        <TextField label={"Description"} InputLabelProps={{shrink: true}} value={description} onChange={(e) => setDescription(e.target.value)}/>
      </Stack>
    </Box>
    <Box sx={{display: "flex", justifyContent: "end"}}>
      <Button variant={"contained"} onClick={onClickNext} disabled={!title}>Next</Button>
    </Box>
  </Box>
}