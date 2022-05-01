import React from "react"
import useSWR from "swr"
import {Box, Typography} from "@mui/material"
import {BookInfo} from "./bookInfo"

const fetcher = (url: string) => fetch(url).then(data => data.json())

export const BooksList: React.FC = () => {
  const {data: bookDataFilesData} = useSWR<{bookIds: string[] }>("/api/books/list-book-data-files", fetcher)
  const {data: bookTitlesData} = useSWR<{titles: {[id: string]: string}}>("/api/books/list-book-titles", fetcher)

  if (!bookDataFilesData || !bookTitlesData) return <div>読込中。</div>
  const availableBookIds = bookDataFilesData.bookIds.filter(bookId => bookTitlesData.titles.hasOwnProperty(bookId))
  return <Box>
    <Typography variant={"h4"}>現在利用可能なテキスト</Typography>
    <Box mt={3} pt={2} px={3} sx={{borderTop: "1px solid darkgray", width: "100%"}}>
      <Box sx={{width: "100%"}}>
        {availableBookIds.map(bookId => {
          return <BookInfo key={bookId} bookName={bookTitlesData.titles[bookId]} bookId={bookId} />
        })}
      </Box>
    </Box>
  </Box>
}
