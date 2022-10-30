import { FC, MouseEventHandler, useState } from "react";
import { Tab } from "../lib/types";
import InboxButton from "./buttons/InboxButton";
import MainButton from "./buttons/MainButton";
import TaskButton from "./buttons/TaskButton";

type QuicksButtonProps = {
  focusedTab?: Tab,
  changeFocus: (tab: Tab | undefined) => void
}

const QuicksButton: FC<QuicksButtonProps> = ({ focusedTab, changeFocus }) => {
  const [showButtons, setShowButtons] = useState(false);
  const [showLabels, setShowLabels] = useState(false);
  const [showMain, setShowMain] = useState(true);
  const [openInbox, setOpenInbox] = useState(false);
  const [openTask, setOpenTask] = useState(false);

  const closeAllTabs = () => {
    setShowButtons(false);
    setOpenInbox(false);
    setOpenTask(false);
    setShowMain(true);
    changeFocus(undefined);
  }

  const onClickMain: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    closeAllTabs();
    setShowButtons(!showButtons && showMain);
    setShowLabels(!showLabels && showMain);
  }

  const onClickInbox: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    setOpenInbox(true);
    setShowMain(false);
    setShowLabels(false);
    changeFocus('inbox');
  }

  const onClickTask: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    setOpenTask(true);
    setShowMain(false)
    setShowLabels(false);
    changeFocus('task');
  }

  return (
    <div className="grid gap-4 items-center">
      <TaskButton focused={focusedTab === 'task'} showButton={showButtons} showLabel={showLabels} opened={openTask} onClick={onClickTask} />
      <InboxButton focused={focusedTab === 'inbox'} showButton={showButtons} showLabel={showLabels} opened={openInbox} onClick={onClickInbox} />
      <MainButton show={showMain} onClick={onClickMain}/>
    </div>
  )
}

export default QuicksButton;