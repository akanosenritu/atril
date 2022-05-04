import type { NextApiRequest, NextApiResponse } from 'next'
import {BlobServiceClient} from "@azure/storage-blob"
import fetch from "cross-fetch"

const blobServiceClient = BlobServiceClient.fromConnectionString(process.env["AZURE_STORAGE_ATRIL2LIRTA_CONNECTION_STRING"] || "")
const containerClient = blobServiceClient.getContainerClient("books")

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{}>
) {
  const data = req.body
  const id = data.id

  // create json file
  const blockBlobClient = containerClient.getBlockBlobClient(`${id}.json`)
  if (await blockBlobClient.exists()) {
    res.status(400).json({error: "a book of this id already exists."})
    return
  }
  const serialized = JSON.stringify(data)
  await blockBlobClient.upload(serialized, serialized.length)

  // update the list file
  const list = await fetch("https://atril2lirta.blob.core.windows.net/books/titles.json").then(res => res.json())
  list[id] = {
    title: data.title,
    metadata: data.metadata,
  }
  const serializedList = JSON.stringify(list)
  const blockBlobClientForList = containerClient.getBlockBlobClient("titles.json")
  await blockBlobClientForList.upload(serializedList, serializedList.length)
  res.status(201).end()
}