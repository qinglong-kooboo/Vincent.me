import Vue from 'vue'
import VueRouter from 'vue-router'

import IndexPage from '../views/index.vue'
import LoginPage from '../views/login.vue'
import RegisterPage from '../views/register.vue'
import PostPage from '../views/post.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [{
    path: '/',
    component: IndexPage
  }, {
    path: '/login',
    component: LoginPage
  }, {
    path: '/register',
    component: RegisterPage
  }, {
    path: '/post/:postId',
    component: PostPage
  }]
})
