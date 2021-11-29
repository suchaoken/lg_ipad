import { createRouter, createWebHashHistory } from 'vue-router'
import Ipad from "../views/ipad.vue"
const routes = [
  {
    path: '/',
    name: 'ipad',
    component: Ipad
  },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
