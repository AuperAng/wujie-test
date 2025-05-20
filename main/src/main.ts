import {createApp, ref} from 'vue'
import App from './App.vue'
import router from './router'
import Wujie from 'wujie-vue3'
const { preloadApp } = Wujie
const app = createApp(App)

// export const L2_URL = "http://localhost:5177/"
export const L2_URL = "http://10.25.116.73:5177/"
// export const L2_URL = "http://10.25.101.63/C112_WEB/"//使用L2服务器
// export const L2_URL = "http://10.25.7.231:80/C112_WEB/"//使用自己的服务器
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

declare global{
    interface Window{
        $wujie:{
            shadowRoot?:ShadowRoot,
            props:Record<string, any>,
            bus:{
                $on:any,
                $emit:any,
            }
        },
    }
}