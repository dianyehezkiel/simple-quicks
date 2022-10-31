import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Quicks from '../components/Quicks'
import Task from '../components/tabs/task/Task'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Quicks</title>
        <meta name="description" content="Quick chat and todo with Quicks" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Quicks
        </h1>
        <Quicks />
      </main>
    </div>
  )
}

export default Home
