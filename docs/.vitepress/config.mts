import { defineConfig } from 'vitepress'
import { reactNative } from "../reactnative/config";

export default defineConfig({
  lang: 'ru-RU',
  title: "ShirmanovTech",
  description: "Knowledge base",
  themeConfig: {
    nav: [
      { text: 'Главная', link: '/' },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/dmtshirmanov' },
      { icon: 'github', link: 'https://github.com/Varlaar' },
    ],
    sidebar: [reactNative]
  }
})
