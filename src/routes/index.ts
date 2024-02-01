import { getCommonResponse, json } from '@/utils';
import type { ServerType } from '..';
import { addAppRoutes } from './app'
import { addLoginRoutes } from './login'
import { addRegisterRoutes } from "./register";
import { addTemplateRoutes } from './template';

export default function registerRoutes(server: ServerType) {
  addRegisterRoutes('/register', server)
  addLoginRoutes('/login', server)
  server.group('/api', {
    async beforeHandle({ bearer, jwt, store }) {
      if (!bearer) {
        return json(getCommonResponse(null, 'Unauthorized'), 401)
      }
    }
  }, app => {
    addAppRoutes('/apps', app)
    addTemplateRoutes('/apps/:appId/templates', app)
    return app
  })
}
