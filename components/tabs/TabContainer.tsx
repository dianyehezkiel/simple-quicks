import { FC, ReactNode } from "react";

type TabContainerProps = {
  show: boolean,
  children: ReactNode,
}

const TabContainer: FC<TabContainerProps> = ({ show, children }) => {
  const showHideTab = show
    ? 'scale-100 opacity-100'
    : 'scale-0 opacity-0'
  return (
    <div className={`fixed bottom-[6.5rem] right-8 bg-base-100 px-8 py-6 text-base-content rounded-sm origin-bottom-right transition-all duration-300 ${showHideTab}`}>
      {children}
    </div>
  )
}

export default TabContainer;