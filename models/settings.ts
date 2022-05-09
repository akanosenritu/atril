export type Settings = {
  books: {
    doesFocusedMoveAutomatically: boolean
  }
}

export const defaultSettings: Settings = {
  books: {
    doesFocusedMoveAutomatically: true,
  }
}

export const createDefaultSettings = (): Settings => defaultSettings
