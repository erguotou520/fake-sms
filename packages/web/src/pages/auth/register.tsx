import { AppRoutes } from '@/constants'
import { useAuth } from '@/store'
import { RegisterForm } from '@/types'
import { Button, Form, Input } from 'antd'
import { NavLink, useNavigate } from 'react-router-dom'

const RegisterPage = () => {
  const navigate = useNavigate()
  const { register } = useAuth()
  const onFinish = async ({ confirmPassword, ...values }: RegisterForm & { confirmPassword: string }) => {
    if (await register(values)) {
      navigate(AppRoutes.Dashboard)
    }
  }

  return (
    <Form name="register" onFinish={onFinish}>
      <Form.Item>
        <h2 className="text-center text-2xl font-medium">Register</h2>
      </Form.Item>
      <Form.Item name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
        <Input placeholder="Username" maxLength={20} />
      </Form.Item>

      <Form.Item name="nickname" rules={[{ required: true, message: 'Please input your nickname!' }]}>
        <Input placeholder="Nickname" maxLength={20} />
      </Form.Item>

      <Form.Item name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
        <Input.Password placeholder="Password" minLength={6} maxLength={16} />
      </Form.Item>
      <Form.Item
        name="confirmPassword"
        dependencies={['password']}
        rules={[
          {
            required: true,
            message: 'Please confirm your password!'
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve()
              }
              return Promise.reject(new Error('The new password that you entered do not match!'))
            }
          })
        ]}
      >
        <Input.Password placeholder="Confirm Password" minLength={6} maxLength={16} />
      </Form.Item>

      <Form.Item>
        <Button className="w-full" type="primary" htmlType="submit">
          Register
        </Button>
        <div className="mt-4 flex items-center">
          Already have an account?{' '}
          <NavLink to={AppRoutes.Login} className="ml-1 text-primary">
            Login
          </NavLink>
        </div>
      </Form.Item>
    </Form>
  )
}

export default RegisterPage
