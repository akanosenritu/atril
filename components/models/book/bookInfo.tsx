import {Box, IconButton, Typography} from "@mui/material"
import React, {useState} from "react"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import {BookInfoDetailed} from "./bookInfoDetailed"

export const BookInfo = (props: {bookName: string, bookId: string,}) => {
  const [isExpanded, setIsExpanded] = useState(false)
  return <Box>
    <Box sx={{display: "flex", justifyContent: "space-between"}}>
      <Typography variant={"h5"}>{props.bookName}</Typography>
      <IconButton onClick={()=>setIsExpanded(!isExpanded)}>
        {isExpanded? <ExpandLessIcon/> : <ExpandMoreIcon />}
      </IconButton>
    </Box>
    {isExpanded && <Box ml={2}>
      <BookInfoDetailed bookId={props.bookId} />
    </Box>}
  </Box>
}