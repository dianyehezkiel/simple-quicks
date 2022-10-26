import { Message } from "../lib/types";

type Messages = Array<Message<'personal'> |  Message<'group'>>;

export const messages: Messages = [
  {
    id: 1,
    type: 'group',
    title: '109220-Naturalization',
    lastMsg: 'Please check this out!',
    lastMsgTime: new Date(2021, 1, 1, 19, 10),
    lastMsgFrom: 'Cameron Phillips'
  },
  {
    id: 2,
    type: 'group',
    title: 'Jeannette Moraima Guaman Chamba (Hutto I-589)',
    lastMsg: 'Hey, please read.',
    lastMsgTime: new Date(2021, 6, 2, 10, 45),
    lastMsgFrom: 'Ellen'
  },
  {
    id: 3,
    type: 'group',
    title: '8405-Diana Salazar Munguia',
    lastMsg: 'I understand your initial concerns and thats very valid, Elizabeth. But, you are the fire. Believe when I say. I want it that way.',
    lastMsgTime: new Date(2021, 6, 1, 12, 19),
    lastMsgFrom: 'Cameron Phillips'
  },
  {
    id: 4,
    type: 'personal',
    title: 'FastVisa Support',
    lastMsg: 'Hey there, welcome to yout inbox',
    lastMsgTime: new Date(2021, 6, 1, 12, 19),
    lastMsgFrom: undefined,
  }
]