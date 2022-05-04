import {Box, Button} from "@mui/material"
import {BookMetadata} from "../../../models/book"
import {useRouter} from "next/router"

export const BookInfoDetailed = (props: {bookId: string, bookMetadata: BookMetadata}) => {
  const router = useRouter()
  const onClickOpen = async () => {
    await router.push(`/books/${props.bookId}`)
  }
  return <Box sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
    <Box sx={{flexGrow: 1}}>
      <Box>
        著者: {props.bookMetadata.author}
      </Box>
      <Box>
        作成日時: {props.bookMetadata.createdAt}
      </Box>
      <Box>
        {props.bookMetadata.description}
      </Box>
    </Box>
    <Box>
      <Button size={"small"} variant={"contained"} onClick={onClickOpen}>
        開く
      </Button>
    </Box>
  </Box>
}