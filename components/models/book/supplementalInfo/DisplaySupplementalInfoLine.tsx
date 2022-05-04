import {Box, Typography} from "@mui/material"
import {DisplayTranslation} from "./DisplayTranslation"
import {DisplayAnalysis} from "./DisplayAnalisis"

export const DisplaySupplementalInfoLine = (props: {line: string | null}) => {
  return <Box sx={{"& > .MuiBox-root": {m: 1}, "& > :not(:first-child)":{mt: 2}}}>
    <Box>
      <Typography variant={"h6"}>Original</Typography>
      <Box pl={1}>
        <Typography variant={"body1"}>{props.line || "No line is selected yet. Click a line on the main text to select it."}</Typography>
      </Box>
    </Box>
    <DisplayTranslation text={props.line} />
    <DisplayAnalysis text={props.line} />
  </Box>
}