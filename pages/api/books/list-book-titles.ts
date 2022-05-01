import type { NextApiRequest, NextApiResponse } from 'next'
import fetch from "cross-fetch"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{
   titles: {
     [id: string]: string,
   }
  }>
) {
  const data = await fetch("https://atril2lirta.blob.core.windows.net/books/titles.json").then(res => res.json())
  res.status(200).json(data)
}