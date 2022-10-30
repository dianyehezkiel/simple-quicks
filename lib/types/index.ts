export type Tab = 'inbox' | 'task';

export type ChatType = 'personal' | 'group';

export type Message = {
  content: string;
  time: string;
  lastEdited: string;
  editHistory: Array<{
    content: string;
    edited: string;
  }>;
  from: string;
  read: boolean;
};

export interface Chat {
  id: number;
  participants: number;
  messages: Message[];
}

export interface ChatInbox {
  chatId: number;
  type: ChatType;
  title: string;
  lastMsg: string;
  lastMsgFrom?: string;
  lastMsgTime: string;
  read: boolean;
  participants: number;
}

export type Inbox = ChatInbox[];
