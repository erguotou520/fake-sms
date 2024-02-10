import { useCallback, useState } from "react"
import type { SubscribeEvent, SubscribeEventData } from "~types"

function IndexPopup() {
  const [url, setUrl] = useState("")
  const [isUrlValid, setIsUrlValid] = useState<boolean>()
  const [listenType, setListenType] = useState<'phone' | 'app' | 'all'>("phone")
  const [phoneNumbers, setPhoneNumbers] = useState<string>()
  const [apps, setApps] = useState<string>()
  const [errMsg, setErrMsg] = useState<string>()

  const testServer = useCallback((v: string) => {
    fetch(`${v}/health`).then(resp => {
      resp.ok ? setIsUrlValid(true) : setIsUrlValid(false)
    }).catch(() => {
      setIsUrlValid(false)
    })
  }, [])

  const connectServer = useCallback((args: SubscribeEvent) => {
    chrome.runtime.onMessage.addListener((msg) => {
      if (msg.type === 'subscribe:success') {
        window.close()
      } else {
        setErrMsg(msg.error)
      }
    })
    chrome.runtime.sendMessage<SubscribeEventData>({ type: "subscribe", data: args })
  }, [])

  const onSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    setErrMsg(undefined)
    e.preventDefault()
    e.stopPropagation()
    if (!url) {
      return setErrMsg("Please input server url")
    }
    if (listenType === 'phone') {
      if (!phoneNumbers) {
        return setErrMsg("Please input phone numbers")
      }
      const numbers = phoneNumbers.split(',')
      connectServer({ type: 'phones', url, topics: numbers })
    } else if (listenType === 'app') {
      if (!apps) {
        return setErrMsg("Please input apps")
      }
      const appsList = apps.split(',')
      connectServer({ type: 'apps', url, topics: appsList })
    } else {
      connectServer({ type: 'all', url })
    }
  }, [url, listenType, phoneNumbers, apps])

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>fake-sms server url:</label>
        <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} onBlur={(e) => testServer(e.target.value)} />
        {isUrlValid === false && <div className="text-red-500">Invalid server url</div>}
        <label className="mt-4">Listen type:</label>
        <div>
          <input type="radio" name="listenType" value="phone" onChange={() => setListenType("phone")} />
          <input type="radio" name="listenType" value="app" onChange={() => setListenType("app")} />
          <input type="radio" name="listenType" value="all" onChange={() => setListenType("all")} />
        </div>
        {listenType == 'phone' ? (
          <>
            <label className="mt-4">Listen phone numbers:</label>
            <input type="text" value={phoneNumbers} placeholder="eg: 13800138000,13800138001" onChange={(e) => setPhoneNumbers(e.target.value)} />
          </>
        ) : listenType == 'app' ? (
          <>
            <label className="mt-4">Listen apps:</label>
            <input type="text" value={apps} placeholder="eg: QJhIneQFNcITXgqkyklQuVRXtJWBB5u4,wmDw8IQd6u9RmC5NCMiKEXBGBegeCFxH" onChange={(e) => setApps(e.target.value)} />
          </>
        ) : null}
        {errMsg && <div className="text-red-500">{errMsg}</div>}
        <button type="submit" className="mt-4">Connect</button>
      </form>
    </div>
  )
}

export default IndexPopup
