import { NextApiHandler } from 'next';
import { SERVER_URL } from '../../../lib/constants';
import { ChatInbox, Inbox, Message } from '../../../lib/types';
import { isString } from '../../../lib/utils';

const ChatHandler: NextApiHandler = async (req, res) => {
  try {
    const S_URL = SERVER_URL;
    if (!S_URL) {
      throw new Error('Server URL is not defined');
    }

    const id = req.query.id;
    if (!isString(id)) {
      res.status(400).json({ error: 'chat id is not string' });
      return;
    }

    if (req.method === 'GET') {
      const response = await fetch(`${S_URL}/chats/${id}`, { method: 'GET' });
      const chat = await response.json();

      res.json(chat);
    } else if (req.method === 'PATCH') {
      const updatedMessage = req.body.messages as Message[];
      const lastMessage = updatedMessage[updatedMessage.length - 1];
      const updatedInbox: Pick<
        ChatInbox,
        'lastMsgAt' | 'lastMsg' | 'lastMsgFrom'
      > = {
        lastMsgAt: lastMessage.sentAt,
        lastMsg: lastMessage.content,
        lastMsgFrom: lastMessage.from,
      };
      const chatResponse = await fetch(`${S_URL}/chats/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: updatedMessage }),
      });
      const inboxResponse = await fetch(`${S_URL}/inbox/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedInbox),
      });

      if (chatResponse.ok && inboxResponse.ok) {
        res.status(204).send(undefined);
      } else {
        throw new Error('chat or inbox is not updated');
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'There is a problem on our side.' });
  }
};

export default ChatHandler;
