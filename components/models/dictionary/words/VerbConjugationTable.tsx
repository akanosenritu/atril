import {Box, Typography} from "@mui/material"
import {Form, VerbType} from "../../../../models/word"

const PRIME_TABLE: {[tag: string]: number} = {
  // to avoid complexity, these tags are removed (or hidden) by setting its factor zero.
  "combined-form": 0,
  "vos-form": 0,

  infinitive: 2,
  gerund: 3,
  participle: 5,
  indicative: 7,
  subjunctive: 11,
  imperative: 13,
  present: 17,
  imperfect: 19,
  preterite: 23,
  future: 29,
  conditional: 31,
  affirmative: 37,
  negative: 41,
  masculine: 43,
  feminine: 47,
  "first-person": 53,
  "second-person": 59,
  "third-person": 61,
  singular: 67,
  plural: 71,
  "imperfect-se": 73,
  "imperfect-ra": 1,
}

const calculateIndexFromForm = (form: Form) => {
  return form.tags.map(tag => PRIME_TABLE[tag] == undefined? 1: PRIME_TABLE[tag]).reduce((a,b) => a*b)
}

const calculateIndexFromTags = (tags: string[]) => {
  return tags.map(tag => PRIME_TABLE[tag] || 1).reduce((a, b) => a*b)
}

const getFormRepresentationFromTags = (tags: string[], forms: {[p: string]: Form}) => {
  const form = forms[calculateIndexFromTags(tags)]
  return form? form["form"]: ""
}

const VerbConjugationTableTopRow = (props: {forms: {[p:string]: Form}}) => {
  return <Box sx={{display: "flex", "& .MuiBox-root": {mr: 1}}}>
    <Box>
      <b>infinitive</b> {getFormRepresentationFromTags(["infinitive"], props.forms)},
    </Box>
    <Box>
      <b>gerund</b> {getFormRepresentationFromTags(["gerund"], props.forms)},
    </Box>
    <Box>
      <b>past participle</b> {getFormRepresentationFromTags(["past", "participle"], props.forms)}
    </Box>
  </Box>
}

const VerbConjugationTableTitleRow = (props: {title: string}) => {
  return <Box sx={{fontSize: "1.1rem", fontWeight: "bold", mt: 1, ml: 1, textDecoration: "underline"}}>
    {props.title}
  </Box>
}

const VerbConjugationTableHeaderRow = () => {
  return <Box sx={{display: "flex", flexWrap: "nowrap", alignItems: "center"}}>
    <Box sx={{width: 100, flexShrink: 0}} />
    <Box sx={{"& .MuiBox-root": {width: 120, textAlign: "center", verticalAlign: "middle", fontWeight: "bold", fontColor: "darkgray"}, display: "flex", flexWrap: "nowrap", alignItems: "center"}} >
      <Box>yo</Box>
      <Box>tú</Box>
      <Box>él ella usted</Box>
      <Box>nosotros nosotras</Box>
      <Box>vosotros vosotras</Box>
      <Box>ellos ellas ustedes</Box>
    </Box>
  </Box>
}

const VerbConjugationTableIndicativeRow = (props: {forms: {[p:string]: Form}}) => {
  return <Box sx={{}}>
    {["present", "preterite", "imperfect", "future", "conditional"].map(tense => {
      return <Box key={"indicative " + tense} sx={{display: "flex", flexWrap: "nowrap", "& .MuiBox-root": {textAlign: "center"}}}>
        <Box sx={{width: 100}}>
          <b>{tense}</b>
        </Box>
        <Box sx={{"& .MuiBox-root": {width: 120, textAlign: "center", verticalAlign: "middle"}, display: "flex", flexWrap: "nowrap", alignItems: "center"}} >
          <Box>
            {getFormRepresentationFromTags(["indicative", "singular", "first-person", tense], props.forms)}
          </Box>
          <Box>
            {getFormRepresentationFromTags(["indicative", "singular", "second-person", tense], props.forms)}
          </Box>
          <Box>
            {getFormRepresentationFromTags(["indicative", "singular", "third-person", tense], props.forms)}
          </Box>
          <Box>
            {getFormRepresentationFromTags(["indicative", "plural", "first-person", tense], props.forms)}
          </Box>
          <Box>
            {getFormRepresentationFromTags(["indicative", "plural", "second-person", tense], props.forms)}
          </Box>
          <Box>
            {getFormRepresentationFromTags(["indicative", "plural", "third-person", tense], props.forms)}
          </Box>
        </Box>
      </Box>
    })}
  </Box>
}

const VerbConjugationTableSubjunctiveRow = (props: {forms: {[p:string]: Form}}) => {
  return <Box sx={{}}>
    {[["present"], ["imperfect-ra", "imperfect"], ["imperfect-se", "imperfect"], ["future"]].map(tense => {
      return <Box key={"indicative " + tense} sx={{display: "flex", flexWrap: "nowrap", "& .MuiBox-root": {textAlign: "center"}}}>
        <Box sx={{width: 100}}>
          <b>{tense[0]}</b>
        </Box>
        <Box sx={{"& .MuiBox-root": {width: 120, textAlign: "center", verticalAlign: "middle"}, display: "flex", flexWrap: "nowrap", alignItems: "center"}} >
          <Box>
            {getFormRepresentationFromTags(["subjunctive", "singular", "first-person"].concat(tense), props.forms)}
          </Box>
          <Box>
            {getFormRepresentationFromTags(["subjunctive", "singular", "second-person"].concat(tense), props.forms)}
          </Box>
          <Box>
            {getFormRepresentationFromTags(["subjunctive", "singular", "third-person"].concat(tense), props.forms)}
          </Box>
          <Box>
            {getFormRepresentationFromTags(["subjunctive", "plural", "first-person"].concat(tense), props.forms)}
          </Box>
          <Box>
            {getFormRepresentationFromTags(["subjunctive", "plural", "second-person"].concat(tense), props.forms)}
          </Box>
          <Box>
            {getFormRepresentationFromTags(["subjunctive", "plural", "third-person"].concat(tense), props.forms)}
          </Box>
        </Box>
      </Box>
    })}
  </Box>
}

const VerbConjugationTableImperativeRow = (props: {forms: {[p: string]: Form}}) => {
  return <Box sx={{}}>
    <Box key={"imperative "} sx={{display: "flex", flexWrap: "nowrap", "& .MuiBox-root": {textAlign: "center"}}}>
      <Box sx={{width: 100}}>
      </Box>
      <Box sx={{"& .MuiBox-root": {width: 120, textAlign: "center", verticalAlign: "middle", flexShrink: 0}, display: "flex", flexWrap: "nowrap", alignItems: "center"}} >
        <Box>

        </Box>
        <Box>
          {getFormRepresentationFromTags(["imperative", "singular", "second-person"], props.forms)}
        </Box>
        <Box>
          {getFormRepresentationFromTags(["imperative", "singular", "third-person"], props.forms)}
        </Box>
        <Box>
          {getFormRepresentationFromTags(["imperative", "plural", "first-person"], props.forms)}
        </Box>
        <Box>
          {getFormRepresentationFromTags(["imperative", "plural", "second-person"], props.forms)}
        </Box>
        <Box>
          {getFormRepresentationFromTags(["imperative", "plural", "third-person"], props.forms)}
        </Box>
      </Box>
    </Box>
  </Box>
}

export const VerbConjugationTable = (props: {word: VerbType}) => {
  const forms = Object.fromEntries(props.word.forms.map(form => [calculateIndexFromForm(form), form]))
  return <Box px={2} sx={{border: "1px solid darkgray", borderRadius: 5}}>
    <Typography variant={"h6"} sx={{borderBottom: "1px solid darkgray"}} py={0.3}>Conjugation</Typography>
    <Box my={2} ml={2}>
      <VerbConjugationTableTopRow forms={forms} />
      <hr />
      <VerbConjugationTableTitleRow title={"indicative"} />
      <VerbConjugationTableHeaderRow />
      <VerbConjugationTableIndicativeRow forms={forms} />
      <hr />
      <VerbConjugationTableTitleRow title={"subjunctive"} />
      <VerbConjugationTableHeaderRow />
      <VerbConjugationTableSubjunctiveRow forms={forms} />
      <hr />
      <VerbConjugationTableTitleRow title={"imperative"} />
      <VerbConjugationTableHeaderRow />
      <VerbConjugationTableImperativeRow forms={forms} />
    </Box>
  </Box>
}