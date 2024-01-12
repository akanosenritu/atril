import {GetStaticProps, NextPage} from "next"
import fetch from "cross-fetch"
import {BooksList} from "../components/models/book/booksList"
import {Layout} from "../components/layout/layout"
import Head from "next/head"
import {Box} from "@mui/material"

export const getStaticProps: GetStaticProps = async () => {
  const data = await fetch("https://atril2lirta.blob.core.windows.net/books/titles.json").then(res => res.json())
  return {
    props: {
      books: data
    },
    revalidate: 100,
  }
}

type Props = {
  books: {[id: string]: {
      title: string,
      metadata: {
        author: string,
        description: string,
        createdAt: string,
      }
    }}
}

const Page: NextPage<Props> = (props: Props) => {
  return <Layout>
    <Head>
      <title>Atril - Choose a book</title>
    </Head>
    <Box sx={{maxWidth: 1000, marginLeft: "auto", marginRight: "auto"}}>
      <BooksList books={props.books} />
    </Box>
  </Layout>
}

export default Page