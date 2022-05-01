import {Box} from "@mui/material"
import useSWR from "swr"
import {Book} from "../../models/book"
import {BookMemo, createNewBookMemo, PartMemo} from "../../models/memo"
import {DisplayPart} from "../models/parts/DisplayPart"

const fetcher = (url: string) => fetch(url).then(data => data.json())

export const BookPage = (props: {bookId: string}) => {
  const {data: bookData} = useSWR<{book: Book}>(`/api/books/${props.bookId}`, fetcher)
  const {data: memoData} = useSWR<{memo: BookMemo | null}>(`/api/books/memos/${props.bookId}`, fetcher)
  const updateSentenceMemo = async (updatedSentenceMemo: PartMemo) => {
    // if memoData.memo is not set, create a new BookMemo
    if (!memoData?.memo) {
      const bookMemo = createNewBookMemo(props.bookId, "1")
      bookMemo.memos[updatedSentenceMemo.partId] = updatedSentenceMemo
      await fetch(`/api/books/memos/${props.bookId}`, {
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
    await fetch(`/api/books/memos/${props.bookId}`, {
      method: "PUT",
      body: JSON.stringify(bookMemo),
      headers: {
        "Content-Type": "application/json",
      }
    })
    return
  }
  if (!bookData) return <div>読込中...</div>
  const parts = bookData.book.parts
  return <Box>
    {parts.map(part => <DisplayPart
      part={part}
      key={part.id}
      updateMemo={updateSentenceMemo}
      memo={memoData?.memo?.memos ? memoData.memo.memos[part.id]: undefined}
    />)}
  </Box>
}