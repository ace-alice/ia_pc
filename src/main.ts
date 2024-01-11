import '@/utils/initEnterData'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import mitt from 'mitt'
import App from './App.vue'
import router from './router'
import Tooltip from './directives/tooltip'
import { i18n } from '@/locale'
import '@/utils/flexible'

import 'normalize.css/normalize.css'

import './assets/fonts/index.scss'

import './guard'

// 引入event-bus方法

import LazyImage from '@/components/lazyImage/index.vue'

// 引入全局样式
import '@/theme/index.scss'

import 'default-passive-events'

// 引入你需要的组件
import 'element-plus/dist/index.css'

const pinia = createPinia()

if (window.__POWERED_BY_WUJIE__) {
  let instance: any
  // 引入数据管理工具
  window.__WUJIE_MOUNT = () => {
    instance = createApp(App)
    // 注册全局 event mitt方法
    instance.config.globalProperties.mittBus = mitt()
    instance.directive('tooltip', Tooltip)
    instance.component('LazyImage', LazyImage)
    instance.use(pinia).use(router).use(ElementPlus).use(i18n).mount('#app')
  }
  window.__WUJIE_UNMOUNT = () => {
    instance.unmount()
  }
  /*
    由于vite是异步加载，而无界可能采用fiber执行机制
    所以mount的调用时机无法确认，框架调用时可能vite
    还没有加载回来，这里采用主动调用防止用没有mount
    无界mount函数内置标记，不用担心重复mount
  */
  window.__WUJIE.mount()
}
else {
  const app = createApp(App)
  // 注册全局 event mitt方法
  app.config.globalProperties.mittBus = mitt()

  app.directive('tooltip', Tooltip)

  app.component('LazyImage', LazyImage)

  app.use(pinia).use(router).use(ElementPlus).use(i18n).mount('#app')
}
