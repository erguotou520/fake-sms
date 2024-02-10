export type WebsocketReturnEventData = {
  type: 'subscribe:success' | 'unsubscribe:success',
  data: {
    topics: string[]
    message?: string
  }
} | {
  type: 'notification',
  data: {
    pushId: string
    topic: string
    message: string
  }
}

export type SubscribeEventData = {
  type: 'subscribe',
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
