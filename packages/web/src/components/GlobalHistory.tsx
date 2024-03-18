import { NavigateFunction, useNavigate } from 'react-router-dom'

export let globalNavigate: NavigateFunction

export const GlobalHistory = () => {
  globalNavigate = useNavigate()

  return null
}
