import { FC, useEffect, useState } from 'react';
import { TaskGroup } from '../../lib/types';
import LoadingSpinner from '../LoadingSpinner';
import TabContainer from './TabContainer';
import TaskGroupComp from './task/TaskGroup';

type TaskTabProps = {
  focused: boolean;
  opened: boolean;
};

const TaskTab: FC<TaskTabProps> = ({ focused, opened }) => {
  const [tasks, setTasks] = useState<TaskGroup[]>([]);
  const [selectedGroup, setSelectedGroup] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTask = async () => {
      setLoading(true)
      const response = await fetch('/api/tasks', { method: 'GET' });
      const taskGroup = await response.json();
      setTasks(taskGroup);
      setTimeout(() => {
        setLoading(false);
      }, 300);
    };

    if (focused) {
      fetchTask();
    }
  }, [focused]);

  return (
    <TabContainer show={focused}>
      {loading ? (
        <LoadingSpinner text="Loading Task List" />
      ) : (
        <div className="w-full h-full flex flex-col">
          <div className="flex justify-between">
            <div className="dropdown">
              <label
                tabIndex={0}
                className="btn btn-sm normal-case mb-1 bg-white border-accent rounded"
              >
                {tasks[selectedGroup].name}
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu menu-compact p-1 shadow bg-base-100 rounded w-[10rem]"
              >
                {tasks.map(({ name }, idx) => (
                  <li key={idx}>
                    <button onClick={() => setSelectedGroup(idx)}>{name}</button>
                  </li>
                ))}
              </ul>
            </div>
            <button className="btn btn-sm btn-primary normal-case text-white rounded">
              New Task
            </button>
          </div>
          <TaskGroupComp
            tasks={tasks[selectedGroup].taskList}
            id={tasks[selectedGroup].id}
          />
        </div>
      )}
    </TabContainer>
  );
};

export default TaskTab;
