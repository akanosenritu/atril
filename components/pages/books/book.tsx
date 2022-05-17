import {Box} from "@mui/material"
import useSWR from "swr"
import {Book} from "../../../models/book"
import {BookMemo, createNewBookMemo, PartMemo} from "../../../models/memo"
import {DisplayPart} from "../../models/book/parts/DisplayPart"
import {FocusedWordProvider} from "../../../contexts/FocusedWordContext"
import {FocusedLineProvider} from "../../../contexts/FocusedLineContext"
import {SidePanel} from "../../models/book/sidePanel/SidePanel"

const fetcher = (url: string) => fetch(url).then(data => data.json())

export const BookPage = (props: {book: Book}) => {
  // memo attached to the book
  const {data: memoData} = useSWR<{memo: BookMemo | null}>(`/api/books/memos/${props.book.id}`, fetcher)
  const updateSentenceMemo = async (updatedSentenceMemo: PartMemo) => {
    // if memoData.memo is not set, create a new BookMemo
    if (!memoData?.memo) {
      const bookMemo = createNewBookMemo(props.book.id, "1")
      bookMemo.memos[updatedSentenceMemo.partId] = updatedSentenceMemo
      await fetch(`/api/books/memos/${props.book.id}`, {
        method: "POST",
        body: JSON.stringify(bookMemo),
        headers: {
          "Content-Type": "application/json",
        }
      })
      return
    }
    // if already created, update it
    const bookMemo = memoData.memo
    bookMemo.memos[updatedSentenceMemo.partId] = updatedSentenceMemo
    await fetch(`/api/books/memos/${props.book.id}`, {
      method: "PUT",
      body: JSON.stringify(bookMemo),
      headers: {
        "Content-Type": "application/json",
      }
    })
    return
  }

  // for convenience
  const parts = props.book.parts

  return<FocusedWordProvider>
    <FocusedLineProvider>
      <Box sx={{display: "flex", justifyContent: "space-between"}}>
        <Box sx={{width: 1000, height: "100vh", p: 3, borderRight: "3px dashed darkgray", overflowY: "auto", flexGrow: 1}}>
          {parts.map((part, index) => <DisplayPart
            part={part}
            lineNumber={index+1}
            key={part.id}
            updateMemo={updateSentenceMemo}
            memo={memoData?.memo?.memos ? memoData.memo.memos[part.id]: undefined}
          />)}
        </Box>
        <SidePanel book={props.book} />
      </Box>
    </FocusedLineProvider>
  </FocusedWordProvider>
}