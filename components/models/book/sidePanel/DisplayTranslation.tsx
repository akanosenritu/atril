import {useState} from "react"
import Link from "next/link"
import {Box, Button, Typography} from "@mui/material"

export const DisplayTranslation = (props: {text: string | null}) => {
  const [translations, setTranslations] = useState<{to: string, text: string}[]>([])
  const onClickTranslate = async () => {
    if (!props.text) return
    const data = await fetch("/api/azure/translator/translate", {
      method: "POST",
      body: props.text
    }).then(res => res.json())
    setTranslations(data.translations)
  }

  return <Box>
    <Box sx={{display: "flex", justifyContent: "space-between"}}>
      <Typography variant={"h6"}>Translation</Typography>
      <Box my={0.3}><Button onClick={onClickTranslate} variant={"contained"} size={"small"}>Translate</Button></Box>
    </Box>
    <Box ml={2} sx={{fontSize: "0.8rem", textAlign: "left"}}>
      * Translations are generated using <Link href={"https://azure.microsoft.com/ja-jp/services/cognitive-services/translator/"}>Azure Translator</Link> by Microsoft.
    </Box>
    <Box ml={2} mt={1} sx={{"& > :not(:first-of-type)": {borderTop: "1px dashed darkgray", mt: 1, pt: 1}}}>
      {translations.map(translation => <Box key={translation.to} sx={{display: "flex", "& .MuiBox-root": {ml: 1}}}><Box>{translation.to}:</Box><Box>{translation.text}</Box></Box>)}
      {translations.length === 0 && <Box>No translation generated yet. Click the translate button.</Box>}
    </Box>
  </Box>
}