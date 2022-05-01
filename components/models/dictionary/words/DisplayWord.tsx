import { Box, Typography } from "@mui/material"
import {WordType} from "../../../../models/word"

export const DisplayWord = (props: {word: WordType}) => {
  const word = props.word
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
  </Box>
}