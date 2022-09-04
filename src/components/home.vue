// .vitepress/components/home.vue
<script setup>
  import { ref, watch } from 'vue';
const list = ['pc的侧边栏测试'];
const isPC = ref((() => {
  if (window.navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)) {
    return false; // 移动端
  } else {
    return true; // PC端
  }
})());
const isShowSlider = ref(() => isPC.value);
const sliderWidth = ref('100%');
watch(() => isPC.value, (cur) => {
  sliderWidth.value = cur ? '100%' : '90%';
})
</script>
<template>
  <div v-if="isShowSlider" class="home-wrapper">
    <div v-for="item in list" :key="item" class="home-item">{{ item }}</div>
  </div>
</template>
<style>
.VPContent.is-home {
  width: sliderWidth !important;
}

.home-wrapper {
  text-align: center;
  position: fixed;
  right: 20px;
  top: var(--vp-nav-height-desktop);
}

.home-item {
  vertical-align: middle;
  margin: 4px 4px 10px;
  padding: 4px 8px;
  font-weight: bolder;
  display: inline-block;
  cursor: pointer;
  border-radius: 2px;
  line-height: 13px;
  font-size: 13px;
  box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.1);
  transition: all 0.5s;
}
</style>