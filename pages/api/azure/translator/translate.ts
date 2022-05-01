import type { NextApiRequest, NextApiResponse } from 'next'
import fetch from "cross-fetch"

const url = "https://api.cognitive.microsofttranslator.com/translate"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{
    translations: {
      text: string,
      to: string,
    }[]
  }>
) {
  const text = req.body
  const data = await fetch(url + "?api-version=3.0&from=es&to=en&to=ja", {
    method: "POST",
    headers: {
      "Ocp-Apim-Subscription-Key": process.env["AZURE_TRANSLATOR_SUBSCRIPTION_KEY"] || "",
      "Ocp-Apim-Subscription-Region": "japaneast",
      "Content-Type": "application/json; charset=UTF-8"
    },
    body: JSON.stringify([{text}])
  }).then(res => res.json())
  res.status(200).json({translations: data[0].translations})
}