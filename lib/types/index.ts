type MessageType = 'personal' | 'group'

export interface Message<T extends MessageType> {
  id: number,
  type: T
  title: string,
  lastMsg: string,
  lastMsgFrom: T extends 'personal' ? undefined : string,
  lastMsgTime: Date,
}
