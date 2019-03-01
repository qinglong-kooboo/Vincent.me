import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'lodash'

Vue.use(Vuex)

const state = {
  user: {
    userName: '张三',
    passWord: '333333',
    avatar: require('../assets/image/head.jpg')
  }
}

const mutations = {
}

const store = new Vuex.store({
  state: state,
  mutations: mutations
})
