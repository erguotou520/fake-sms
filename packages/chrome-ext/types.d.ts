export type MessageData = {
  pushId: string
  topic: string
  message: string
  createdAt: string
}

export type WebsocketReturnEventData = {
  type: 'subscribe:success' | 'unsubscribe:success',
  data: {
    topics: string[]
    message?: string
  }
} | {
  type: 'notification',
  data: MessageData
}

export type SubscribeEventData = {
  type: 'subscribe' | 'unsubscribe',
  data: SubscribeEvent
}

export type SubscribeEvent = {
  url: string
} & SubscribeData

export type SubscribeData = {
  type: 'phones' | 'apps'
  topics: string[]
} | {
  type: 'all'
}
