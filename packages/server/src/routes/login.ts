import { db } from '@/db'
import { users } from '@/db/schema'
import { eq } from 'drizzle-orm'
import { t } from 'elysia'
import type { ServerType } from '..'

export async function addLoginRoutes(path: string, server: ServerType) {
  server.post(
    path,
    async ({ body, jwt, set }) => {
      const existed = await db.select().from(users).where(eq(users.username, body.username))

      if (!existed.length) {
        set.status = 400
        return 'User not found'
      }
      const existedUser = existed[0]
      const verified = await Bun.password.verify(body.password, existedUser.hashedPassword)
      if (!verified) {
        set.status = 400
        return 'Password is incorrect'
      }
      return {
        token: await jwt.sign({ id: existedUser.id, nickname: existedUser.nickname! })
      }
    },
    {
      body: t.Object({
        username: t.String(),
        password: t.String()
      })
    }
  )
}
