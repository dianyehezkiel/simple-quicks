import { FC, useState } from "react";
import { Tab } from "../lib/types";
import InboxTab from "./tabs/InboxTab";
import TaskTab from "./tabs/TaskTab";

type QuicksTabProps = {
  openedTab: {
    task: boolean,
    inbox: boolean,
  },
  focusedTab?: Tab
}

const QuicksTab: FC<QuicksTabProps> = ({ openedTab, focusedTab }) => {

  return (
    <div>
      <TaskTab opened={openedTab.task} focused={focusedTab === 'task'} />
      <InboxTab opened={openedTab.inbox} focused={focusedTab === 'inbox'} />
    </div>
  )
}

export default QuicksTab;