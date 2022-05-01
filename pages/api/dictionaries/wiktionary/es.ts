import type { NextApiRequest, NextApiResponse } from 'next'
import fetch from "cross-fetch"

const storageBaseUrl = "https://atril2lirta.blob.core.windows.net/dictionaries/enwiktionary/es/"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = await fetch("https://atril2lirta.blob.core.windows.net/books/titles.json").then(res => res.json())
  res.status(200).json(data)
}