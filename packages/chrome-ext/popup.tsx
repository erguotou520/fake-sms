import { Storage } from '@plasmohq/storage'
import { useEffect, useState } from 'react'
import ConfigPage from '~components/ConfigPage'
import MessageListPage from '~components/MessageList'
import type { MessageData, SubscribeEvent, SubscribeEventData, WebsocketReturnEventData } from '~types'
import { showToast } from '~utils'
import { autoTheme } from '~utils/theme'

import './styles/global.css'
import './styles/styles.css'

const storage = new Storage()

function IndexPopup() {
  const [ready, setReady] = useState(false)
  const [config, setConfig] = useState<SubscribeEvent>(null)
  const [messages, setMessages] = useState<MessageData[]>([])

  const connectServer = async (args: SubscribeEvent) => {
    // unsubscribe previous server
    const prevConfig = await storage.get<SubscribeEvent>('config')
    if (prevConfig) {
      chrome.runtime.sendMessage<SubscribeEventData>({ type: 'unsubscribe', data: prevConfig })
      setMessages([])
    }
    // pull messages from server
    try {
      const sq = new URLSearchParams()
      sq.set('type', args.type)
      if (args.type !== 'all') {
        sq.set('topics', args.topics.join(','))
      }
      const resp = await fetch(`${args.url.replace(/\/$/, '')}/messages?${sq.toString()}`)
      const json = await resp.json()
      setMessages([...messages, ...json])
      const onMessage = async (msg: WebsocketReturnEventData) => {
        if (msg.type === 'subscribe:success') {
          await storage.set('config', args)
          // if (close) {
          //   window.close()
          // }
        } else if (msg.type === 'notification') {
          const leftMessages = messages.slice(0, 19)
          setMessages([msg.data, ...leftMessages])
        } else {
          showToast('Unknown message', {
            textClassName: 'text-red-500'
          })
        }
      }
      chrome.runtime.onMessage.addListener(onMessage)
      chrome.runtime.sendMessage<SubscribeEventData>({ type: 'subscribe', data: args })
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    storage
      .get<SubscribeEvent>('config')
      .catch(() => {})
      .then(config => {
        if (config) {
          setConfig(config)
        }
        setReady(true)
      })
    autoTheme()
  }, [])

  useEffect(() => {
    if (config) {
      connectServer(config)
    }
  }, [config])

  if (!ready) {
    return <div>Loading...</div>
  }

  if (!config) {
    return <ConfigPage setConfig={setConfig} />
  }
  return <MessageListPage messages={messages} onChangeConfig={() => setConfig(null)} />
}

export default IndexPopup
