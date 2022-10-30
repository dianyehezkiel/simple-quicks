import { FC } from "react";
import TabContainer from "./TabContainer";

type TaskTabProps = {
  focused: boolean;
  opened: boolean;
}

const TaskTab: FC<TaskTabProps> = ({ focused, opened }) => {
  return (
    <TabContainer show={focused}>
      <div className="flex justify-center w-full h-full">
        <p className="text-lg h-full">Task Tab</p>
      </div>
    </TabContainer>
  )
}

export default TaskTab;