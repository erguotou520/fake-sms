import { removeToken } from '@/api'
import { globalNavigate } from '@/components/GlobalHistory'
import { AppRoutes } from '@/constants'

export function onExpired() {
  removeToken()
  globalNavigate(AppRoutes.Login, { replace: true })
}
