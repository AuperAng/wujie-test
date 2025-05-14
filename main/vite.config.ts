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
          // '/b08':'http://localhost:8080/'
      }
   }
})
