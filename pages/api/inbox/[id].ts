import { NextApiHandler } from "next";
import { SERVER_URL } from "../../../lib/constants";
import { isString } from "../../../lib/utils";

const ChatHandler: NextApiHandler = async (req, res) => {
  try {
    const URL = SERVER_URL;
    if (!URL) {
      throw new Error('Server URL is not defined');
    }

    const id = req.query.id;
    if (!isString(id)) {
      res.status(400).json({ error: 'chat id is not string' });
      return;
    }
  
    if (req.method === 'GET') {
      const response = await fetch(`${URL}/chats/${id}`, { method: 'GET' })
      const chat = await response.json();

      res.json(chat);
    } else if (req.method === 'PATCH') {
      const updatedMessage = req.body;
      const response = await fetch(`${URL}/chats/${id}`, { method: 'PATCH', headers:{ 'Content-Type': 'application/json' }, body: JSON.stringify(updatedMessage) })
      if (response.ok) {
        res.status(204).send({});
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "There is a problem on our side." })
  }
}

export default ChatHandler;