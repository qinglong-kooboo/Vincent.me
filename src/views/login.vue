<template>
  <div class="login">
    <b-login></b-login>
  </div>
</template>

<script>
import '../assets/scss/_login.scss'
import BLogin from '../components/login'
export default {
  components: {
    'b-login': BLogin
  }
}
</script>
