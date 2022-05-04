import {Box, Step, StepLabel, Stepper} from "@mui/material"
import React, {useState} from "react"
import * as uuid from "uuid"
import {StepOne} from "./Create/StepOne"
import {Book, createBlankBook, Part} from "../../../models/book"
import {StepTwo} from "./Create/StepTwo"
import {format, zonedTimeToUtc} from "date-fns-tz"
import {StepThree} from "./Create/StepThree"

export const Create = () => {
  const [activeStep, setActiveStep] = useState(0)
  const [book, setBook] = useState<Book>(createBlankBook())
  const handleNextStepOne = (original: string, parts: Omit<Part, "id">[]) => {
    const updatedBook = {...book}
    updatedBook.original = original
    updatedBook.parts = parts.map(part => ({...part, id: uuid.v4()}))
    setBook(updatedBook)
    setActiveStep(1)
  }
  const handleNextStepTwo = (title: string, author: string, description: string) => {
    const now = new Date()
    setBook({...book, title: title, metadata: {
      author,
      description,
      createdAt: format(
        zonedTimeToUtc(now, format(now, "X")),
        "yyyy-MM-dd'T'HH:mm:ssXXX"
      )
    }})
    setActiveStep(2)
  }
  const handleNextStepThree = () => {}
  return <Box sx={{width: 1000, marginRight: "auto", marginLeft: "auto"}}>
    <Stepper activeStep={activeStep}>
      <Step>
        <StepLabel>Input the text</StepLabel>
      </Step>
      <Step>
        <StepLabel>Set the metadata</StepLabel>
      </Step>
      <Step>
        <StepLabel>Upload</StepLabel>
      </Step>
    </Stepper>
    {activeStep === 0 && <StepOne handleNext={handleNextStepOne} />}
    {activeStep === 1 && <StepTwo handleNext={handleNextStepTwo} />}
    {activeStep === 2 && <StepThree book={book} handleNext={handleNextStepThree} />}
  </Box>
}