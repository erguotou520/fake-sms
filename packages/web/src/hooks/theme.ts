import { useEffect, useState } from "react"

export function useTheme() {
  const [theme, setTheme] = useState<'dark' | 'light'>('light')

  useEffect(() => {
    // set theme based on system preference && watch for changes
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const root = document.documentElement
    root.classList.toggle('dark', prefersDark)
    setTheme(prefersDark ? 'dark' : 'light')

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      root.classList.toggle('dark', e.matches)
      setTheme(e.matches ? 'dark' : 'light')
    })
  }, [])

  return theme
}
