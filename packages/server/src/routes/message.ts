import { db } from "@/db";
import { pushHistories } from "@/db/schema";
import { desc, inArray } from "drizzle-orm";
import { t } from "elysia";
import type { ServerType } from "..";

export async function addMessagesRoutes(path: string, server: ServerType) {
  // get last 20 messages
  server.get(path, async ({ query }) => {
    const topics = query.topics?.split(",") || []
    const ret = await db.query.pushHistories.findMany({
      columns: {
        id: true,
        phone: true,
        text: true,
        createdAt: true,
      },
      where: query.type === 'all' ? undefined : query.type === 'apps' ? inArray(pushHistories.appId, topics) : inArray(pushHistories.phone, topics),
      limit: query.limit || 20,
      orderBy: [desc(pushHistories.createdAt)]
    })
    return ret.map(item => ({
      pushId: item.id,
      topic: item.phone,
      message: item.text,
      createdAt: item.createdAt?.replace(/-/g, '/')
    }))
  }, {
    query: t.Object({
      type: t.Enum({ All: 'all', App: 'apps', Phone: 'phones' }),
      topics: t.Optional(t.String()),
      limit: t.Optional(t.Number())
    })
  })
}
