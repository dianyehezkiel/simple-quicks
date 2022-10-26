import type { NextPage } from 'next'
import Head from 'next/head'
import { MouseEventHandler, useState } from 'react'
import InboxButton from '../components/InboxButton'
import InboxTab from '../components/InboxTab'
import MainButton from '../components/MainButton'
import TaskButton from '../components/TaskButton'
import TaskTab from '../components/TaskTab'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const [showButtons, setShowButtons] = useState(false);
  const [showLabels, setShowLabels] = useState(false);
  const [selectInbox, setSelectInbox] = useState(false);
  const [selectTask, setSelectTask] = useState(false);
  const [showMainButton, setShowMainButton] = useState(true);
  const [showInbox, setShowInbox] = useState(false);
  const [showTask, setShowTask] = useState(false);

  const closeAllTabs = () => {
    setShowInbox(false);
    setShowTask(false);
    setSelectInbox(false);
    setSelectTask(false);
    setShowMainButton(true);
  }

  const onClickMain: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    closeAllTabs();
    setShowButtons(!showButtons && showMainButton);
    setShowLabels(!showLabels && showMainButton);
  }

  const onClickInbox: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    closeAllTabs();
    setShowInbox(!showInbox);
    setSelectInbox(true);
    setShowButtons(false);
    setShowMainButton(false);
    setShowLabels(false);
  }

  const onClickTask: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    closeAllTabs();
    setShowTask(!showTask);
    setSelectTask(true);
    setShowButtons(false)
    setShowMainButton(false)
    setShowLabels(false);
  }

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
        
      <InboxButton showButton={showButtons} showLabel={showLabels} selected={selectInbox} onClick={onClickInbox} />
      <TaskButton showButton={showButtons} showLabel={showLabels} selected={selectTask} onClick={onClickTask} />
      <MainButton show={showMainButton} onClick={onClickMain}/>
      
      <InboxTab show={showInbox} />
      <TaskTab show={showTask} />
      </main>
    </div>
  )
}

export default Home
