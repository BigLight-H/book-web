import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Bookshelf from '@/components/Bookshelf'
import BookList from '@/components/BookList'
import Book from '@/components/Book'
import List from '@/components/List'
import Room from '@/components/StackRoom'
import Type from '@/components/Type'
import Rank from '@/components/Rank'
import Perfection from '@/components/Perfection'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: Home
    },
    {
      path: '/login',
      name: '登录页',
      component: Login
    },
    {
      path: '/register',
      name: '注册页',
      component: Register
    },
    {
      path: '/bookshelf',
      name: '书架页',
      component: Bookshelf
    },
    {
      path: '/book_list',
      name: '目录页',
      component: BookList
    },
    {
      path: '/book',
      name: '文章页',
      component: Book
    },
    {
      path: '/list',
      name: '搜索结果页',
      component: List
    },
    {
      path: '/room',
      name: '小说库',
      component: Room
    },
    {
      path: '/type',
      name: '小说分类',
      component: Type
    },
    {
      path: '/rank',
      name: '小说排行',
      component: Rank
    },
    {
      path: '/perfection',
      name: '小说完本',
      component: Perfection
    }
  ],
  mode:'history'
})
