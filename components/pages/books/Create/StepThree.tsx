import {Box, Button} from "@mui/material"
import {Book} from "../../../../models/book"
import {useRouter} from "next/router"
import {useState} from "react"

type Props = {
  book: Book,
  handleNext: () => void,
}

type Status = "initial" | "uploading" | "uploaded" | "uploadFailed"

export const StepThree = (props: Props) => {
  const [status, setStatus] = useState<Status>("initial")

  const router = useRouter()
  const onClickReturn = async () => {
    await router.push("/books")
  }
  const onClickUpload = async () => {
    setStatus("uploading")
    try {
      await fetch("/api/books/create", {
        method: "POST",
        body: JSON.stringify(props.book),
        headers: {
          "Content-Type": "application/json",
        }
      }).then(res => {
        if (res.ok) setStatus("uploaded")
        else setStatus("uploadFailed")
      })
    } catch {
      setStatus("uploadFailed")
    }
  }
  return <Box p={2}>
    <Box key={"explanation"} m={2}>
      <Box>Check the data to be uploaded to the cloud.</Box>
    </Box>
    <Box sx={{overflowY: "auto", height: "50vh"}}>
      <pre>
        {JSON.stringify(props.book, null, 2)}
      </pre>
    </Box>
    <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
      <Box>
        <Button variant={"contained"} onClick={onClickUpload} disabled={status !== "initial"}>Upload</Button>
      </Box>
      <Box>
        {status === "uploading" && "Uploading... Please wait for a moment"}
        {status === "uploaded" && "Successfully uploaded."}
        {status === "uploadFailed" && "Upload failed."}
      </Box>
    </Box>
    <Box sx={{display: "flex", justifyContent: "end"}}>
      <Button variant={"contained"} onClick={onClickReturn}>Return</Button>
    </Box>
  </Box>
}