import {BlobServiceClient} from "@azure/storage-blob"
import {Book} from "../../../models/book"

const blobServiceClient = BlobServiceClient.fromConnectionString(process.env["AZURE_STORAGE_ATRIL2LIRTA_CONNECTION_STRING"] || "")
const containerClient = blobServiceClient.getContainerClient("books")

type Result = {
  status: "success",
  book: Book,
} | {
  status: "error",
  reason: string,
}

export const uploadBook = async (book: Book, overwrite: boolean): Promise<Result> => {
  // create json file
  const blockBlobClient = containerClient.getBlockBlobClient(`${book.id}.json`)
  if (await blockBlobClient.exists() && !overwrite) {
    return {
      status: "error",
      reason: "a book of the same id already exists and overwrite option is not set."
    }
  }
  const serialized = JSON.stringify(book)
  await blockBlobClient.upload(serialized, serialized.length)
  return {
    status: "success",
    book: book
  }
}