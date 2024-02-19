import { defineConfig } from 'unocss'

export default defineConfig({
  content: {
    filesystem: ['./src/**/*.{ts,tsx}']
  },
  theme: {
    colors: {
      primary: 'var(--primary-color)',
      'primary-foreground': 'var(--primary-foreground-color)',
      muted: 'var(--muted-color)',
      'muted-foreground': 'var(--muted-foreground-color)',
      foreground: 'var(--text-color)',
      background: 'var(--bg-color)',
      'background-hover': 'var(--bg-hover-color)',
      border: 'var(--border-color)',
      shadow: 'var(--shadow-color)'
    }
  }
})
