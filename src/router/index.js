import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home'
import UserProfile from '../views/UserProfile'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/user/:userId',
    name: 'UserProfile',
    component: UserProfile
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
