import type { SubscribeEvent, WebsocketReturnEventData } from "~types";

function copy(text: string) {
  navigator.clipboard.writeText(text)
}

chrome.notifications.getPermissionLevel(level => {
  if (level === 'granted') {
    console.log('notifications are allowed')
  } else {
    console.log('notifications are not allowed')
  }
})


function connectWebsocket(args: SubscribeEvent) {
  const ws = new WebSocket(args.url.replace(/http/, 'ws').replace(/https/, 'wss') + '/ws')
  ws.onopen = () => {
    ws.onmessage = (event) => {
      const data: WebsocketReturnEventData = JSON.parse(event.data)
      if (data.type === 'subscribe:success' || data.type === 'unsubscribe:success') {
        chrome.runtime.sendMessage(data)
      } else if (data.type === 'notification') {
        chrome.notifications.create(data.data.pushId, {
          iconUrl: chrome.runtime.getURL('assets/sms.png'),
          type: 'basic',
          title: 'fake-sms(Click to copy)',
          contextMessage: data.data.topic,
          message: data.data.message
        })
        const matched = data.data.message.match(/\d+/)
        if (matched) {
          const number = matched[0]
          const onClicked = (notificationId) => {
            chrome.notifications.onClicked.removeListener(onClicked)
            if (notificationId === data.data.pushId) {
              chrome.tabs.query({ active: true }, (tabs) => {
                if (tabs.length) {
                  chrome.scripting.executeScript({
                    target: { tabId: tabs[0].id },
                    func: copy,
                    args: [number]
                  }).catch(() => {}).then(resp => {
                    chrome.notifications.clear(data.data.pushId)
                  })
                }
              })
            }
          }
          chrome.notifications.onClicked.addListener(onClicked)
        }

      }
    }
    ws.send(JSON.stringify({ type: 'subscribe', data: args }))
  }
}

chrome.runtime.onMessage.addListener((msg) => {
  if (msg.type === 'subscribe') {
    connectWebsocket(msg.data)
  }
})
