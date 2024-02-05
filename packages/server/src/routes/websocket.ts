import { Elysia, t } from 'elysia'
import type { ServerType } from "..";

const subscribeMap: Map<string, string[]> = new Map()

let wsInstance: Parameters<NonNullable<Parameters<Elysia['ws']>[1]['drain']>>[0] | null = null

/**
 * client -> { type: 'subscribe', data: { topics: ['13800138000'] } }
 * client -> { type: 'subscribe', data: { type: 'app', topics: ['49O2ASGdGIkjy1B5Re1itGpn7IHCpFO0'] } }
 * server -> { type: 'subscribe:success', data: { topics: ['13800138000'], message: 'Subscribed successfully' } }
 * server -> { type: 'notification', data: { topic: '13800138000', message: 'Hello, world!' } }
 * client -> { type: 'unsubscribe', data: { topics: ['13800138000'] } }
 * server -> { type: 'unsubscribe:success', data: { topics: ['13800138000'], message: 'Unsubscribed successfully' } }
 */
export async function addWebSocketRoutes(path: string, server: ServerType) {
  server.ws(path, {
    body: t.Object({
      type: t.String(),
      data: t.Object({
        type: t.Optional(t.String()),
        topics: t.Array(t.String()),
        message: t.Optional(t.String())
      })
    }),
    open: (ws) => {
      if (!wsInstance) {
        // @ts-ignore
        wsInstance = ws
      }
    },
    message: async (ws, message) => {
      if (message.type === 'subscribe') {
        const { type, topics } = message.data
        const channels: string[] = []
        if (topics.length) {
          if (topics.includes('*')) {
            channels.push('*')
          } else if (type === 'app') {
            channels.push(...topics.map(topic => `sub-app:${topic}`))
          } else {
            channels.push(...topics.map(topic => `sub:${topic}`))
          }
          for (const channel of channels) {
            if (!ws.isSubscribed(channel)) {
              ws.subscribe(channel)
            }
          }
          if (subscribeMap.has(ws.id)) {
            subscribeMap.delete(ws.id)
          }
          subscribeMap.set(ws.id, channels)
          ws.send({ type: 'subscribe:success', data: { topic: channels, message: 'Subscribed successfully' }})
        }
      } else if (message.type === 'unsubscribe') {
        const { topics } = message.data
        const channels: string[] = []
        if (topics.length) {
          if (topics.includes('*')) {
            channels.push('*')
          } else {
            channels.push(...topics.map(topic => `sub:${topic}`))
          }
          for (const channel of channels) {
            if (ws.isSubscribed(channel)) {
              ws.unsubscribe(channel)
            }
          }
          if (subscribeMap.has(ws.id)) {
            subscribeMap.delete(ws.id)
          }
          ws.send({ type: 'unsubscribe:success', data: { topic: channels, message: 'Unsubscribed successfully' }})
        }
      }
    },
    close: (ws) => {
      if (subscribeMap.has(ws.id)) {
        const channels = subscribeMap.get(ws.id)
        if (channels) {
          for (const channel of channels) {
            ws.unsubscribe(channel)
          }
        }
        subscribeMap.delete(ws.id)
      }
    }
  })
}

export function publishMessage(appId: string, phones: string[], message: string) {
  if (!wsInstance) {
    return
  }
  for (const phone of phones) {
    const data = {
      type: 'notification',
      data: {
        topic: phone,
        message
      }
    }
    wsInstance.publish(`sub:${phone}`, data)
    wsInstance.publish(`sub-app:${appId}`, data)
    wsInstance.publish('*', data)

    // ws instance self channel
    const channels = subscribeMap.get(wsInstance.id)
    if (channels) {
      if (channels.includes(`sub:${phone}`) || channels.includes(`sub-app:${appId}`) || channels.includes('*')) {
        wsInstance.send(data)
      }
    }
  }
}
