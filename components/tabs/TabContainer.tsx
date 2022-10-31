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
    <div className={`fixed bottom-[6.5rem] right-8 bg-base-100 px-4 md:px-8 py-6 md:py-6 w-[calc(100vw-4rem)] md:w-[32rem] h-[32rem] text-base-content rounded origin-bottom-right transition-all duration-300 border border-accent ${showHideTab}`}>
      {children}
    </div>
  )
}

export default TabContainer;