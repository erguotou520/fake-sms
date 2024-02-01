import { db } from "@/db";
import { apps } from "@/schema";
import type { UserClaims } from "@/types";
import { generateAppId, generateSecret } from "@/utils/app";
import { and, eq } from "drizzle-orm";
import { t } from "elysia";
import type { APIGroupServerType } from "..";

export async function addAppRoutes(path: string, server: APIGroupServerType) {
  // get all apps created by the user
  server.get(path, async ({ query, bearer, jwt }) => {
    const user = await jwt.verify(bearer) as UserClaims
    const ret = await db.query.apps.findMany({
      where: (apps, { eq }) => eq(apps.creatorId, user.id),
      offset: query.offset ?? 0,
      limit: query.limit ?? 10
    })
    return ret
  }, {
    query: t.Object({
      offset: t.Nullable(t.Number()),
      limit: t.Nullable(t.Number())
    })
  })

  // create a new app
  server.post(path, async ({ body, bearer, jwt, set }) => {
    const user = await jwt.verify(bearer) as UserClaims
    try {
      await db.insert(apps).values([{
        name: body.name,
        creatorId: user.id,
        appId: generateAppId(),
        appSecret: generateSecret()
      }])
      return true
    } catch (error) {
      set.status = 400
      return 'Failed to create app'
    }
  }, {
    body: t.Object({
      name: t.String()
    })
  })

  // delete an app
  server.delete(`${path}/:id`, async ({ params, bearer, jwt, set }) => {
    const user = await jwt.verify(bearer) as UserClaims
    const app = await db.query.apps.findFirst({
      where: and( eq(apps.id, params.id), eq(apps.creatorId, user.id))
    })
    if (!app) {
      return 'App not found'
    }
    try {
      await db.delete(apps).where(eq(apps.id, params.id))
      return true
    } catch (error) {
      set.status = 500
      return 'Failed to delete app'
    }
  })
}
