import { db } from '@/db'
import { apps } from '@/db/schema'
import type { UserClaims } from '@/types'
import { generateAppId, generateSecret } from '@/utils/app'
import { and, count, eq } from 'drizzle-orm'
import { t } from 'elysia'
import type { APIGroupServerType } from '..'

export async function addAppRoutes(path: string, server: APIGroupServerType) {
  // get all apps created by the user
  server.get(
    path,
    async ({ query, bearer, jwt }) => {
      const user = (await jwt.verify(bearer)) as UserClaims
      const list = await db.query.apps.findMany({
        where: eq(apps.creatorId, user.id),
        offset: query.offset ?? 0,
        limit: query.limit ?? 10
      })
      const total = await db.select({ value: count() }).from(apps).where(eq(apps.creatorId, user.id))
      return { list, total: total[0].value }
    },
    {
      query: t.Object({
        offset: t.MaybeEmpty(t.Numeric()),
        limit: t.MaybeEmpty(t.Numeric())
      })
    }
  )

  // create a new app
  server.post(
    path,
    async ({ body, bearer, jwt, set }) => {
      const user = (await jwt.verify(bearer)) as UserClaims
      const sameApp = await db.query.apps.findFirst({
        where: and(eq(apps.name, body.name), eq(apps.creatorId, user.id))
      })
      if (sameApp) {
        set.status = 400
        return 'App already exists'
      }
      try {
        const ret = await db
          .insert(apps)
          .values([
            {
              name: body.name,
              creatorId: user.id,
              appId: generateAppId(),
              appSecret: generateSecret(),
              rateLimitEnabled: body.rateLimitEnabled,
              rateLimitCount: body.rateLimitCount,
              rateLimitDuration: body.rateLimitDuration
            }
          ])
          .returning()
        if (ret.length > 0) {
          return ret[0]
        }
        return false
      } catch (error) {
        set.status = 400
        return 'Failed to create app'
      }
    },
    {
      body: t.Object({
        name: t.String(),
        rateLimitEnabled: t.Boolean(),
        rateLimitCount: t.MaybeEmpty(t.Numeric({ minimum: 1 })),
        rateLimitDuration: t.MaybeEmpty(t.Numeric({ minimum: 1 }))
      })
    }
  )

  // delete an app
  server.delete(`${path}/:id`, async ({ params, bearer, jwt, set }) => {
    const user = (await jwt.verify(bearer)) as UserClaims
    const app = await db.query.apps.findFirst({
      where: and(eq(apps.id, params.id), eq(apps.creatorId, user.id))
    })
    if (!app) {
      return 'App not found'
    }
    try {
      const ret = await db.delete(apps).where(eq(apps.id, params.id)).returning()
      return ret.length > 0
    } catch (error) {
      set.status = 500
      return 'Failed to delete app'
    }
  })
}
