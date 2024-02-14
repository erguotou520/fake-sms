import { defineConfig } from 'unocss'
// import { presetUno } from 'unocss'

export default defineConfig({
  cli: {
    entry: {
      patterns: ['**/*.tsx', '**/*.ts'],
      outFile: 'styles/styles.css'
    }
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
      shadow: 'var(--shadow-color)',
    },
  },
  shortcuts: {
    'label': 'block text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
    'btn': 'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2',
    'input': 'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm text-foreground shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-#a1a1aa disabled:cursor-not-allowed disabled:opacity-50',
    'tablist': 'h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground grid w-full',
    'tab': 'inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm bg-muted font-medium ring-offset-background transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow'
  }
})
