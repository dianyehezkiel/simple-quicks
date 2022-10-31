import { FC, useState } from "react";
import { Tab } from "../lib/types";
import QuicksButton from "./QuicksButton";
import QuicksTab from "./QuicksTab";

const Quicks: FC = () => {
  const [focusedTab, setFocusedTab] = useState<Tab>()
  const [openedTab, setOpenedTab] = useState({ task: false, inbox: false })

  const changeFocus = (tab: Tab | undefined) => {
    setFocusedTab(tab);
    if (!tab) {
      setOpenedTab({ task: false, inbox: false })
      return;
    }

    const newOpenedTab = openedTab
    newOpenedTab[tab] = true;

    setOpenedTab(newOpenedTab)
  }

  return (
    <div>
      <QuicksButton focusedTab={focusedTab} changeFocus={changeFocus} />
      <QuicksTab openedTab={openedTab} focusedTab={focusedTab} />
    </div>
  )
}

export default Quicks;