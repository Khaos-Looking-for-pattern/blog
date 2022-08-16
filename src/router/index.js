import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PostManager from '@/content/PostManager'

let routes = []
PostManager.getRegisteredPost().forEach(route => {
  routes.push({
    path: `/${route.link}`,
    name: route.link,
    component: route.component
  })
});

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    ...routes
  ]
})

export default router
