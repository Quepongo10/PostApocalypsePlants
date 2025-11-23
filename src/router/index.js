import { createRouter, createWebHistory } from 'vue-router'
import cam1 from '../pages/cam1.vue'
import cam2 from '../pages/cam2.vue'
import cam3 from '../pages/cam3.vue'
import cam4 from '../pages/cam4.vue'
import cam5 from '../pages/cam5.vue'

const routes = [
  { path: '/', component: cam1 },
  { path: '/cam2', component: cam2 },
  { path: '/cam3', component: cam3 },
  { path: '/cam4', component: cam4 },
  { path: '/cam5', component: cam5 }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
