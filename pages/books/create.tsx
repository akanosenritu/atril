import {NextPage} from "next"
import {Layout} from "../../components/layout/layout"
import {Create} from "../../components/pages/books/Create"

const Page: NextPage = () => {
  return <Layout>
    <Create />
  </Layout>
}

export default Page