export type HeadTemplate = {
  name: string,
  expansion: string,
}

export type Form = {
  form: string,
  source: string,
  tags: string[],
}

export type Sound = {
  ipa: string
}

export type Example = {
  text: string,
  english: string,
  type: "example",
}

export type Sense = {
  raw_glosses: string[],
  synonyms?: {
    word: string,
  }[],
  tags: string[],
  glosses: string[],
  categories: {
    name: string,
    kind: string,
    parents: string[],
    source: string,
  }[],
  examples?: Example[],
}

export type WordType = {
  pos: string,
  head_templates: HeadTemplate[],
  forms: Form[],
  word: string,
  sounds: Sound[],
  lang: "Spanish",
  lang_code: "es",
  senses: Sense[]
}

export type VerbType = Omit<WordType, "pos"> & {pos: "verb"}