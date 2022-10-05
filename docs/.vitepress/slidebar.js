export default {
  '/study/': [
    {
      text: 'Study',
      items: [
        { text: 'vitepress部署', link: '/study/vitepress/' },
        { text: '学习资源 备忘录',
        items: [
          { text: '前端常用插件记录', link: '/study/records/' },
          { text: 'QQ音乐API', link: '/study/records/api' },
        ] 
      },
        {
          text: 'typescript 学习',
          link: '/study/TS/',
          items: [
            { text: 'infer', link: '/study/TS/infer' },
          ]
        },
      ]
    }
  ],
  '/about/': [
    {
      text: 'About Me',
      items: [
        { text: '关于作者', link: '/about/' },
      ]
    }
  ]
}
