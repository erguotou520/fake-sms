import { ConfigProvider } from 'antd'
import { Suspense, useEffect } from 'react'
import { HashRouter as Router, useLocation, useNavigate, useRoutes } from 'react-router-dom'
import routes from '~react-pages'
import { AppRoutes } from './constants'
import { useAuth } from './store'

function App() {
  const { init: initAuth } = useAuth()

  useEffect(() => {
    initAuth()
  }, [])

  return (
    <Router>
      <ConfigProvider>
        <_App />
      </ConfigProvider>
    </Router>
  )
}

function _App() {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const {
    ready,
    computed: { logged }
  } = useAuth()

  useEffect(() => {
    if (ready) {
      if (!logged) {
        if (pathname !== AppRoutes.Login || pathname !== AppRoutes.Register) {
          navigate(AppRoutes.Login, { replace: true })
        }
      }
    }
  }, [ready, logged, pathname, navigate])

  useEffect(() => {}, [])

  return <Suspense fallback={null}>{useRoutes(routes)}</Suspense>
}

export default App
