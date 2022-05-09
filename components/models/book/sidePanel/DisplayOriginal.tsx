import {Box, Button, Typography} from "@mui/material"

export const DisplayOriginal = (props: {text: string | null}) => {
  const onClickCopy = async () => {
    if (!props.text) return
    await navigator.clipboard.writeText(props.text)
  }
  return <Box>
    <Box sx={{display: "flex", justifyContent: "space-between"}}>
      <Typography variant={"h6"}>Original</Typography>
      <Box my={0.3}><Button onClick={onClickCopy} variant={"contained"} size={"small"}>Copy</Button></Box>
    </Box>
    <Box pl={1}>
      <Typography variant={"body1"}>{props.text || "No line is selected yet. Click a line on the main text to select it."}</Typography>
    </Box>
  </Box>

}