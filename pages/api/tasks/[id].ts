import { NextApiHandler } from 'next';
import { SERVER_URL } from '../../../lib/constants';
import { isString } from '../../../lib/utils';

const UpdateTaskHandler: NextApiHandler = async (req, res) => {
  try {
    const S_URL = SERVER_URL;
    if (!S_URL) {
      throw new Error('Server URL is not defined');
    }

    const id = req.query.id;
    if (!isString(id)) {
      res.status(400).json({ error: 'task id is not string' });
      return;
    }
    if (req.method === 'PATCH') {
      const updatedTask = req.body;

      const response = await fetch(`${S_URL}/tasks/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedTask),
      });

      if (response.ok) {
        res.status(204).send(undefined);
      } else {
        throw new Error('tasks is not updated');
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'There is a problem on our side.' });
  }
};

export default UpdateTaskHandler;
