import {NextPage} from "next"
import { useRouter } from "next/router"
import {BookPage} from "../../components/pages/books/book"
import {Layout} from "../../components/layout/layout"

const Page: NextPage = () => {
  const router = useRouter()
  const {bookId} = router.query
  return <Layout>
    <BookPage bookId={bookId as string} />
  </Layout>
}

export default Page