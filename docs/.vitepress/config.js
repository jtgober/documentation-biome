export default {
  title: 'Documentation-Biome',
  description: 'Just playing around.',
  themeConfig: {
    nav: [
      { text: 'Repo', link: 'https://github.com/jtgober/vipress' },
      {
        text: 'Check this out',
        items: [
          { text: 'About me', link: '/about/about' },
          { text: 'Item B', link: '/item-2' },
          { text: 'Item C', link: '/item-3' }
        ]
      }
    ],
    sidebar: [
      {
        text: 'About Section',
        collapsible: true,
        collapsed: true,
        items: [
          { text: 'About Me', link: '/about' },
          { text: 'About Me also but not really', link: 'https://en.wikipedia.org/wiki/Rickrolling' },
        ]
      },
      {
        text: 'Another Section. to be written',
        collapsible: true,
        collapsed: true,
        items: [
          { text: 'Item C', link: '/item-c' },
          { text: 'Item D', link: '/item-d' },
        ]
      }
    ]
  },
  markdown: {
    lineNumbers: true
  }
}