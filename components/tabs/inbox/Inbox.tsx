import { FC, useEffect, useState } from "react";
import { ChatInbox, Inbox } from "../../../lib/types";
import LoadingSpinner from "../../LoadingSpinner";
import ChatRow from "./ChatRow";

type InboxProps = {
  inbox: Inbox;
  loading: boolean;
  selectChat: (chat: ChatInbox) => void;
}

const Inbox: FC<InboxProps> = ({ inbox, loading, selectChat }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredInbox, setFilteredInbox] = useState<Inbox>([]);
  
  useEffect(() => {
    if (searchQuery.length === 0) {
      setFilteredInbox(inbox);
    } else {
      const filteredInbox = inbox.filter((chat) =>
        (chat.title.toLowerCase()).includes(searchQuery.toLowerCase()),
      );
      setFilteredInbox(filteredInbox);
    }
  }, [searchQuery, inbox]);



  return (
    <div className="flex flex-col items-center w-full h-full">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="input input-sm w-full px-14 border border-base-content rounded"
          />
          <button className="absolute right-14 btn btn-square btn-link btn-sm">
            <svg
              className="w-4 h-4 fill-base-content"
              viewBox="0 0 32 31"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21.1856 18.9783H22.5486L31.1579 27.6047L28.5872 30.1754L19.9607 21.5662V20.2032L19.4949 19.7201C17.528 21.4109 14.9746 22.4289 12.1968 22.4289C6.00304 22.4289 0.982422 17.4082 0.982422 11.2144C0.982422 5.02061 6.00304 0 12.1968 0C18.3907 0 23.4113 5.02061 23.4113 11.2144C23.4113 13.9922 22.3934 16.5456 20.7026 18.5124L21.1856 18.9783ZM4.433 11.2145C4.433 15.5104 7.90084 18.9783 12.1968 18.9783C16.4928 18.9783 19.9607 15.5104 19.9607 11.2145C19.9607 6.91846 16.4928 3.45062 12.1968 3.45062C7.90084 3.45062 4.433 6.91846 4.433 11.2145Z"
              />
            </svg>
          </button>
        </div>

        {loading ? (
          <LoadingSpinner text="Loading Chats..." />
        ) : (
          <div className='w-full'>
            {filteredInbox.map((chat) => {
              return (
                <ChatRow
                  key={chat.id}
                  type={chat.type}
                  title={chat.title}
                  lastMsg={chat.lastMsg}
                  lastMsgAt={new Date(chat.lastMsgAt)}
                  lastMsgFrom={chat.lastMsgFrom}
                  lastCheckedAt={new Date(chat.lastCheckedAt)}
                  onClick={() => selectChat(chat)}
                />
              );
            })}
          </div>
        )}
      </div>
  )
}

export default Inbox;