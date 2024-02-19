import { createApp } from '@/api'
import { useDisclosure } from '@/hooks'
import { AppItem } from '@/types'
import { useRequest } from 'ahooks'
import { Form, Input, InputNumber, Modal, Switch, message } from 'antd'
import { useEffect, useMemo, useState } from 'react'

export type EditAppModalActions = {
  openModal: (app?: AppItem) => void
}

type EditAppModalProps = {
  actionRef: React.MutableRefObject<EditAppModalActions | undefined>
  onFinish?: () => void
}

const EditAppModal = ({ actionRef, onFinish }: EditAppModalProps) => {
  const [form] = Form.useForm()
  const [app, setApp] = useState<AppItem>()
  const isEdit = !!app
  const [opened, { open, close }] = useDisclosure()

  const rateLimitEnabled = Form.useWatch('rateLimitEnabled', form)

  const initialValues = useMemo(() => {
    if (isEdit) {
      return app
    }
    return {
      rateLimitEnabled: false,
      rateLimitCount: 1,
      rateLimitDuration: 60
    }
  }, [isEdit, app])

  const onCancel = () => {
    close()
    form.resetFields()
  }

  const submitRequest = useRequest(
    async () => {
      const values = await form.validateFields()
      if (!values) {
        return false
      }
      let success = true
      if (isEdit) {
        //
      } else {
        const { error } = await createApp(values)
        if (!error) {
          message.success('App created successfully')
          form.resetFields()
        }
        success = !error
      }
      if (success && onFinish) {
        close()
        onFinish()
      }
      return success
    },
    {
      manual: true
    }
  )

  useEffect(() => {
    if (!actionRef?.current) {
      actionRef.current = {
        openModal: (app?: AppItem) => {
          setApp(app)
          form.setFieldsValue({
            name: app?.name
          })
          open()
        }
      }
    }
  }, [form, open])

  return (
    <Modal
      title={isEdit ? 'Edit app' : 'Create app'}
      open={opened}
      onCancel={onCancel}
      okButtonProps={{
        htmlType: 'submit',
        loading: submitRequest.loading
      }}
      onOk={submitRequest.run}
    >
      <Form labelCol={{ span: 5 }} form={form} initialValues={initialValues}>
        <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please input app name!' }]}>
          <Input placeholder="App name" maxLength={12} />
        </Form.Item>
        <Form.Item noStyle>
          <Form.Item label="Rate limit" name="rateLimitEnabled">
            <Switch />
          </Form.Item>
          {rateLimitEnabled && (
            <div className='flex items-center space-x-2'>
              <Form.Item name="rateLimitCount" className='!mb-0' rules={[{ required: true, message: 'Required!' }]}>
                <InputNumber placeholder="Limit count" />
              </Form.Item>
              <span>messages per</span>
              <Form.Item name="rateLimitDuration" className='!mb-0' rules={[{ required: true, message: 'Required!' }]}>
                <InputNumber placeholder="per second" />
              </Form.Item>
              <span>seconds / phone</span>
            </div>
          )}
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default EditAppModal
