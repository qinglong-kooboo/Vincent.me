<template>
  <div name='login' class="login-form">
    <form>
      <div class="login-username">
        <input v-model="userName" type="text" placeholder="用户名">
        <label class="error-message" v-if="this.errorUsername">*用户名错误</label>
      </div>
      <div class="login-password">
        <input v-model="userPassword" type="password" placeholder="密码">
        <label class="error-message" v-if="this.errorUserPassword">*密码错误</label>
      </div>
      <input class="login-button" v-on:click="goHomePage()" type="submit" value="登录">
      <span class="to-register" v-on:click="goRegister()">没有账号？去注册</span>
    </form>
  </div>
</template>

<script>
// import store from '../store'
import '../assets/scss/_login.scss'
export default {
  name: 'b-login',
  data () {
    return {
      userName: '',
      userPassword: '',
      user: {
        userName: '张三',
        password: '333333',
        avatar: require('../assets/image/head.jpg')
      }
    }
  },
  // mounted () {
  //   axios
  //     .get('')
  //     .then(response => (this.users = response))
  // },
  computed: {
    errorUsername () {
      return this.userName !== this.user.userName
    },
    errorUserPassword () {
      return this.userPassword !== this.user.password
    },
    isUserExit () {
      return !this.errorUsername && !this.errorUserPassword
    }
  },
  methods: {
    // validUser () {
    //   axios
    //     .get('').then((res) => {
    //       this.user = res
    //     }).catch((err) => {
    //       console.log(err)
    //     })
    // },
    goHomePage () {
      if (this.isUserExit) {
        this.errorMsg = false
        this.$router.push({
          path: '/'
        })
      } else {
        this.errorMsg = true
      }
    },
    goRegister () {
      this.$router.push({
        path: '/register'
      })
    }
  }
}
</script>
