export function showToast(msg, args?: { duration?: number; textClassName?: string; cb?: VoidCallback }) {
  const $toast = document.createElement('div')
  $toast.className =
    'fixed left-2 right-2 top-1 z-999 flex items-center px-3 py-2 rounded-md border text-foreground bg-background text-base shadow shadow-shadow transition-all duration-300 ease-in-out transform -translate-y-10'
  $toast.innerHTML = `<div class="mr-2 ${args?.textClassName ?? ''}">${msg}</div>
  <svg class="ml-auto close" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"></path></svg>`
  const $close = $toast.querySelector('.close')
  function close() {
    $toast.classList.add('translate-x-1/1', 'opacity-0')
    $toast.addEventListener('transitionend', () => {
      $toast.remove()
      args?.cb?.()
    })
  }
  $close.addEventListener('click', close)
  document.body.appendChild($toast)
  setTimeout(() => {
    $toast.classList.remove('-translate-y-10')
  }, 60)
  setTimeout(() => {
    close()
  }, args?.duration ?? 2000)
}
