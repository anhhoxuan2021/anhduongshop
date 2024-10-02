import { createRouter, createWebHistory } from 'vue-router'
//import HomeView from '../views/HomeView.vue'
import Home from '@/views/pages/Home.vue';
import Fashion from '@/views/pages/Fashion.vue'
import Cart from '@/views/pages/Cart.vue'
import Payment from '@/views/pages/Payment.vue'

import ProductList from '@/views/admin/ProductList.vue'
import Product from '@/views/admin/Product.vue'
import Fashions from '@/views/pages/Fashions.vue'
import AddLaptop from '@/views/admin/AddLaptop.vue'
import AdminLaptops from '@/views/admin/AdminLaptops.vue'
import Laptops from '@/views/pages/Laptops.vue'
import Laptop from '@/views/pages/Laptop.vue'
import Orders from '@/views/pages/Orders.vue'
import Order from '@/views/pages/Order.vue'
import Register from '@/views/pages/Register.vue'
import Login from '@/views/pages/Login.vue'

import store from '@/store'
//import Pd1 from '@/views/admin/Pd1.vue'
//import Pd2 from '@/views/admin/Pd2.vue'

const routes = [
  {
      path: '/',
      name:'Home',
      component: Home,
      meta: {
          layout: 'default'
        }
  },
  {
      path: '/fashion/:id',
      name: 'Fashion',
      component: Fashion,
      meta: {
          layout: 'default'
        }
  },
  {
    path: '/checkout/cart',
    name: 'Cart',
    component: Cart,
    meta: {
        layout: 'default'
      }
  },
  {
    path: '/checkout/payment',
    name: 'Payment',
    component: Payment,
    meta: {
        layout: 'default'
      },
      beforeEnter(to, from, next) {
        let isLogin = store.state.login
        if (isLogin.id !=null) {
          next()
        } else {
          next('/fashions')
        }
      }
  },
  {
    path: '/admin/products',
    name: 'ProductList',
    component: ProductList,
    meta: {
        layout: 'admin'
      },
      beforeEnter(to, from, next) {
        let isLogin = store.state.login
        if (isLogin.id !=null) {
          next()
        } else {
          next('/')
        }
      }
  },
  {
    path: '/admin/product/:id',
    name: 'Product',
    component: Product,
    meta: {
        layout: 'admin'
      },
      beforeEnter(to, from, next) {
        let isLogin = store.state.login
        if (isLogin.id !=null) {
          next()
        } else {
          next('/')
        }
      }
  },

  {
    path: '/admin/product',
    name: 'Add Product',
    component: Product,
    meta: {
        layout: 'admin'
      },
      beforeEnter(to, from, next) {
        let isLogin = store.state.login
        if (isLogin.id !=null) {
          next()
        } else {
          next('/')
        }
      }
  },

  {
    path: '/admin/laptop',
    name: 'Add Laptop ',
    component: AddLaptop,
    meta: {
        layout: 'admin'
      }
  },

  {
    path: '/admin/laptop/:id',
    name: 'Laptop ',
    component: AddLaptop,
    meta: {
        layout: 'admin'
      }
  },

  {
    path: '/admin/laptops',
    name: 'Admin Laptop',
    component: AdminLaptops,
    meta: {
        layout: 'admin'
      }
  },

  {
    path: '/fashions',
    name: 'Fashions',
    component:Fashions,
    meta :{
      layout: 'default'
    }
  },

  {
    path: '/laptops',
    name: 'Laptops',
    component:Laptops,
    meta :{
      layout: 'default'
    }
  },

  {
    path: '/laptop/:id',
    name: 'Product Laptops',
    component: Laptop,
    meta: {
        layout: 'default'
      }
  },
  {
    path: '/orders',
    name: 'Review Order List',
    component: Orders,
    meta: {
        layout: 'default'
      }
  },
  {
    path: '/order/:id',
    name: 'Review Order Detail',
    component: Order,
    meta: {
        layout: 'default'
      }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
        layout: 'login'
      }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
        layout: 'login'
      },
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  
  routes: routes
})

export default router
