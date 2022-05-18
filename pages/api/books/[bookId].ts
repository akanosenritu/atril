import type { NextApiRequest, NextApiResponse } from 'next'
import {Book} from "../../../models/book"
import fetch from "cross-fetch"
import {uploadBook} from "../../../lib/azure/storage/uploadBook"

// accepts GET and PUT methods.
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{
    book: Book,  // if the process succeeds
  }|{
    error: string,  // if the process fails
  }>
) {
  const {bookId} = req.query
  if (!bookId) {
    res.status(400).json({error: "bookId was not specified."})
    return
  }

  // only accepts GET and PUT methods.
  const method = req.method
  switch (method) {
    case "GET":
      const data = await fetch(`https://atril2lirta.blob.core.windows.net/books/${bookId}.json`).then(res => res.json())
      res.status(200).json({book: data as Book })
      return
    case "PUT":
      const uploadedData = req.body as Book
      const result = await uploadBook(uploadedData, true)
      if (result.status === "success") {
        res.status(200).json({book: uploadedData})
      } else {
        res.status(400).json({error: result.reason})
      }
      return
  }
  res.status(405).end()
}