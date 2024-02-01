import { bearer } from '@elysiajs/bearer'
import { jwt } from '@elysiajs/jwt'
import { staticPlugin } from '@elysiajs/static'
import { swagger } from '@elysiajs/swagger'
import { Elysia } from 'elysia'
import registerRoutes from './routes'

const port = process.env.PORT || 7878
const server = new Elysia()
  .use(swagger())
  .use(staticPlugin({ assets: 'html' }))
  .use(bearer())
  .use(jwt({
    name: 'jwt',
    secret: process.env.JWT_SECRET ?? 'default-secret'
  }))
registerRoutes(server)
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})

export type ServerType = typeof server

type ReplaceBaseUrlServerType<T extends Elysia, NewBaseUrl extends string> = T extends Elysia<infer _, infer P1, infer P2, infer P3, infer P4, infer P5, infer P6> ? Elysia<NewBaseUrl, P1, P2, P3, P4, P5, P6> : never;

export type APIGroupServerType = ReplaceBaseUrlServerType<ServerType, '/api'>

