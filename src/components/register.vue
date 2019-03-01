<template>
  <div name='register'>
    <form class="register-form">
      <div class="register-avatar">
        <input type="file">
      </div>
      <div class="register-username">
        <input type="text" @blur="showNameEM()" v-model="userName" placeholder="用户名">
        <label class="error-message" v-if="errorMsg.nullName">*用户名不能为空</label>
      </div>
      <div class="register-password">
        <input type="password" @blur="showPwEM()" v-model="userPassword" placeholder="密码">
        <label class="error-message display-error-message" v-if="errorMsg.nullPassword">*密码不能为空</label>
        <label class="error-message display-error-message" v-if="errorMsg.errorPwFormat">*密码不能少于六位字符</label>
      </div>
      <div class="register-repassword">
        <input type="password" @blur="showRePwEM()" v-model="userRePassword" placeholder="重复密码">
        <label class="error-message display-error-message" v-if="errorMsg.errorRePw">*两次输入的密码不一致</label>
      </div>
      <input class="register-button" v-on:click="goHomePage()" type="submit" value="注册">
    </form>
  </div>
</template>

<script>
import '../assets/scss/_register.scss'
export default {
  name: 'b-register',
  props: {
    isregister: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      userName: '',
      userPassword: '',
      userRePassword: '',
      errorMsg: {
        nullName: false,
        nullPassword: false,
        errorPwFormat: false,
        errorRePw: false
      }
    }
  },
  computed: {
    nullName () {
      return !this.userName
    },
    nullPassword () {
      return !this.userPassword
    },
    errorPwFormat () {
      return this.userPassword && this.userPassword.length < 6
    },
    errorRePw () {
      return this.userPassword !== this.userRePassword
    },
    isInfoCorrect () {
      return !this.nullName && !this.nullPassword && !this.errorPwFormat && !this.errorPwFormat && !this.errorRePw
    }
  },
  methods: {
    showNameEM () {
      if (this.nullName) {
        this.errorMsg.nullName = true
      }
    },
    showPwEM () {
      if (this.nullPassword) {
        this.errorMsg.nullPassword = true
      } else if (this.errorPwFormat) {
        this.errorMsg.errorPwFormat = true
      }
    },
    showRePwEM () {
      if (this.errorRePw) {
        this.errorMsg.errorRePw = true
      }
    },
    goHomePage () {
      if (this.isInfoCorrect) {
        this.errorMsg = false
        this.$router.push({
          path: '/'
        })
      }
    }
  }
}
</script>
