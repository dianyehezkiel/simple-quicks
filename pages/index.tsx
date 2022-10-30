import type { NextPage } from 'next'
import Head from 'next/head'
import { MouseEventHandler, useState } from 'react'
import InboxButton from '../components/buttons/InboxButton'
import InboxTab from '../components/tabs/InboxTab'
import MainButton from '../components/buttons/MainButton'
import TaskButton from '../components/buttons/TaskButton'
import TaskTab from '../components/tabs/TaskTab'
import styles from '../styles/Home.module.css'
import Quicks from '../components/Quicks'

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
