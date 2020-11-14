import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './../views/Home'
import Test from './../views/Test'
import A from './../views/A'
import B from './../views/B'
import Test3 from './../views/Test3'
import IVuex from './../views/Vuex'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },{
    path: '/home',
    name:'myHome',
    component: Home,
    children:[
    {
      path:'/a',
      component:A
    },{
      path:'/b',
      component:B
    }
  ]
  },{
    path: '/test',
    component: Test
  }
  ,{
    path: '/test3/:id',
    name:'test3',
    component: Test3
  },{
    path: '/vuex',
    component: IVuex
  },{
    path:'/:id',
    redirect:'/test3/:id'
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
