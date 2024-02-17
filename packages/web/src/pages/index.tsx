import { AppRoutes } from '@/constants'
import { useAuth } from '@/store'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const IndexPage = () => {
  const navigate = useNavigate()
  const {
    computed: { logged },
    ready
  } = useAuth()
  useEffect(() => {
    if (ready) {
      if (logged) {
        navigate(AppRoutes.Dashboard)
      } else {
        navigate(AppRoutes.Login)
      }
    }
  }, [logged, ready, navigate])
  return <></>
}

export default IndexPage
