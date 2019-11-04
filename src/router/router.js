import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'
import Main from '../views/Main'

Vue.use(Router);


const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/',
      name: 'Main',
      component: Main,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/auth',
      name: 'Auth',
      component: () => import('../views/Auth')
    }
  ]
})


router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const isAuthRequired = to.matched.some(record => record.meta.requiresAuth);

  if(!currentUser && isAuthRequired) next('auth')
  else if(currentUser && !isAuthRequired) next('main')
  else next()
})


export default router;