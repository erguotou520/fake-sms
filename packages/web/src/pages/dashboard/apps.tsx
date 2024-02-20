import { getApps, removeApp } from '@/api'
import { AppItem } from '@/types'
import { CopyOutlined, DeleteOutlined, EditOutlined, MessageOutlined, PlusOutlined, SettingOutlined } from '@ant-design/icons'
import { usePagination } from 'ahooks'
import { Button, Card, Drawer, Empty, Modal, Pagination, message as AntMessage } from 'antd'
import { useRef } from 'react'
import { useState } from 'react'
import EditAppModal, { EditAppModalActions } from './components/EditModal'

const { useModal } = Modal
const PAGE_SIZE = 12

const AppsPage = () => {
  const [modal, modalContextHolder] = useModal()
  const [message, messageContextHolder] = AntMessage.useMessage()
  const [viewingApp, setViewingApp] = useState<AppItem | null>(null)

  const modalRef = useRef<EditAppModalActions>()

  const request = usePagination<{ list: AppItem[]; total: number }, [{ current: number; pageSize: number }]>(
    async ({ current, pageSize }) => {
      const { error, data } = await getApps({ limit: pageSize, offset: (current - 1) * pageSize })
      return error ? [] : data
    },
    {
      defaultPageSize: PAGE_SIZE
    }
  )

  const confirmDelete = (app: AppItem) => {
    modal.confirm({
      title: `Delete app "${app.name}"?`,
      content: 'This operation is irreversible.',
      okButtonProps: { danger: true },
      onOk: async () => {
        const { error } = await removeApp(app.id)
        if (!error) {
          message.success('App deleted successfully.')
          request.refresh()
        }
      }
    })
  }

  const createApp = () => {
    modalRef.current?.openModal()
  }

  const editApp = (app: AppItem) => {
    modalRef.current?.openModal(app)
  }

  const openMessages = (app: AppItem) => {
    window.open(`#/messages?type=apps&topics=${app.id}`, `_${app.id}`)
  }

  function copy(text?: string) {
    if (!text) return
    navigator.clipboard.writeText(text)
    message.success('Copied to clipboard.')
  }

  const createBtn = (
    <Button type="dashed" className="flex items-center" onClick={() => createApp()}>
      <PlusOutlined /> Create an App
    </Button>
  )

  return (
    <>
      {!!request.data?.list.length && createBtn}
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {request.data?.list.map(app => (
          <Card
            key={app.id}
            title={app.name}
            actions={[
              <EditOutlined className="cursor-pointer" onClick={() => editApp(app)} />,
              <SettingOutlined className="cursor-pointer" onClick={() => setViewingApp(app)} />,
              <MessageOutlined className="cursor-pointer" onClick={() => openMessages(app)} />,
              <DeleteOutlined className="!hover:text-red-500 cursor-pointer" onClick={() => confirmDelete(app)} />
            ]}
          >
            <div className="text-xs italic">created at: {app.createdAt}</div>
          </Card>
        ))}
      </div>
      <Pagination
        hideOnSinglePage
        total={request.data?.total}
        pageSize={request.pagination.pageSize}
        current={request.pagination.current}
        onChange={v => request.run({ current: v, pageSize: PAGE_SIZE })}
      />
      {!request.loading && request.data?.list.length === 0 && (
        <Empty className="my-10 flex flex-col items-center justify-center" description="No apps found.">
          {createBtn}
        </Empty>
      )}
      <Drawer title="App API Key" width={360} open={viewingApp !== null} onClose={() => setViewingApp(null)}>
        <div>App ID:</div>
        <div className="py-1 flex items-center">
          <div className="truncate">{viewingApp?.appId}</div>
          <CopyOutlined className="ml-2 cursor-pointer hover:text-primary" onClick={() => copy(viewingApp?.appId)} />
        </div>
        <div className="mt-4">App Secret:</div>
        <div className="py-1 flex items-center">
          <div className="truncate">{viewingApp?.appSecret}</div>
          <CopyOutlined
            className="ml-2 cursor-pointer hover:text-primary"
            onClick={() => copy(viewingApp?.appSecret)}
          />
        </div>
      </Drawer>
      <EditAppModal actionRef={modalRef} onFinish={() => request.refresh()} />
      {modalContextHolder}
      {messageContextHolder}
    </>
  )
}

export default AppsPage
