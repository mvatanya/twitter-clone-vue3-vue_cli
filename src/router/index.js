import { createRouter, createWebHistory } from 'vue-router'
import store from '../store';
import { users } from '../assets/users'
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
  history: createWebHistory(),
  routes
})

// Router Guard
// this function will run before everything
router.beforeEach(async (to, from ,next) => {
  const user = store.state.User.user;

  if (!user){
    // in real use case, can get current user from local storage, api, etc
    // this example just for an easy use
    await store.dispatch('User/setUser', users[0])
  }

  const isAdmin = false;
  const requiresAdmin = to.matched.some(record => record.meta.requiresAdmin)

  if(requiresAdmin && !isAdmin) next({ name: 'Home' }) //next will redirect you in this case to Home route if isAdmin is required but the request didn't come from an admin
  else next();
})

export default router
