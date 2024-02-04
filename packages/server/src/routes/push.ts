import { db } from "@/db";
import { apps, messageTemplates, pushHistories, users } from "@/schema";
import { and, eq } from "drizzle-orm";
import { t } from "elysia";
import type { ServerType } from "..";

export async function addPushRoutes(path: string, server: ServerType) {
  server.post(path, async ({ body, headers, set }) => {
    const [type, token] = headers.Authorization.split(' ')
    if (type !== 'App') {
      set.status = 401
      return 'Invalid token'
    }
    body.messages.forEach(async (message) => {
      const { from, text, destinations } = message;
      const app = await db.query.apps.findFirst({
        where: and(eq(apps.appId, from), eq(apps.appSecret, token)),
        with: {
          messageTemplates: {
            where: eq(messageTemplates.code, '1')
          }
        }
      })
      if (!app ||!app.messageTemplates) {
        set.status = 403
        return 'Invalid app'
      }
      const phones = destinations.map(d => d.to)
      const histories = phones.map<typeof pushHistories.$inferInsert>(phone => ({
        phone,
        templateId: '',
        params: JSON.stringify({ code: phone }),
        text,
      }))
      await db.insert(pushHistories).values(histories)
    })
  }, {
    body: t.Object({
      messages: t.Array(t.Object({
        from: t.String(),
        text: t.String(),
        destinations: t.Array(t.Object({
          to: t.String(),
        })),
      }))
    }),
    headers: t.Object({
      Authorization: t.String()
    })
  })
}
