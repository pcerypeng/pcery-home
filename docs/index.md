---
layout: home

hero:
  name: 而翌
  text: 记录美好❤️‍🔥的地方
  tagline: 往事并不如烟，故事仍将继续...
  image:
    src: /img/avatar.png
    alt: VitePress
  actions:
    - theme: brand
      text: About me
      link: /about/
    - theme: alt
      text: View on GitHub
      link: https://github.com/pcerypeng/pcery-home

features:
  - icon: 📖
    title: 记录学习
    details: 一名程序员的学习记录
  - icon: 👦
    title: 记录生活
    details: 一个男孩的碎碎念
  - icon: 🆕
    title: 最新记录
    details: nothing
---
<script setup>
import Home from '../src/components/home.vue';
</script>
<Home />