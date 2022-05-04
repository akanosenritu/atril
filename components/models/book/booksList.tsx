import React from "react"
import {Box, Typography} from "@mui/material"
import {BookInfo} from "./bookInfo"

type Props = {
  books: {[id: string]: {
    title: string,
    metadata: {
      author: string,
      description: string,
      createdAt: string,
    }
  }}
}

export const BooksList = (props: Props) => {
  return <Box>
    <Typography variant={"h4"}>Available books</Typography>
    <Box mt={3} pt={2} px={3} sx={{borderTop: "1px solid darkgray", width: "100%"}}>
      <Box sx={{width: "100%"}}>
        {Object.keys(props.books).map(bookId => {
          return <BookInfo key={bookId} bookName={props.books[bookId].title} bookId={bookId} bookMetadata={props.books[bookId].metadata}/>
        })}
      </Box>
    </Box>
  </Box>
}
