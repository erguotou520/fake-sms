import { db } from "@/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";
import { t } from "elysia";
import type { ServerType } from "..";

export async function addLoginRoutes(path: string, server: ServerType) {
  server.post(path, async ({ body, jwt, set }) => {
    const existed = await db.query.users.findFirst({
      where: eq(users.username, body.username)
    })
    if (!existed) {
      set.status = 400
      return 'User not found'
    }
    const verified = await Bun.password.verify(body.password, existed.hashedPassword)
    if (!verified) {
      set.status = 400
      return 'Password is incorrect'
    }
    return {
      token: await jwt.sign({ id: existed.id, nickname: existed.nickname! })
    }
  }, {
    body: t.Object({
      username: t.String(),
      password: t.String()
    })
  })
}
