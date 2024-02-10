import type { ServerType } from '..';
import { addAppRoutes } from './app'
import { addLoginRoutes } from './login'
import { addPushRoutes } from './push';
import { addRegisterRoutes } from "./register";
import { addTemplateRoutes } from './template';
import { addWebSocketRoutes } from './websocket';

export function registerAPIRoutes(server: ServerType) {
  server.get('/health', () => ({ status: 'ok' } ))
  addRegisterRoutes('/register', server)
  addLoginRoutes('/login', server)
  // mock infobip sms api
  addPushRoutes('/sms/2/text/advanced', server)
  server.group('/api', {
    async beforeHandle({ bearer, set }) {
      if (!bearer) {
        set.status = 401
        return 'Unauthorized'
      }
    }
  }, app => {
    addAppRoutes('/apps', app)
    addTemplateRoutes('/templates/:appId', app)
    return app
  })
}

export function registerWebsocketRoutes(server: ServerType) {
  addWebSocketRoutes('/ws', server)
}
