import { db } from '@/db'
import { apps, messageTemplates, users } from '@/db/schema'
import type { UserClaims } from '@/types'
import { DEFAULT_LIMIT } from '@/utils'
import { and, desc, eq } from 'drizzle-orm'
import { t } from 'elysia'
import type { APIGroupServerType } from '..'

export async function addTemplateRoutes(path: string, server: APIGroupServerType) {
  // get all templates created by the user & in the given app
  server.get(
    path,
    async ({ query, params, bearer, jwt, set }) => {
      const user = (await jwt.verify(bearer)) as UserClaims
      const appRecord = await db.query.apps.findFirst({
        where: and(eq(apps.id, params.appId), eq(apps.creatorId, user.id))
      })
      if (!appRecord) {
        set.status = 404
        return 'App not found'
      }
      const templates = await db.query.messageTemplates.findMany({
        where: and(eq(messageTemplates.appId, params.appId)),
        orderBy: [desc(messageTemplates.createdAt)],
        offset: query.offset || 0,
        limit: query.limit || DEFAULT_LIMIT
      })
      return templates
    },
    {
      query: t.Object({
        offset: t.Optional(t.Number()),
        limit: t.Optional(t.Number())
      }),
      params: t.Object({
        appId: t.String()
      })
    }
  )

  // create a new template
  server.post(
    path,
    async ({ body, params, bearer, jwt, set }) => {
      const user = (await jwt.verify(bearer)) as UserClaims
      const app = await db.query.apps.findFirst({
        where: and(eq(apps.id, params.appId), eq(apps.creatorId, user.id))
      })
      if (!app) {
        return 'App not found'
      }
      try {
        const ret = await db
          .insert(messageTemplates)
          .values([
            {
              appId: params.appId,
              code: body.code,
              message: body.message
            }
          ])
          .returning()
        return ret.length > 0
      } catch (error) {
        set.status = 400
        return 'Failed to create template message'
      }
    },
    {
      body: t.Object({
        code: t.String(),
        message: t.String()
      }),
      params: t.Object({
        appId: t.String()
      })
    }
  )

  // delete an template message
  server.delete(
    `${path}/:id`,
    async ({ params, bearer, jwt, set }) => {
      const user = (await jwt.verify(bearer)) as UserClaims
      const appRecord = await db.query.apps.findFirst({
        where: and(eq(apps.id, params.appId), eq(apps.creatorId, user.id))
      })
      if (!appRecord) {
        set.status = 404
        return 'App not found'
      }
      try {
        const ret = await db.delete(messageTemplates).where(eq(messageTemplates.id, params.id)).returning()
        return ret.length > 0
      } catch (error) {
        set.status = 500
        return 'Failed to delete app'
      }
    },
    {
      params: t.Object({
        appId: t.String(),
        id: t.String()
      })
    }
  )
}
