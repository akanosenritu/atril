import {Box, Typography} from "@mui/material"
import {DisplayTranslation} from "./DisplayTranslation"
import {DisplayAnalysis} from "./DisplayAnalisis"

export const DisplaySupplementalInfoLine = (props: {line: string | null}) => {
  return <Box sx={{"& > .MuiBox-root": {m: 1}, "& > :not(:first-child)":{mt: 2}}}>
    <Box>
      <Typography variant={"h6"}>Original</Typography>
      <Typography variant={"body1"}>{props.line}</Typography>
    </Box>
    <DisplayTranslation text={props.line} />
    <DisplayAnalysis text={props.line} />
  </Box>
}