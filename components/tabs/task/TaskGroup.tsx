import { FC, useEffect, useState } from 'react';
import { Task } from '../../../lib/types';
import TaskComp from './Task';

type TaskGroupProps = {
  id: number;
  tasks: Task[];
};

const TaskGroup: FC<TaskGroupProps> = ({ id, tasks }) => {
  const [tasksState, setTasksState] = useState(tasks);

  useEffect(() => {
    setTasksState(tasks)
  }, [tasks])

  const updateTask = async (task: Task) => {
    const existedTaskIndex = tasks.findIndex((t) => t.id === task.id);
    let updatedTask: Task[];
    if (existedTaskIndex >= 0) {
      updatedTask = tasks;
      updatedTask[existedTaskIndex] = task;
    } else {
      updatedTask = [...tasks, task];
    }

    const response = await fetch(`/api/tasks/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ taskList: updatedTask }),
    });

    if (response.ok) {
      setTasksState(updatedTask);
    }
  };

  return (
    <div className="flex flex-col overflow-scroll">
      {tasksState.map((task) => (
        <TaskComp
          key={`${id}-${task.id}`}
          id={task.id}
          title={task.title}
          deadlineAt={new Date(task.deadlineAt)}
          desc={task.desc}
          done={task.done}
          onChange={updateTask}
        />
      ))}
    </div>
  );
};

export default TaskGroup;
