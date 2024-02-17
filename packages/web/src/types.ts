export type UserClaim = {
  id: string
  nickname: string
}

export type LoginForm = {
  username: string
  password: string
}

export type RegisterForm = LoginForm & {
  nickname: string
}

export type CommonPagination = {
  limit?: number
  offset?: number
}

export type AppItem = {
  id: string
  name: string
  appId: string
  appSecret: string
  createdAt: string
}
