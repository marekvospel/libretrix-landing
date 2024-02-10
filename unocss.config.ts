import { defineConfig, presetIcons, presetUno, transformerDirectives } from "unocss";

export default defineConfig({
  transformers: [
    transformerDirectives(),
  ],
  presets: [
    presetUno(),
    presetIcons(),
  ],
  theme: {
    colors: {
      text: {
        light: '#E8E8E8',
        DEFAULT: '#E8E8E8',
        semilight: '#CBCBCB',
        dark: '#383333',
      },
      primary: {
        400: "#70CBF1",
        DEFAULT: "#4EBEEE",
        500: "#4EBEEE",
        600: "#35A0CD",
        900: "#101937",
      }
    }
  }
})