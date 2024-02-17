import { useCallback, useState } from 'react'

export function useDisclosure(
  initialState?: boolean,
  callbacks?: {
    onOpen?: () => void
    onClose?: () => void
  }
): readonly [
  boolean,
  {
    readonly open: () => void
    readonly close: () => void
    readonly toggle: () => void
  }
] {
  const { onOpen, onClose } = callbacks || {}
  const [opened, setOpened] = useState(initialState ?? false)
  const open = useCallback(() => {
    setOpened(isOpened => {
      if (!isOpened) {
        onOpen?.()
        return true
      }
      return isOpened
    })
  }, [onOpen])
  const close = useCallback(() => {
    setOpened(isOpened => {
      if (isOpened) {
        onClose?.()
        return false
      }
      return isOpened
    })
  }, [onClose])
  const toggle = useCallback(() => {
    opened ? close() : open()
  }, [close, open, opened])
  return [opened, { open, close, toggle }]
}
