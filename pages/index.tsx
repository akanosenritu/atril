import {NextPage} from "next"
import {Layout} from "../components/layout/layout"
import {Box} from "@mui/material"
import Link from "next/link"

const Page: NextPage = () => {
  return <Layout>
    <Box m={3}>
      <Link href={"/books"}>books</Link>
    </Box>
    <Box m={3}>
      <Link href={"/dictionary"}>dictionary</Link>
    </Box>
  </Layout>
}

export default Page