import { Box, Typography } from "@mui/material"
import {VerbType, WordType} from "../../../../models/word"
import {VerbConjugationTable} from "./VerbConjugationTable"
import {DisplayWord} from "./DisplayWord"

export const DisplayVerbMiscellaneousForm = (props: {verb: VerbType}) => {
  return <DisplayWord word={props.verb} />
}

export const DisplayVerbIndefiniteForm = (props: {verb: VerbType}) => {
  const word = props.verb
  return <Box>
    <Typography variant={"h5"}>{word.word}</Typography>
    <Typography variant={"h6"}>{word.pos}</Typography>
    <Box>{word.head_templates[0].expansion}</Box>
    <Box key={"senses"} ml={2} my={2}>
      {word.senses.map((sense, index) => <Box key={index} my={1}>
        {index+1}. {sense.raw_glosses}
        <Box>
          {sense.examples && sense.examples.map(example => <Box key={example.text} ml={4} my={1}>
            {example.text} ― {example.english}
          </Box>)}
        </Box>
      </Box>)}
    </Box>
    <Box ml={3} mt={3}>
      <VerbConjugationTable word={word as VerbType} />
    </Box>
  </Box>
}

export const DisplayVerb = (props: {verb: VerbType}) => {
  const isVerbForm = props.verb.head_templates[0].name === "head"
  return isVerbForm ?
    <DisplayVerbMiscellaneousForm verb={props.verb} /> :
    <DisplayVerbIndefiniteForm verb={props.verb} />
}