import { createApp } from '@/api'
import { useDisclosure } from '@/hooks'
import { AppItem } from '@/types'
import { useRequest } from 'ahooks'
import { Form, Input, Modal, message } from 'antd'
import { useEffect, useState } from 'react'

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
      close()
      if (success && onFinish) {
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
      <Form labelCol={{ span: 5 }} form={form}>
        <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please input app name!' }]}>
          <Input placeholder="App name" maxLength={12} />
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default EditAppModal
