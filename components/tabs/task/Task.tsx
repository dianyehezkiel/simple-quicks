import { format } from 'date-fns';
import { ChangeEventHandler, FC, useEffect, useState } from 'react';
import { Task } from '../../../lib/types';

type TaskProps = {
  id: number;
  title: string;
  deadlineAt: Date;
  desc: string;
  done: boolean;
  onChange: (task: Task) => void;
};

const Task: FC<TaskProps> = ({ id, title, deadlineAt, desc, done, onChange }) => {
  const [isDone, setIsDone] = useState(done);

  useEffect(() => {
    setIsDone(done);
  }, [done])
  
  const updateDone: ChangeEventHandler<HTMLInputElement> = () => {
    const updatedDone = !isDone
    setIsDone(updatedDone);
    const updatedTask: Task = {
      id,
      title,
      deadlineAt: format(deadlineAt, 'yyyy-MM-dd'),
      desc,
      done: updatedDone
    }
    onChange(updatedTask);
  }

  return (
    <div className="flex gap-2 py-[1.375rem] border-b border-b-accent rounded-none">
      <input
        type="checkbox"
        checked={isDone}
        onChange={updateDone}
        className="peer checkbox checkbox-secondary checkbox-sm my-0.5 rounded-sm"
      />
      <div className="flex-grow relative overflow-hidden -my-[1.375rem]">
        <input
          type="checkbox"
          className="peer/open-close absolute inset-x-0 h-[calc(1.5rem+2.750rem)] opacity-0 z-10 cursor-pointer py-[1.375rem]"
        />

        <div className="w-full flex justify-between items-start py-[1.375rem] pr-8">
          <p className={isDone ? 'line-through text-accent line-clamp-1' : ''}>{title}</p>
          <p className='text-secondary text-sm'>{format(deadlineAt, 'dd/MM/yyyy')}</p>
        </div>
        <div className="absolute top-1 right-1 transition-transform duration-500 rotate-0 peer-checked/open-close:rotate-180 py-[1.375rem]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4 stroke-2"
          >
            <path
              fillRule="evenodd"
              d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="overflow-hidden transition-all duration-500 max-h-0 peer-checked/open-close:max-h-40">
          <div className="flex flex-col gap-4 p-0.5 pb-[1.375rem]">
            <div className='flex gap-2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mt-1 stroke-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
              <input className='bg-white border rounded p-2' type='date' datatype='date' defaultValue={format(deadlineAt, 'yyyy-MM-dd')} />
            </div>
            <div className='flex gap-2'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mt-1.5 mx-0.5">
              <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
            </svg>
              <textarea className='flex-grow min-h-[5rem] resize-none textarea textarea-bordered rounded p-2' defaultValue={desc} />
            </div>
          </div>
        </div>
      </div>
      <button className="btn btn-square btn-xs min-h-max rounded-sm btn-ghost">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-4 h-4 stroke-2"
        >
          <path
            fillRule="evenodd"
            d="M4.5 12a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
};

export default Task;
