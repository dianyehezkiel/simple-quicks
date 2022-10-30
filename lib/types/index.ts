export type Tab = 'inbox' | 'task';

export type ChatType = 'personal' | 'group';

export type Message = {
  content: string;
  sentAt: string;
  lastEditedAt: string;
  editHistory: Array<{
    content: string;
    edited: string;
  }>;
  from: string;
};

export interface Chat {
  id: number;
  participants: number;
  lastCheckedAt: string;
  messages: Message[];
}

export interface ChatInbox {
  id: number;
  type: ChatType;
  title: string;
  lastMsg: string;
  lastMsgFrom: string;
  lastMsgAt: string;
  lastCheckedAt: string;
  participants: number;
}

export type Inbox = ChatInbox[];
