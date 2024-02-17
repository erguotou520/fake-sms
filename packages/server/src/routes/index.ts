import type { ServerType } from '..'
import { addAppRoutes } from './app'
import { addLoginRoutes } from './login'
import { addMessagesRoutes } from './message'
import { addPushRoutes } from './push'
import { addRegisterRoutes } from './register'
import { addTemplateRoutes } from './template'
import { addUserRoutes } from './user'
import { addWebSocketRoutes } from './websocket'

export function registerAPIRoutes(server: ServerType) {
  server.get('/health', () => ({ status: 'ok' }))
  addRegisterRoutes('/register', server)
  addLoginRoutes('/login', server)
  // mock infobip sms api
  addPushRoutes('/sms/2/text/advanced', server)
  // get last n messages
  addMessagesRoutes('/messages', server)
  server.group(
    '/api',
    {
      async beforeHandle({ bearer, set }) {
        if (!bearer) {
          set.status = 401
          return 'Unauthorized'
        }
      }
    },
    app => {
      addUserRoutes('/user', app)
      addAppRoutes('/apps', app)
      addTemplateRoutes('/templates/:appId', app)
      return app
    }
  )
}

export function registerWebsocketRoutes(server: ServerType) {
  addWebSocketRoutes('/ws', server)
}
