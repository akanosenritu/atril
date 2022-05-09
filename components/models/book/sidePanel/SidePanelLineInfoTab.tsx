import {Box} from "@mui/material"
import {DisplayTranslation} from "./DisplayTranslation"
import {DisplayAnalysis} from "./DisplayAnalisis"
import {DisplayOriginal} from "./DisplayOriginal"

export const SidePanelLineInfoTab = (props: {line: string | null}) => {
  return <Box sx={{"& > .MuiBox-root": {m: 1}, "& > :not(:first-of-type)":{mt: 2, pt: 1, borderTop: "1px dashed darkgray"}}}>
    <DisplayOriginal text={props.line} />
    <DisplayTranslation text={props.line} />
    <DisplayAnalysis text={props.line} />
  </Box>
}