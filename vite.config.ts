import { defineConfig } from 'vite'
//import { createRouter, createWebHashHistory } from 'vue-router'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/Wanderingfeather/',
})
// const router = createRouter({
//    history: createWebHashHistory(),
//    routes: []
//  })