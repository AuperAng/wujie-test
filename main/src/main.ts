import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Wujie from 'wujie-vue3' //引入一下引入对应的框架
//import Wujie from 'wujie-vue-setup'
const { preloadApp } = Wujie
const app = createApp(App)

export const L2_URL = "http://localhost:5177/"
export const CM_URL = "/iplat/web/BICZ00"
export const L2_NAME = 'L2'
export const CM_NAME = 'CM'

app.use(router).use(Wujie) //注册一下

app.mount('#app')

preloadApp({ name: "L2", url: L2_URL, exec: true })
preloadApp({ name: "CM", url: CM_URL, exec: true })