import { defineConfig } from 'unocss'
// import { presetUno } from 'unocss'

export default defineConfig({
  cli: {
    entry: {
      patterns: ['popup.tsx'],
      outFile: 'styles.css'
    }
  },
  theme: {
    colors: {
      primary: 'hsl(240 5.9% 10%)',
      'primary-foreground': 'hsl(0 0% 98%)',
      muted: 'hsl(240 4.8% 95.9%)',
      'muted-foreground': 'hsl(240 3.8% 46.1%)',
      foreground: 'hsl(240 10% 3.9%)',
      background: 'hsl(0 0% 100%)'
    }
  },
  preflights: [{
    getCSS: () => `*,::before,::after{box-sizing:border-box;border:0 solid #e5e7eb;}body{margin:0;padding:0;width:320px;}button{cursor:pointer;user-select:none;}`
  }],
  shortcuts: {
    'label': 'block text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
    'btn': 'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2',
    'input': 'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-#a1a1aa disabled:cursor-not-allowed disabled:opacity-50',
    'tablist': 'h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground grid w-full',
    'tab': 'inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow'
  }
})
