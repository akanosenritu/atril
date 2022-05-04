import {GetStaticPaths, GetStaticProps, NextPage} from "next"
import Head from "next/head"
import fetch from "cross-fetch"
import {BookPage} from "../../components/pages/books/book"
import {Layout} from "../../components/layout/layout"
import {Book} from "../../models/book"


export const getStaticPaths: GetStaticPaths = async () => {
  const data = await fetch("https://atril2lirta.blob.core.windows.net/books/titles.json").then(res => res.json())
  return {
    paths: Object.keys(data).map(key => ({params: {bookId: key}})),
    fallback: "blocking"
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const bookId = context.params?.bookId as string
  const data = await fetch(`https://atril2lirta.blob.core.windows.net/books/${bookId}.json`).then(res => res.json())
  return {
    props: {
      book: data as Book
    },
    revalidate: 100,
  }
}

const Page: NextPage<{book: Book}> = (props ) => {
  return <Layout>
    <Head>
      <title>Atril - {props.book.title}</title>
    </Head>
    <BookPage book={props.book} />
  </Layout>
}

export default Page