import type { NextApiRequest, NextApiResponse } from 'next'
import {BlobServiceClient} from "@azure/storage-blob"

const blobServiceClient = BlobServiceClient.fromConnectionString(process.env["AZURE_STORAGE_ATRIL2LIRTA_CONNECTION_STRING"] || "")
const containerClient = blobServiceClient.getContainerClient("books")

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{
    bookIds: string[],
  }>
) {
  const bookDataFileNames: string[] = []
  for await (const book of containerClient.listBlobsFlat()) {
    const name = book.name
    if (name.endsWith(".json")) {
      const nameWithoutExt = book.name.slice(0, -5)
      bookDataFileNames.push(nameWithoutExt)
    }
  }
  res.status(200).json({ bookIds: bookDataFileNames })
}