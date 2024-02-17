import { defineConfig } from 'unocss'

export default defineConfig({
  content: {
    filesystem: ['./src/**/*.{ts,tsx}']
  },
  theme: {
    colors: {
      primary: '#1677ff'
    }
  }
})
