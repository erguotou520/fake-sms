import { db } from "@/db";
import { apps, pushHistories } from "@/db/schema";
import { and, eq } from "drizzle-orm";
import { t } from "elysia";
import type { ServerType } from "..";
import { publishMessage } from "./websocket";

export async function addPushRoutes(path: string, server: ServerType) {
  server.post(path, async ({ body, headers, set }) => {
    const [type, token] = headers.authorization.split(' ')
    if (type !== 'App') {
      set.status = 401
      return 'Invalid token'
    }
    body.messages.forEach(async (message) => {
      const { from, text, destinations } = message;
      const app = await db.query.apps.findFirst({
        where: and(eq(apps.appId, from), eq(apps.appSecret, token)),
        // with: {
        //   messageTemplates: {
        //     where: eq(messageTemplates.code, '1')
        //   }
        // }
      })
      if (!app) {
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
      const ret = await db.insert(pushHistories).values(histories).returning()
      publishMessage(from, phones, text)
      return ret.length > 0
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
      authorization: t.String()
    })
  })
}
