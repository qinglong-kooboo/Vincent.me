<template>
  <div class="register">
    <b-register></b-register>
  </div>
</template>

<script>
import '../assets/scss/_register.scss'
import Register from '../components/register'
export default {
  components: {
    'b-register': Register
  }
}
</script>
