import type { UserClaims } from '@/types'
import type { APIGroupServerType } from '..'

export async function addUserRoutes(path: string, server: APIGroupServerType) {
  // get all apps created by the user
  server.get(`${path}/me`, async ({ bearer, jwt }) => {
    const user = (await jwt.verify(bearer)) as UserClaims
    return user
  })
}
