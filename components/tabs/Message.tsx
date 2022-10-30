import { format } from 'date-fns';
import { FC } from 'react';
import { user } from '../../lib/constants';
import { classNames } from '../../lib/utils';

type MessageProps = {
  content: string;
  sender: string;
  time: Date;
  isEdited: boolean;
  color?: 'orange' | 'green';
};

const Message: FC<MessageProps> = ({ content, sender, time, isEdited }) => {
  return (
    <div
      className={classNames('flex flex-col gap-1 max-w-[80%]', sender === user ? 'self-end' : '')}
    >
      <p className={classNames('text-sm font-bold', sender === user ? 'text-bubble-purple text-right' : 'text-bubble-green')}>
        {sender === user ? 'You' : sender}
      </p>
      <div className={classNames("flex gap-2", sender === user ? 'flex-row-reverse' : 'flex-row')}>
        <div className={classNames("flex flex-col p-2 pb-1 min-w-[5rem] rounded", sender === user ? 'bg-chat-purple' : 'bg-chat-green')}>
          <p className="text-sm">{content}</p>
          <div className="flex items-center gap-1 h-6">
            <p className="text-xs">{format(time, 'HH:mm')}</p>
            {isEdited && (
              <button className="btn btn-xs btn-link gap-1 no-underline hover:no-underline text-secondary font-normal">
                <svg
                  className="w-3 h-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
                </svg>
                <p className='lowercase'>edited</p>
              </button>
            )}
          </div>
        </div>
        <button className="btn btn-square btn-xs btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M4.5 12a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Message;
