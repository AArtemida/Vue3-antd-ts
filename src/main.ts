import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementPlus from 'element-plus'
import '@/styles/common.scss'

const app = createApp(App)

// 挂载vuex状态管理
app.use(ElementPlus)
.use(store)
.use(router)

// 路由准备就绪后挂载APP实例
router.isReady().then(() => app.mount('#app'))
