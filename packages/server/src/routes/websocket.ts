import { t } from 'elysia'
import type { ServerType } from '..'

const subscribeMap: Map<string, string[]> = new Map()

let _server: ServerType

/**
 * client -> { type: 'subscribe', data: { type: 'phones', topics: ['13800138000'] } }
 * client -> { type: 'subscribe', data: { type: 'apps', topics: ['49O2ASGdGIkjy1B5Re1itGpn7IHCpFO0'] } }
 * client -> { type: 'subscribe', data: { type: 'all' } }
 * server -> { type: 'subscribe:success', data: { topics: ['13800138000'], message: 'Subscribed successfully' } }
 * server -> { type: 'notification', data: { pushId: 'd7f1f128-2094-4e3a-adb7-4a24619be7a5', topic: '13800138000', message: 'Hello, world!' } }
 * client -> { type: 'unsubscribe', data: { type: 'phones', topics: ['13800138000'] } }
 * client -> { type: 'unsubscribe', data: { type: 'apps', topics: ['49O2ASGdGIkjy1B5Re1itGpn7IHCpFO0'] } }
 * client -> { type: 'unsubscribe', data: { type: 'all' } }
 * server -> { type: 'unsubscribe:success', data: { topics: ['13800138000'], message: 'Unsubscribed successfully' } }
 */
export async function addWebSocketRoutes(path: string, server: ServerType) {
  server.ws(path, {
    body: t.Object({
      type: t.Enum({ Subscribe: 'subscribe', Unsubscribe: 'unsubscribe' }),
      data: t.Object({
        type: t.Enum({ Phones: 'phones', Apps: 'apps', All: 'all' }),
        topics: t.Optional(t.Array(t.String()))
      })
    }),
    message: async (ws, message) => {
      if (message.type === 'subscribe') {
        const { type, topics } = message.data
        const channels: string[] = []
        if (type === 'all') {
          channels.push('*')
        } else if (type === 'apps') {
          channels.push(...topics!.map(topic => `sub-app:${topic}`))
        } else {
          channels.push(...topics!.map(topic => `sub:${topic}`))
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
        console.log(`Subscribe ${ws.id} to ${channels}`)
        ws.send({ type: 'subscribe:success', data: { topic: channels, message: 'Subscribed successfully' } })
      } else if (message.type === 'unsubscribe') {
        const { topics, type } = message.data
        const channels: string[] = []
        if (type === 'all') {
          channels.push('*')
        } else if (type === 'apps') {
          channels.push(...topics!.map(topic => `sub-app:${topic}`))
        } else {
          channels.push(...topics!.map(topic => `sub:${topic}`))
        }
        for (const channel of channels) {
          if (ws.isSubscribed(channel)) {
            ws.unsubscribe(channel)
          }
        }
        if (subscribeMap.has(ws.id)) {
          subscribeMap.delete(ws.id)
        }
        ws.send({ type: 'unsubscribe:success', data: { topic: channels, message: 'Unsubscribed successfully' } })
      }
    },
    close: ws => {
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
  _server = server
}

export async function publishMessage(appId: string, phones: string[], message: string, pushIds: string[]) {
  const now = new Date().toLocaleString()
  for (const [index, phone] of phones.entries()) {
    const data = JSON.stringify({
      type: 'notification',
      data: {
        pushId: pushIds[index],
        topic: phone,
        message,
        createdAt: now
      }
    })
    _server.server?.publish(`sub:${phone}`, data)
    _server.server?.publish(`sub-app:${appId}`, data)
    _server.server?.publish('*', data)
  }
}
