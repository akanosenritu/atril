import { Box, Tab, Tabs } from "@mui/material"
import React, {useContext, useState} from "react"
import {FocusedWordContext} from "../../../../contexts/FocusedWordContext"
import {FocusedLineContext} from "../../../../contexts/FocusedLineContext"
import {DisplaySupplementalInfoLine} from "./DisplaySupplementalInfoLine"

export const DisplaySupplementalInfo = () => {
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
      </Tabs>
    </Box>
    {tabIndex === 0 && <DisplaySupplementalInfoLine line={focusedLineContextValue.focusedLine} key={focusedLineContextValue.focusedLine} />}
    {tabIndex === 1 && <Box m={3}>FocusedWord: {focusedWordContextValue.focusedWord}</Box>}
  </Box>
}