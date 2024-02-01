import { db } from "@/db";
import { apps, messageTemplates } from "@/schema";
import type { UserClaims } from "@/types";
import { generateAppId, generateSecret } from "@/utils/app";
import { and, eq } from "drizzle-orm";
import { t } from "elysia";
import type { APIGroupServerType } from "..";

export async function addTemplateRoutes(path: string, server: APIGroupServerType) {
  // get all templates created by the user & in the given app
  server.get(path, async ({ query, params, bearer, jwt }) => {
    const user = await jwt.verify(bearer) as UserClaims
    const app = await db.query.apps.findFirst({
      where: and(eq(apps.id, params.appId), eq(apps.creatorId, user.id))
    })
    if (!app) {
      return 'App not found'
    }
    const ret = await db.query.messageTemplates.findMany({
      where: eq(messageTemplates.appId, params.appId),
      offset: query.offset ?? 0,
      limit: query.limit ?? 10
    })
    return ret
  }, {
    query: t.Object({
      offset: t.Nullable(t.Number()),
      limit: t.Nullable(t.Number())
    }),
    params: t.Object({
      appId: t.String()
    })
  })

  // create a new template
  server.post(path, async ({ body, params, bearer, jwt, set }) => {
    const user = await jwt.verify(bearer) as UserClaims
    const app = await db.query.apps.findFirst({
      where: and(eq(apps.id, params.appId), eq(apps.creatorId, user.id))
    })
    if (!app) {
      return 'App not found'
    }
    try {
      await db.insert(messageTemplates).values([{
        appId: params.appId,
        code: body.code,
        message: body.message,
      }])
      return true
    } catch (error) {
      set.status = 400
      return 'Failed to create template message'
    }
  }, {
    body: t.Object({
      code: t.String(),
      message: t.String(),
    }),
    params: t.Object({
      appId: t.String()
    })
  })

  // delete an template message
  server.delete(`${path}/:id`, async ({ params, bearer, jwt, set }) => {
    const user = await jwt.verify(bearer) as UserClaims
    const app = await db.query.apps.findFirst({
      where: and(eq(apps.id, params.id), eq(apps.creatorId, user.id))
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
