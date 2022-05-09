import { Box, Tab, Tabs } from "@mui/material"
import React, {useContext, useState} from "react"
import {FocusedWordContext} from "../../../../contexts/FocusedWordContext"
import {FocusedLineContext} from "../../../../contexts/FocusedLineContext"
import {SidePanelLineInfoTab} from "./SidePanelLineInfoTab"
import {Book} from "../../../../models/book"
import {SidePanelExportTab} from "./SidePanelExportTab"
import {SidePanelSettingsTab} from "./SidePanelSettingsTab"

export const SidePanel = (props: {book: Book}) => {
  const focusedWordContextValue = useContext(FocusedWordContext)
  const focusedLineContextValue = useContext(FocusedLineContext)

  // for tabs
  const [tabIndex, setTabIndex] = useState(0)
  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabIndex(newValue)
  }
  return <Box sx={{height: "95vh", overFlowY: "auto", flexGrow: 0, width: 700}}>
    <Box>
      <Tabs value={tabIndex} onChange={handleTabChange}>
        <Tab label={"Line"} />
        <Tab label={"Word"} />
        <Tab label={"Export"} />
        <Tab label={"Settings"} />
      </Tabs>
    </Box>
    {tabIndex === 0 && <SidePanelLineInfoTab line={focusedLineContextValue.focusedLine} key={focusedLineContextValue.focusedLine} />}
    {tabIndex === 1 && <Box m={3}>FocusedWord: {focusedWordContextValue.focusedWord}</Box>}
    {tabIndex === 2 && <SidePanelExportTab book={props.book} />}
    {tabIndex === 3 && <SidePanelSettingsTab />}
  </Box>
}