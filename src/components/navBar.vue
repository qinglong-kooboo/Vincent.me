<template>
  <div name="nav-bar" class="nav-bar">
    <span class="signin-msg"
          v-on:click="goLog()">
          {{ loginMsg }}
    </span>
    <span class="home-btn" @click="goHome()">Posts</span>
  </div>
</template>

<script>
import '../assets/scss/_navBar.scss'
export default {
  name: 'nav-bar',
  data () {
    return {
      isLogin: true
    }
  },
  computed: {
    loginMsg () {
      return this.isLogin ? '登出' : '登录'
    }
  },
  methods: {
    goHome () {
      this.$router.push({
        path: '/'
      })
    },
    goLog () {
      if (!this.isLogin) {
        this.$router.push({
          path: '/login'
        })
      } else {
        this.isLogin = false
      }
    }
  }
}
</script>
