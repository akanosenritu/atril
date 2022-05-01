export type Sentence = {
  id: string,
  original: string,
  type: "sentence"
}

export type Header = {
  id: string,
  original: string,
  type: "header"
}

export type Part = Sentence | Header

export type BookMetaData = {
  author: string,
  createdAt: string,
  description: string,
}

export type Book = {
  id: string,
  metadata: BookMetaData,
  original: string,
  parts: Part[]
}