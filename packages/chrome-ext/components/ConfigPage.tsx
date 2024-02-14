import { useCallback, useState } from 'react'
import type { SubscribeEvent } from '~types'

function ConfigPage(props: { setConfig: (args: SubscribeEvent) => void }) {
  const { setConfig } = props
  const [url, setUrl] = useState('')
  const [isUrlValid, setIsUrlValid] = useState<boolean>()
  const [listenType, setListenType] = useState<'phone' | 'app' | 'all'>('phone')
  const [phoneNumbers, setPhoneNumbers] = useState<string>()
  const [apps, setApps] = useState<string>()
  const [errMsg, setErrMsg] = useState<string>()
  const [loading, setLoading] = useState(false)

  const testServer = useCallback((v: string) => {
    setLoading(true)
    return fetch(`${v}/health`)
      .then(resp => {
        resp.ok ? setIsUrlValid(true) : setIsUrlValid(false)
        setLoading(false)
        return resp.ok
      })
      .catch(() => {
        setIsUrlValid(false)
        setLoading(false)
        return false
      })
  }, [])

  const onSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      setErrMsg(undefined)
      e.preventDefault()
      e.stopPropagation()
      if (!url) {
        return setErrMsg('Please input server url')
      }
      if (await testServer(url)) {
        if (listenType === 'phone') {
          if (!phoneNumbers) {
            return setErrMsg('Please input phone numbers')
          }
          const numbers = phoneNumbers.split(',')
          setConfig({ type: 'phones', url, topics: numbers })
        } else if (listenType === 'app') {
          if (!apps) {
            return setErrMsg('Please input apps')
          }
          const appsList = apps.split(',')
          setConfig({ type: 'apps', url, topics: appsList })
        } else {
          setConfig({ type: 'all', url })
        }
      }
    },
    [url, listenType, phoneNumbers, apps]
  )

  return (
    <form className="w-screen p-4" onSubmit={onSubmit}>
      <label className="label mb-2">fake-sms server url:</label>
      <input
        className="input"
        type="text"
        placeholder="eg: http://localhost:7878"
        value={url}
        onChange={e => setUrl(e.target.value)}
        onBlur={e => testServer(e.target.value)}
      />
      {isUrlValid === false && <div className="mt-1 text-red-500">Invalid server url</div>}
      <label className="label mt-4 mb-2">Listen type:</label>
      <div className="tablist grid-cols-3">
        <button
          type="button"
          className="tab"
          data-state={listenType === 'phone' ? 'active' : 'inactive'}
          onClick={() => setListenType('phone')}
        >
          Phone
        </button>
        <button
          type="button"
          className="tab"
          data-state={listenType === 'app' ? 'active' : 'inactive'}
          onClick={() => setListenType('app')}
        >
          Apps
        </button>
        <button
          type="button"
          className="tab"
          data-state={listenType === 'all' ? 'active' : 'inactive'}
          onClick={() => setListenType('all')}
        >
          All
        </button>
      </div>
      {listenType === 'phone' ? (
        <>
          <label className="label mt-4 mb-2">Listen phone numbers:</label>
          <input
            className="input"
            type="text"
            value={phoneNumbers}
            placeholder="eg: 13800138000,13800138001"
            onChange={e => setPhoneNumbers(e.target.value)}
          />
        </>
      ) : listenType === 'app' ? (
        <>
          <label className="label mt-4 mb-2">Listen apps:</label>
          <input
            className="input"
            type="text"
            value={apps}
            placeholder="eg: QJhIneQFNcITXgqkyklQuVRXtJWBB5u4,wmDw8IQd6u9RmC5NCMiKEXBGBegeCFxH"
            onChange={e => setApps(e.target.value)}
          />
        </>
      ) : null}
      {errMsg && <div className="mt-1 text-red-500">{errMsg}</div>}
      <button type="submit" disabled={loading} className="btn my-4 w-full">
        Connect
      </button>
    </form>
  )
}

export default ConfigPage
