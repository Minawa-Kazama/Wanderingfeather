import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import HelloWorld from '../components/HelloWorld.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: HelloWorld
  }
  // 可以在此处添加更多路由
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
