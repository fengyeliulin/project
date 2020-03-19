//引入对应模块
import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/Home/Home'
import Recommend from '../pages/Recommend/Recommend'
import Search from '../pages/Search/Search'
import Chat from '../pages/Chat/Chat'
import Me from '../pages/Me/Me'

import Hot from '../pages/Home/Children/Hot/Hot'
import Dress from '../pages/Home/Children/Dress'
import Ele from '../pages/Home/Children/Ele'
import Food from '../pages/Home/Children/Food'
import General from '../pages/Home/Children/General'
import Man from '../pages/Home/Children/Man'
import Mbaby from '../pages/Home/Children/Mbaby'
import Shirt from '../pages/Home/Children/Shirt'
import Box from '../pages/Home/Children/Box'

//声明使用
Vue.use(VueRouter)

//输出路由对象
export default new VueRouter({
  //配置一级路由
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: 'hot',
          component: Hot,
        },
        {
          path: 'dress',
          component: Dress,
        },
        {
          path: 'ele',
          component: Ele,
        },
        {
          path: 'food',
          component: Food,
        },
        {
          path: 'general',
          component: General,
        },
        {
          path: 'man',
          component: Man,
        },
        {
          path: 'mbaby',
          component: Mbaby,
        },
        {
          path: 'shirt',
          component: Shirt,
        },
        {
          path: 'box',
          component: Box,
        },
        {
          path: '/home',
          redirect: '/home/hot',
        }
      ]
    },
    {
      path: '/recommend',
      component: Recommend
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/chat',
      component: Chat
    },
    {
      path: '/me',
      component: Me
    }
  ]
});
