import {createApp, ref} from 'vue'
import App from './App.vue'
import router from './router'
import Wujie from 'wujie-vue3'
import WujieVue from "wujie-vue3"; //引入一下引入对应的框架
const { preloadApp } = Wujie
const app = createApp(App)

// export const L2_URL = "http://localhost:5177/"
export const L2_URL = "http://localhost:5177/"
export const CM_URL = "/iplat/web/BICR1453"
export const CM_URL2 = "/iplat/web/BICZ00"

export const L2_NAME = 'L2'
export const CM_NAME = 'CM'
export const CM2_NAME = 'CM2'
export const alive = ref(true)
export const runTime = ref(true)

app.use(router).use(Wujie) //注册一下

app.mount('#app')

preloadApp({ name: "L2", url: L2_URL, exec: true,alive:true })
preloadApp({ name: "CM", url: CM_URL, exec: true,alive:true })
preloadApp({ name: "CM2", url: CM_URL2, exec: true,alive:true })

const {bus} = WujieVue
/**外部操控子应用进行路由跳转*/
bus.$on('page-jump',(child:string,path:string)=>{
    const l2Window = (window.document.querySelector(`iframe[name=${child}]`) as HTMLIFrameElement | undefined)?.contentWindow
    if(!l2Window)return
    l2Window.location.href = l2Window.location.origin + path
})