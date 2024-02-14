import type { MessageData } from '~types'
import { showToast } from '~utils'

interface MessageListPageProps {
  messages: MessageData[]
  onChangeConfig: VoidCallback
}

const MessageListPage = ({ messages, onChangeConfig }: MessageListPageProps) => {
  const copy = (text: string) => {
    const matched = text.match(/\d+/)
    if (matched) {
      const number = matched[0]
      navigator.clipboard.writeText(number)
      showToast('Copied!', {
        cb: () => {
          setTimeout(() => {
            window.close()
          }, 1000)
        }
      })
    }
  }
  return (
    <>
      <div className="flex items-center px-3 py-2 shadow-md shadow-shadow">
        <div className="w-4" />
        <div className="flex-1 text-center">Message box</div>
        <svg
          onClick={() => onChangeConfig()}
          xmlns="http://www.w3.org/2000/svg"
          className="cursor-pointer"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <title>Settings</title>
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z" />
          <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
        </svg>
      </div>
      <div className="divide-y divide-border max-h-100 overflow-y-auto">
        {messages.map(msg => (
          <div
            key={msg.pushId}
            className="py-2 px-3 text-sm cursor-pointer hover:bg-background-hover"
            onClick={() => copy(msg.message)}
          >
            <div className="flex items-center text-10px text-muted italic">
              To:({msg.topic})<span className="ml-auto">{msg.createdAt}</span>
            </div>
            <div className="mt-1 flex items-center">
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
    </>
  )
}

export default MessageListPage
