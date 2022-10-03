import slidebar from './slidebar';
import nav from './nav'

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
    nav: nav,
    sidebar: slidebar,
    lastUpdatedText: '上次更新时间', //最后更新时间文本
    docFooter: { //上下篇文本
      prev: '上一篇',
      next: '下一篇'
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present pcerypeng'
    },
    socialLinks: [     // 信息栏展示社交信息
      { icon: 'github', link: "https://github.com/pcerypeng/pcery-home" },
    ]
  },
};