// .vitepress/theme/index.js
import MyLayout from './MyLayout.vue'
import DefaultTheme from 'vitepress/theme' //viteperss的主题
import './app.css'

export default {
  ...DefaultTheme,
  Layout: MyLayout,
    
  enhanceApp({ app, router, siteData }) {
    // app is the Vue 3 app instance from `createApp()`.
    // router is VitePress' custom router. `siteData` is
    // a `ref` of current site-level metadata.
    console.log(app,router,siteData)
  },

  setup() {
    // this function will be executed inside VitePressApp's
    // setup hook. all composition APIs are available here.
  }
}