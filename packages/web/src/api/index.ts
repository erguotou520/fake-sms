import { CommonPagination, LoginForm, RegisterForm } from '@/types'
import { onExpired } from '@/utils'
import { message } from 'antd'

const TOKEN_KEY = 'user.access_token'

let token: string | null = null

export function setToken(newToken: string) {
  token = newToken
  localStorage.setItem(TOKEN_KEY, token)
}

export function getToken() {
  if (token) {
    return token
  }
  token = localStorage.getItem(TOKEN_KEY)
  return token
}

export function removeToken() {
  token = null
  localStorage.removeItem(TOKEN_KEY)
}

export default async function request(url: string, init?: RequestInit) {
  const resp = await fetch(url, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
      'Content-Type': 'application/json'
    },
    ...init
  })
  if (resp.status === 401) {
    onExpired()
    message.error('Token expired!')
    return { error: true, message: 'Token expired', data: null }
  }
  if (resp.ok) {
    const data = await resp.json()
    return { error: false, message: null, data }
  }
  const messageText = (await resp.text()) || resp.statusText
  message.error(messageText)
  return { error: true, message: messageText, data: null }
}

function appendParams(url: string, params: Record<string, string | number>) {
  const queryParams = new URLSearchParams()
  for (const [key, value] of Object.entries(params)) {
    queryParams.append(key, String(value))
  }
  return `${url}?${queryParams.toString()}`
}

export function getMyInfo() {
  return request('/api/user/me')
}

export function postLogin(data: LoginForm) {
  return request('/login', {
    method: 'POST',
    body: JSON.stringify(data)
  })
}

export function postRegister(data: RegisterForm) {
  return request('/register', {
    method: 'POST',
    body: JSON.stringify(data)
  })
}

export function getApps(args: CommonPagination) {
  return request(appendParams('/api/apps', args))
}

export function createApp(data: any) {
  return request('/api/apps', {
    method: 'POST',
    body: JSON.stringify(data)
  })
}

export function updateApp(id: string, data: any) {
  return request(`/api/apps/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data)
  })
}

export function removeApp(id: string) {
  return request(`/api/apps/${id}`, {
    method: 'DELETE'
  })
}
