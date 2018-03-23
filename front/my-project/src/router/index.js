import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'
//import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import signup from '@/components/signup'
import Home from '@/components/Home'
import accueil from '@/components/accueil'

Vue.use(Router)

export default new Router({
  routes: [
     {
      path:'/',
      name:'Home',
      component: Home
     },
   
    {
      path: '/login',
      name: 'Login',
      component: Login
    },

    {
      path: '/signup',
      name: 'signup',
      component: signup
    },

     {
      path: '/accueil',
      name: 'accueil',
      component: accueil
    },

  ]
})
