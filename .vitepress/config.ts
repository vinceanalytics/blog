import { defineConfig } from 'vitepress'
import { genFeed } from './genFeed.js'

export default defineConfig({
  title: 'Vince Analytics',
  description: 'The official blog for the vince project',
  cleanUrls: true,
  base: "/blog",
  head: [
    ['meta', { name: 'twitter:site', content: '@gernesti' }],
    ['meta', { name: 'twitter:card', content: 'summary' }],
    [
      'link',
      {
        rel: 'icon',
        href: "/logo.svg",
      }
    ],
  ],
  buildEnd: genFeed
})
