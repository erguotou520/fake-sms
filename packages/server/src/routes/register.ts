import { db } from '@/db'
import { users } from '@/db/schema'
import { eq } from 'drizzle-orm'
import { t } from 'elysia'
import type { ServerType } from '..'

export async function addRegisterRoutes(path: string, server: ServerType) {
  server.post(
    path,
    async ({ body, jwt, set }) => {
      const existed = await db.query.users.findFirst({
        where: eq(users.username, body.username)
      })
      if (existed) {
        set.status = 400
        return 'Username already exists'
      }
      try {
        const ret = await db
          .insert(users)
          .values({
            username: body.username,
            nickname: body.nickname ?? body.username,
            hashedPassword: await Bun.password.hash(body.password)
          })
          .returning()
        return {
          token: await jwt.sign({ id: ret[0].id, nickname: ret[0].nickname! })
        }
      } catch (error) {
        set.status = 500
        return 'Register failed'
      }
    },
    {
      body: t.Object({
        username: t.String(),
        nickname: t.Nullable(t.String()),
        password: t.String()
      })
    }
  )
}
