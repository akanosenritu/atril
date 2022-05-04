import * as uuid from "uuid"

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

export type BookMetadata = {
  author: string,
  createdAt: string,
  description: string,
}

export type Book = {
  id: string,
  title: string,
  metadata: BookMetadata,
  original: string,
  parts: Part[]
}

export const createBlankBook = () => {
  return {
    id: uuid.v4(),
    title: "",
    metadata: {
      author: "",
      createdAt: "",
      description: "",
    },
    original: "",
    parts: [],
  }
}