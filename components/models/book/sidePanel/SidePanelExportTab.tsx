import {Book} from "../../../../models/book"
import {Box, Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography} from "@mui/material"
import {BookMemo} from "../../../../models/memo"

export const SidePanelExportTab = (props: {book: Book}) => {
  const onClickExport = async () => {
    const bookId = props.book.id
    const data = await fetch(`/api/books/memos/${bookId}`).then(res => res.json())
    if (!data.memo) return
    const memo = data.memo as BookMemo
    const partIds = props.book.parts.map(part => part.id)
    const exported = partIds.map(partId => memo.memos[partId]? memo.memos[partId].translation: "")
    await navigator.clipboard.writeText(exported.join("\n"))
  }
  return <Box m={3}>
    <Box sx={{display: "flex", justifyContent: "space-between"}}>
      <Typography variant={"h6"}>Export</Typography>
      <Box my={0.3}><Button onClick={onClickExport} variant={"contained"} size={"small"}>Copy to clipboard</Button></Box>
    </Box>
    <Box ml={2} sx={{fontSize: "0.8rem", textAlign: "left"}}>
      Exports the saved translations that you have inputted.
    </Box>
    <Box m={2}>
      <FormControl>
        <FormLabel>Include the original text?</FormLabel>
        <RadioGroup row={true}>
          <FormControlLabel control={<Radio size={"small"} disabled={true} value={false}/>} label={"Include"} />
          <FormControlLabel control={<Radio size={"small"}/>} label={"Exclude"} />
        </RadioGroup>
      </FormControl>
    </Box>
  </Box>
}