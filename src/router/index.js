import Vue from 'vue'
import Router from 'vue-router'

import RegisterComponent from '@/components/Register'
import LoginComponent from '@/components/Login'
import SecureComponent from '@/components/Secure'
import NewContactComponent from '@/components/NewContact'
import ViewContactComponent from '@/components/ViewContact'
import CartComponent from '@/components/Cart'
// import ShoppingCartComponent from '@/components/ShoppingCart'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: {
        name: 'login'
      }
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterComponent
    },
    {
      path: '/login',
      name: 'login',
      component: LoginComponent
    },
    {
      path: '/secure',
      name: 'secure',
      component: SecureComponent
    },
    {
      path: '/add',
      name: 'new-contact',
      component: NewContactComponent
    },
    {
      path: '/contact/:person',
      name: 'view-contact',
      component: ViewContactComponent
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartComponent
    },
    // {
    //   path: '/shoppiing-cart',
    //   name: 'shoppiing-cart',
    //   component: ShoppingCartComponent
    // },
  ]
})
