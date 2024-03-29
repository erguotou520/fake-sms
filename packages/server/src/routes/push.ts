import { db } from '@/db'
import { apps, pushHistories } from '@/db/schema'
import { v4 } from '@lukeed/uuid'
import dayjs from 'dayjs'
import { and, count, eq, gt } from 'drizzle-orm'
import { t } from 'elysia'
import type { ServerType } from '..'
import { publishMessage } from './websocket'

export async function addPushRoutes(path: string, server: ServerType) {
  server.post(
    path,
    async ({ body, headers, set }) => {
      const [type, token] = headers.authorization.split(' ')
      if (type !== 'App') {
        set.status = 401
        return 'Invalid token'
      }
      const appMap: Record<string, typeof apps.$inferSelect> = {}
      // check
      for (const message of body.messages) {
        const { from, destinations } = message
        const _apps = await db.query.apps.findMany({
          where: and(eq(apps.appId, from), eq(apps.appSecret, token)),
          limit: 1
        })
        if (!_apps?.length) {
          set.status = 403
          return 'Invalid app'
        }
        const app = _apps[0]
        appMap[from] = app
        // check all phones are not rate limited
        for (const dest of destinations) {
          const { to: phone } = dest
          if (app.rateLimitEnabled && app.rateLimitCount && app.rateLimitDuration) {
            const date = dayjs().subtract(app.rateLimitDuration, 'second')
            const pushedCount = await db.select({ value: count() }).from(pushHistories).where(and(eq(pushHistories.phone, phone), gt(pushHistories.createdAt, date.format('YYYY-MM-DD HH:mm:ss'))))
            if (pushedCount[0].value >= app.rateLimitCount) {
              set.status = 429
              return `Rate limit exceeded for ${phone}`
            }
          }
        }
      }

      // push
      for (const message of body.messages) {
        const { from, text, destinations } = message
        const app = appMap[from]
        const phones = destinations.map(d => d.to)
        const histories = phones.map<typeof pushHistories.$inferInsert>(phone => ({
          id: v4(),
          phone,
          appId: app.id,
          templateId: '',
          params: JSON.stringify({ code: phone }),
          text
        }))
        const ret = await db.insert(pushHistories).values(histories).returning()
        publishMessage(
          from,
          phones,
          text,
          histories.map(h => h.id!)
        )
        return ret.length > 0
      }
    },
    {
      body: t.Object({
        messages: t.Array(
          t.Object({
            from: t.String(),
            text: t.String(),
            destinations: t.Array(
              t.Object({
                to: t.String()
              })
            )
          })
        )
      }),
      headers: t.Object({
        authorization: t.String()
      })
    }
  )
}
