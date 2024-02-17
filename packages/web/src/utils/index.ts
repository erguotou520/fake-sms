import { removeToken } from '@/api'
import { AppRoutes } from '@/constants'

export function onExpired() {
  removeToken()
  window.location.href = `#/${AppRoutes.Login}`
}
