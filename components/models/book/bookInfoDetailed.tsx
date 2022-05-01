import {Box, Button} from "@mui/material"
import useSWR from "swr"
import {Book} from "../../../models/book"
import {useRouter} from "next/router"

const fetcher = (url: string) => fetch(url).then(data => data.json())

export const BookInfoDetailed = (props: {bookId: string}) => {
  const {data, error} = useSWR<{book: Book}>(`/api/books/${props.bookId}`, fetcher)
  const router = useRouter()
  const onClickOpen = async () => {
    if (!data) return
    await router.push(`/books/${data.book.id}`)
  }
  if (!data) return <div>読込中...</div>
  return <Box sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
    <Box sx={{flexGrow: 1}}>
      <Box>
        著者: {data.book.metadata.author}
      </Box>
      <Box>
        {data.book.metadata.description}
      </Box>
    </Box>
    <Box>
      <Button size={"small"} variant={"contained"} onClick={onClickOpen}>
        開く
      </Button>
    </Box>
  </Box>
}