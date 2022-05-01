import type { NextApiRequest, NextApiResponse } from 'next'
import {Book} from "../../../models/book"
import fetch from "cross-fetch"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{
    book: Book,
  }>
) {
  const {bookId} = req.query
  if (!bookId) {
    res.status(400).end()
    return
  }
  const data = await fetch(`https://atril2lirta.blob.core.windows.net/books/${bookId}.json`).then(res => res.json())
  res.status(200).json({book: data as Book })
}