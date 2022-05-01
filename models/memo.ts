import * as uuid from "uuid"

export type PartMemo = {
  partId: string,
  translation: string,
}

export type BookMemo = {
  id: string,
  bookId: string,
  userId: string,
  memos: {
    [partId: string]: PartMemo
  }
}

export const createNewBookMemo = (bookId: string, userId: string): BookMemo => {
  return {
    id: uuid.v4(),
    bookId,
    userId,
    memos: {}
  }
}