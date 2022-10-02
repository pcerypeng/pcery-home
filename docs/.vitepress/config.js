module.exports = {
  title: "pcery's blog",
  description: "vitepress pcery's blog", //网站描述,会生成<meta>便签
  author: "pcerypeng",
  base: '/pcery-home/',
  markdown: {
    lineNumbers: true, //显示代码行数
  },
  lastUpdated: true, //以git提交的时间为更新时间
  themeConfig: {
    siteTitle: `pcery's home`,
    logo: '/img/avatar.png',
    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/gumingWu/vitepress-fun' }
    // ],
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Study', link: '/study/' },
      { text: 'About Me', link: '/about/' },
      // {
      //   text: 'Dropdown Menu',
      //   items: [
      //     { text: 'Item A', link: '/item-1' },
      //     { text: 'Item B', link: '/item-2' },
      //     { text: 'Item C', link: '/item-3' }
      //   ]
      // },
      { text: 'Changelog', link: 'https://github.com/...' }
    ],
    sidebar: {
      '/study/': [
        {
          text: 'Study',
          items: [
            { text: '敬请期待', link: '/study/' },
            { text: 'vitepress部署', link: '/study/vitepress/' },
            { text: '学习资源 备忘录', link: '/study/records/' },
            { text: 'TS', link: '/study/TS/',
            items: [
              { text: 'infer', link: '/study/TS/infer' },
            ] },
          ]
        }
      ],
      '/about/':[
        {
          text: 'About Me',
          items: [
            { text: '关于作者', link: '/about/' },
          ]
        }
      ]
      },
    // editLink: {
    //   pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path'
    // },
    lastUpdatedText: '上次更新时间', //最后更新时间文本
    docFooter: { //上下篇文本
      prev: '上一篇',
      next: '下一篇'
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present pcerypeng'
    }
    // socialLinks: [     // 信息栏展示社交信息
    //   { icon: 'github', link: "https://github.com/Younglina" },
    // ]
  },
};