import {Box, Checkbox, Paper, Typography} from "@mui/material"
import {useContext} from "react"
import {SettingsContext} from "../../../../contexts/SettingsContext"

export const SidePanelSettingsTab = () => {
  const {settings, updateSettings} = useContext(SettingsContext)

  const updateSettingDoesFocusedMoveAutomatically = (newValue: boolean) => {
    updateSettings({...settings, books: {...settings.books, doesFocusedMoveAutomatically: newValue}})
  }

  const doesFocusedMoveAutomatically = settings.books.doesFocusedMoveAutomatically

  return <Box sx={{"& > .MuiBox-root": {m: 1}, "& > :not(:first-child)":{mt: 2, pt: 1, borderTop: "1px dashed darkgray"}}}>
    <Box>
      <Typography variant={"h6"}>Focused Line</Typography>
      <Paper sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
        <Box p={1}>
          <Typography variant={"body2"}>
            Make focused line move automatically following the focus on the translation input.
          </Typography>
        </Box>
        <Box>
          <Checkbox checked={doesFocusedMoveAutomatically} onChange={e=>updateSettingDoesFocusedMoveAutomatically(e.target.checked)} />
        </Box>
      </Paper>
    </Box>
  </Box>
}