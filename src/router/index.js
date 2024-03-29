import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import PostManager from '@/content/PostManager'
import NotFoundView from '../views/NotFoundView.vue'

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
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    ...routes,
    {
      path: "/:catchAll(.*)",
      name: 'NotFound',
      component: NotFoundView
    },
  ]
})

export default router
