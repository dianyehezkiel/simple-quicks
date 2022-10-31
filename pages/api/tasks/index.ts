import { NextApiHandler } from 'next';
import { SERVER_URL } from '../../../lib/constants';

const tasksHandler: NextApiHandler = async (req, res) => {
  try {
    const URL = SERVER_URL;
    if (!URL) {
      throw new Error('Server URL is not defined');
    }

    if (req.method === 'GET') {
      const response = await fetch(`${URL}/tasks`, { method: 'GET' });
      const tasks = await response.json();
      res.json(tasks);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'There is a problem on our side.' });
  }
};

export default tasksHandler;
