import type { NextApiRequest, NextApiResponse } from 'next'
import {CosmosClient, SqlQuerySpec} from "@azure/cosmos"
import {BookMemo} from "../../../../models/memo"

const client = new CosmosClient(process.env["AZURE_COSMOSDB_ATRIL2LIRTA_CONNECTION_STRING"] || "")
const container = client.database("books").container("memos")

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{
    memo: BookMemo | null,
  }>
) {
  if (req.method === "GET") {
    const {bookId} = req.query
    const sqlQuery: SqlQuerySpec = {
      query: "select * from c where c.bookId = @bookId and c.userId = '1'",
      parameters: [
        {name: "@bookId", value: bookId as string}
      ]
    }
    const {resources: memos} = await container.items.query(sqlQuery).fetchAll()
    const result = memos.length > 0? memos[0]: null
    res.status(200).json({memo: result })
  } else if (req.method === "POST") {
    const bookMemo = req.body
    await container.items.create(bookMemo)
      .then(() => res.status(201).end())
      .catch(() => res.status(500).end())
  } else if (req.method === "PUT") {
    const bookMemo = req.body as BookMemo
    await container.item(bookMemo.id).replace(bookMemo)
      .then(() => res.status(204).end())
      .catch(() => res.status(500).end())
  }
}