import { FC } from "react";
import TabContainer from "./TabContainer";

type TaskTabProps = {
  show: boolean,
}

const TaskTab: FC<TaskTabProps> = ({ show }) => {
  return (
    <TabContainer show={show}>
      <div className="flex justify-center w-[32rem] h-[32rem]">
        <p className="text-lg h-full">Task Tab</p>
      </div>
    </TabContainer>
  )
}

export default TaskTab;