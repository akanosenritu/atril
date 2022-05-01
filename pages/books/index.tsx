import {NextPage} from "next"
import {BooksList} from "../../components/models/book/booksList"
import {Layout} from "../../components/layout/layout"
import Head from "next/head"

const Page: NextPage = () => {
  return <Layout>
    <Head>
      <title>Atril - テキストを選択する</title>
    </Head>
    <BooksList />
  </Layout>
}

export default Page