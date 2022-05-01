import React from "react"
import {Box} from "@mui/material"

export const Layout: React.FC<{children: React.ReactNode}> = (props) => {
  return <Box sx={{maxWidth: 1000, marginLeft: "auto", marginRight: "auto"}}>
    {props.children}
  </Box>
}