import {useState} from "react"
import Link from "next/link"
import {Box, Button, Typography} from "@mui/material"
import {Token} from "../../../../models/analysis"

type Status = "initial" | "analyzing" | "analyzed" | "analysisFailed"

export const DisplayAnalysis = (props: {text: string | null}) => {
  const [tokens, setTokens] = useState<Token[]>([])
  const [status, setStatus] = useState<Status>("initial")
  const onClickAnalyze = async () => {
    if (!props.text) return
    setStatus("analyzing")
    try {
      const data = await fetch("https://atril2.azurewebsites.net/analyze", {
        method: "POST",
        body: props.text
      }).then(res => res.json())
      setTokens(data.analyzedTokens)
      setStatus("analyzed")
    } catch (e) {
      setStatus("analysisFailed")
    }
  }

  return <Box>
    <Box sx={{display: "flex", justifyContent: "space-between"}}>
      <Typography variant={"h6"}>Analysis</Typography>
      <Box my={0.3}><Button onClick={onClickAnalyze} variant={"contained"} size={"small"}>Analyze</Button></Box>
    </Box>
    <Box ml={2} sx={{fontSize: "0.8rem", textAlign: "left"}}>
      * Analysis is generated using <Link href={"https://spacy.io/"}>Spacy</Link> with dataset <Link href={"https://spacy.io/models/es#es_core_news_sm"}>es_core_news_sm</Link>, which is run on a instance of Azure Web Apps.
    </Box>
    <Box ml={2} mt={1} sx={{display: "flex", flexWrap: "wrap", "& > .MuiBox-root": {m: 2}}}>
      <Box sx={{fontWeight: "bold", borderRight: "2px dotted black", textAlign: "center", pr: 1}}>
        <Box>Text</Box>
        <Box>Lemma</Box>
        <Box>POS</Box>
        <Box>Dep.</Box>
      </Box>
      {tokens.map(token => <Box key={token.text}>
        <Box>{token.text}</Box>
        <Box>{token.lemma_}</Box>
        <Box>{token.tag_}</Box>
        <Box>{token.dep_}</Box>
      </Box>)}
      {status === "initial" && <Box sx={{display: "flex", alignItems: "center"}}><Box>No analysis generated yet. Click the analyze button.</Box></Box>}
      {status === "analyzing" && <Box sx={{display: "flex", alignItems: "center"}}><Box>Analyzing the line. Please wait for a moment.</Box></Box>}
      {status === "analysisFailed" && <Box sx={{display: "flex", alignItems: "center"}}><Box>Analysis failed.</Box></Box>}
    </Box>
  </Box>
}