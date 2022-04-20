import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import useSWR from "swr"
import {Sentence} from "../components/models/paragraph/Sentence"
import {Paragraph} from "../components/models/paragraph/Paragraph"

const fetcher = (url: string) => fetch(url).then(res => res.json())

const Home: NextPage = () => {
  const {data} = useSWR("/api/text", fetcher)
  if (!data) return <div>Loading...</div>
  const paragraphs = data.text.split("\n") as string[]
  return<div className={styles.container}>
    {paragraphs.map(paragraph => <Paragraph key={paragraph} text={paragraph} />)}
  </div>
}

export default Home
