import { AppRoutes } from "@/constants"
import { MessageData, SubscribeData, SubscribeEventData, WebsocketReturnEventData } from "@/messages"
import { MinusCircleOutlined, RightOutlined } from "@ant-design/icons"
import { Button, Form, Input, Popover, Segmented, message as messageAnt, notification as notificationAnt } from "antd"
import { useCallback, useEffect, useMemo, useState } from "react"
import { NavLink, useSearchParams } from "react-router-dom"

const PublicMessagesPage = () => {
  const [notification, notificationContextHolder] = notificationAnt.useNotification()
  const [message, messageContextHolder] = messageAnt.useMessage()
  const [form] = Form.useForm<SubscribeData>()
  const [searchParams, setSearchParams] = useSearchParams()
  const type = useMemo(() => searchParams.get('type') as SubscribeData['type'] || 'all', [searchParams])
  const topics = useMemo(() => {
    const qTopics = searchParams.get('topics')
    return qTopics ? qTopics.split(',') : []
  }, [searchParams])
  const [messages, setMessages] = useState<MessageData[]>([])
  const formType = Form.useWatch('type', form) || 'all'
  const [popoverOpened, setPopoverOpened] = useState(false)

  const copy = (text: string) => {
    const matched = text.match(/\d+/)
    if (matched) {
      const number = matched[0]
      navigator.clipboard.writeText(number)
      message.success('Copied!')
    }
  }

  const onChangeOptions = (values: SubscribeData) => {
    let topics: string[] | null = null
    if (values.type !== 'all') {
      topics = values.topics.map(item => item?.trim()).filter(Boolean)
      if (!topics.length) {
        message.error('Please select at least one topic')
        return
      }
    }
    setPopoverOpened(false)
    setSearchParams(topics ? { type: values.type, topics: topics.join(',') } : { type: values.type })
  }

  const connectServer = useCallback(async () => {
    setMessages([])
    // pull messages from server
    try {
      const sq = new URLSearchParams()
      sq.set('type', type)
      if (type !== 'all') {
        sq.set('topics', topics.join(','))
      }
      const resp = await fetch(`/messages?${sq.toString()}`)
      const json = await resp.json()
      setMessages(json)

      const ws = new WebSocket(`${location.protocol === 'https:' ? 'wss' : 'ws'}://${location.host}/ws`)
      ws.onopen = () => {
        ws.onmessage = (event) => {
          const data: WebsocketReturnEventData = JSON.parse(event.data)
          if (data.type === 'subscribe:success' || data.type === 'unsubscribe:success') {
            message.success(data.data.message)
          } else if (data.type === 'notification') {
            notification.success({
              key: data.data.pushId,
              message: `To: ${data.data.topic}`,
              description: data.data.message,
              duration: 5,
              onClick: () => {
                copy(data.data.message)
                notification.destroy(data.data.pushId)
              }
            })
            setMessages(prevMessages => {
              const leftMessages = prevMessages.slice(0, 99)
              return [data.data, ...leftMessages]
            })
          }
        }
        ws.send(JSON.stringify({ type: 'subscribe', data: { type, topics } } as SubscribeEventData))
      }
      return ws
    } catch (error) {
      console.error(error)
    }
  }, [type, topics])

  useEffect(() => {
    form.setFieldsValue({ type, topics })
    let ws: WebSocket | undefined
    connectServer().then(_ws => {
      ws = _ws
    })
    if (ws) {
      ws.close()
      setMessages([])
    }
  }, [type, topics])

  return (
    <div>
      <header className="h-15 flex items-center shadow">
        <div className="container max-w-240 px-2 mx-auto flex justify-between items-center">
          <NavLink to={AppRoutes.Dashboard} className="text-2xl font-bold text-primary">Fake SMS</NavLink>
          <Popover open={popoverOpened} trigger="click" onOpenChange={setPopoverOpened} content={<Form className="w-64" form={form} onFinish={onChangeOptions}>
            <Form.Item name="type">
              <Segmented<SubscribeData['type']> options={['all', 'apps', 'phones']} />
            </Form.Item>
            {formType !== 'all' &&
              <Form.Item name="topics" noStyle className="!mb-0">
                <Form.List name="topics">
                  {(fields, { add, remove }) => <>
                    {fields.map((field) => (
                      <Form.Item key={field.key} noStyle>
                        <div className="flex items-center space-x-2 w-full">
                          <Form.Item className="flex-1" {...field}>
                            <Input placeholder={formType === 'phones' ? 'eg: 13800138000' : 'eg: QJhIneQFNcITXgqkyklQuVRXtJWBB5u4'} />
                          </Form.Item>
                          <div className="mb-6">
                            <MinusCircleOutlined onClick={() => remove(field.name)} />
                          </div>
                        </div>
                      </Form.Item>
                    ))}
                    <Form.Item>
                      <Button type="dashed" onClick={() => add()} block>Add</Button>
                    </Form.Item>
                  </>
                  }
                </Form.List>
              </Form.Item>}
            <Form.Item className="!mb-0">
              <Button type="primary" htmlType="submit" className="w-full">Subscribe</Button>
            </Form.Item>
          </Form>}>
            <Button type="text" className="inline-flex items-center text-primary">Listen to: {type} <RightOutlined className="ml-1" /> </Button>
          </Popover>
        </div>
      </header>
      <main className="container max-w-240 mx-auto mt-10 px-2">
        <div className="divide-y divide-border">
          {messages.map(msg => (
            <div
              key={msg.pushId}
              className="py-2 px-3 text-sm cursor-pointer hover:bg-background-hover"
              onClick={() => copy(msg.message)}
            >
              <div className="flex items-center text-sm italic text-muted">
                To:(<span className="text-muted-foreground">{msg.topic}</span>)<span className="ml-auto">{msg.createdAt}</span>
              </div>
              <div className="mt-1 flex items-center text-base">
                <svg className="mt-2px" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                  <title>Message</title>
                  <path
                    fill="currentColor"
                    d="M8 10.77q.31 0 .54-.23q.23-.23.23-.54q0-.31-.23-.54q-.23-.23-.54-.23q-.31 0-.54.23q-.23.23-.23.54q0 .31.23.54q.23.23.54.23m4 0q.31 0 .54-.23q.23-.23.23-.54q0-.31-.23-.54q-.23-.23-.54-.23q-.31 0-.54.23q-.23.23-.23.54q0 .31.23.54q.23.23.54.23m4 0q.31 0 .54-.23q.23-.23.23-.54q0-.31-.23-.54q-.23-.23-.54-.23q-.31 0-.54.23q-.23.23-.23.54q0 .31.23.54q.23.23.54.23M6.077 17l-1.704 1.704q-.379.379-.876.174Q3 18.673 3 18.133V4.615q0-.69.463-1.152Q3.925 3 4.615 3h14.77q.69 0 1.152.463q.463.462.463 1.152v10.77q0 .69-.462 1.153q-.463.462-1.153.462zm-.427-1h13.735q.23 0 .423-.192q.192-.193.192-.423V4.615q0-.23-.192-.423Q19.615 4 19.385 4H4.615q-.23 0-.423.192Q4 4.385 4 4.615v13.03zM4 16V4z"
                  />
                </svg>
                <span className="ml-1">{msg.message}</span>
              </div>
            </div>
          ))}
          {!messages.length && <div className="my-20 text-center text-sm text-muted">No messages yet</div>}
        </div>
      </main>
      {messageContextHolder}
      {notificationContextHolder}
    </div>
  )
}

export default PublicMessagesPage
