import { format } from 'date-fns';
import { FC, FormEventHandler, MouseEventHandler, useEffect, useState } from 'react';
import { user } from '../../lib/constants';
import { Chat, ChatType, Message } from '../../lib/types';
import LoadingSpinner from '../LoadingSpinner';
import MessageComp from './Message';

type ChatProps = {
  chatId: number;
  type: ChatType;
  title: string;
  participants?: number;
  onClose: () => void;
};

const Chat: FC<ChatProps> = ({ chatId, type, title, participants, onClose }) => {
  const [chat, setChat] = useState<Chat>();
  const [loading, setLoading] = useState(true);
  const [inputMessage, setInputMessage] = useState('');

  useEffect(() => {
    const fetchChat = async () => {
      const response = await fetch(`api/inbox/${chatId}`, { method: 'GET' });
      const chatJson = await response.json();
      setChat(chatJson);
      setTimeout(() => {
        setLoading(false);
      }, 500);
    };

    fetchChat();
  }, [chatId]);

  useEffect(() => {
    const msgContainer = document.getElementById('msg-container');
    msgContainer?.scrollTo({top: 999999})
  })

  const sendMessage: MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault();
    try {
      if (inputMessage.length === 0) return;
      if (!chat) return;
      const now = format(Date.now(), 'MMMM d, yyyy HH:mm:ss')
      const newMessage: Message = {
        content: inputMessage,
        from: user,
        time: now,
        lastEdited: now,
        editHistory: [],
        read: true,
      }

      const updatedMessages = [...chat.messages, newMessage]

      const response = await fetch(`api/inbox/${chatId}`, { method: 'PATCH', headers:{ 'Content-Type': 'application/json' }, body: JSON.stringify({ messages: updatedMessages }) })

      if (response.ok) {
        setInputMessage('');
        setChat({ ...chat, messages: updatedMessages })
      }
    } catch (error) {
      console.log(error)
    }
  }

  const titleSec =
    type === 'personal' ? (
      <p className="flex-grow line-clamp-2 font-bold text-primary">
        {title}
      </p>
    ) : (
      <div className="flex-grow flex flex-col gap-1">
        <p className="line-clamp-1 font-bold text-primary">
          {title}
        </p>
        <p className="line-clamp-1 text-xs">{`${participants} participants`}</p>
      </div>
    );

  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex items-center h-16 min-h-16 -mx-8 -mt-6 px-6 py-3 border-b border-b-accent">
        <button className="btn btn-square btn-ghost btn-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M20.25 12a.75.75 0 01-.75.75H6.31l5.47 5.47a.75.75 0 11-1.06 1.06l-6.75-6.75a.75.75 0 010-1.06l6.75-6.75a.75.75 0 111.06 1.06l-5.47 5.47H19.5a.75.75 0 01.75.75z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        {titleSec}
        <button onClick={onClose} className="btn btn-square btn-ghost btn-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div id='msg-container' className="flex flex-col flex-grow -mx-8 px-8 md:pr-6 gap-2 py-4 overflow-y-scroll">
        {loading
        ? (
          <LoadingSpinner text="Loading Chat..." />
        )
        : chat ? (
          chat.messages.map((msg, idx) => (
            <MessageComp
              key={idx}
              content={msg.content}
              isEdited={msg.editHistory.length > 0}
              sender={msg.from}
              time={new Date(msg.time)}
            />
          ))
        ) : (
          <p className='mt-16'>No message yet.</p>
        )}
      </div>
      <form className='w-full flex gap-1 pt-3 -mb-3'>
            <input onChange={(e) => setInputMessage(e.target.value)} value={inputMessage} type='text' placeholder='Type a new message' className='flex-grow input input-bordered input-sm rounded' />
            <button onClick={sendMessage} type='submit' className='btn btn-sm btn-primary rounded'>Send</button>
      </form>
    </div>
  );
};

export default Chat;
