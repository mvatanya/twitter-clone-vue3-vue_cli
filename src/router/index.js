import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home'
import UserProfile from '../views/UserProfile'
import Admin from '../views/Admin'

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
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    meta: {
      requiresAdmin: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


// this function will run before everything
router.beforeEach(async (to, from ,next) => {
  const isAdmin = false;
  const requiresAdmin = to.matched.some(record => record.meta.requiresAdmin)

  if(requiresAdmin && !isAdmin) next({ name: 'Home' }) //next will redirect you in this case to Home route if isAdmin is required but the request didn't come from an admin
  else next();
})

export default router
