---
title: Vue3 vitepress
author: pcery
date: '2022-10-05'
showAccessNumber: true
categories:
 - 文档
tags:
 - 记录
 - vue3 vite
---

# 前端一些API记录&bug排查修复

## [QQ音乐API](https://rain120.github.io/qq-music-api/)

问题记录: 作者开发的获取播放歌曲链接的api(getMusicPlay)存在部分获取不到链接的情况

解决: 经排查作者请求参数缺少QQ音乐的一个字段，猜测这个字段可能与能不能播放有关？在comm参数中添加authst字段即可。
```
comm: {
      uin,
      format: 'json',
      ct: 19,
      cv: 0,
      authst: global.cookieObject.qqmusic_key,
    },
```
