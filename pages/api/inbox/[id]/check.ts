import { NextApiHandler } from 'next';
import { SERVER_URL } from '../../../../lib/constants';
import { isString } from '../../../../lib/utils';

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

    if (req.method === 'PATCH') {
      const lastCheckedAt = req.body;
      console.log(lastCheckedAt)

      const chatResponse = await fetch(`${S_URL}/chats/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(lastCheckedAt),
      });
      const inboxResponse = await fetch(`${S_URL}/inbox/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(lastCheckedAt),
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
