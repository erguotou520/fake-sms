import { defineConfig } from 'unocss'
import {presetUno} from 'unocss'
import {presetDaisy} from 'unocss-preset-daisy'

export default defineConfig({
  presets: [
    presetUno(),
    presetDaisy()
  ]
})
