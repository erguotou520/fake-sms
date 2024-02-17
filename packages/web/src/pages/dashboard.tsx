import { AppRoutes } from '@/constants'
import { useAuth } from '@/store'
import { Dropdown, Modal } from 'antd'
import { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

const { useModal } = Modal

const DashboardLayout = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const { user, logout } = useAuth()
  const [modal, modalContextHolder] = useModal()

  const confirmLogout = () => {
    modal.confirm({
      title: 'Confirm logout',
      content: 'Are you sure you want to logout?',
      okButtonProps: { danger: true },
      onOk: () => {
        logout()
      }
    })
  }

  useEffect(() => {
    if (pathname === AppRoutes.Dashboard) {
      navigate(AppRoutes.AppList, { replace: true })
    }
  }, [pathname, navigate])

  return (
    <div>
      <header className="h-15 flex items-center shadow">
        <div className="container max-w-240 px-2 mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">Fake SMS</h1>
          <Dropdown
            menu={{
              items: [{ key: 'logout', label: 'Logout', onClick: confirmLogout }]
            }}
          >
            <a className="cursor-pointer">{user?.nickname}</a>
          </Dropdown>
        </div>
      </header>
      <main className="container max-w-240 mx-auto mt-10 px-2">
        <Outlet />
      </main>
      {modalContextHolder}
    </div>
  )
}

export default DashboardLayout
