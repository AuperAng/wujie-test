import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
   server:{
      proxy:{
          '/iplat':{
              target:'http://localhost:8080',
              changeOrigin:true,
              rewrite:(path)=>path.replace(/^\/iplat/,'/iplat')
          },
          // '/trueL2':{
          //     target:'http://10.25.101.63',
          //     changeOrigin:true,
          //     ws:true,
          //     rewrite:(path)=>path.replace(/^\/trueL2/,''),
          // },
          '/ez2api':  {
              target:'http://10.25.7.231:80',
              changeOrigin:true,
              rewrite:(path)=>path.replace(/^\/ez2api/,'/ez2api'),
          },
          '/api': {
              target:'http://10.25.7.231:80',
              changeOrigin:true,
              rewrite:(path)=>path.replace(/^\/api/,'/api'),
          },
          '/b08':{
              target:'http://10.25.7.231:80',
              changeOrigin:true,
              ws:true,
              rewrite:(path)=>path.replace(/^\/b08/,'/c112'),
          }
      }
   }
})
