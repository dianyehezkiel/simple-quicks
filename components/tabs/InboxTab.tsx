import { FC, useEffect, useState } from 'react';
import { ChatInbox, Inbox } from '../../lib/types';
import Chat from './inbox/Chat';
import InboxComp from './inbox/Inbox';
import TabContainer from './TabContainer';

type InboxTabProps = {
  focused: boolean;
  opened: boolean;
};

const InboxTab: FC<InboxTabProps> = ({ focused, opened }) => {
  const [inbox, setInbox] = useState<Inbox>([]);
  const [loading, setLoading] = useState(true);
  const [selectedChat, setSelectedChat] = useState<ChatInbox>();

  useEffect(() => {
    const fetchInbox = async () => {
      setLoading(true);
      const response = await fetch('/api/inbox', { method: 'GET' });
      const inboxJson = await response.json();
      setInbox(inboxJson);
      setTimeout(() => {
        setLoading(false);
      }, 300);
    };
    if (focused) {
      fetchInbox();
    }
  }, [focused, selectedChat]);

  useEffect(() => {
    if (!opened) {
      setTimeout(() => {
        setLoading(true);
        setSelectedChat(undefined);
      }, 300);
    }
  }, [opened]);

  const handleSelectChat = (chat: ChatInbox) => {
    setSelectedChat(chat);
  };

  const handleCloseChat = () => {
    setSelectedChat(undefined);
  };

  return (
    <TabContainer show={focused}>
      {selectedChat ? (
        <Chat
          chatId={selectedChat.id}
          title={selectedChat.title}
          type={selectedChat.type}
          participants={selectedChat.participants}
          onClose={handleCloseChat}
        />
      ) : (
        <InboxComp
          selectChat={handleSelectChat}
          loading={loading}
          inbox={inbox}
        />
      )}
    </TabContainer>
  );
};

export default InboxTab;
