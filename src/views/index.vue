<template>
  <div class="index-page">
    <b-nav-bar></b-nav-bar>
    <div class="blog">
      <b-posts></b-posts>
    </div>
    <div class="classification">
      <b-classification></b-classification>
    </div>
    <div class="blank"></div>
  </div>
</template>

<script>
import '../assets/scss/_index.scss'
import NavBar from '../components/navBar'
import Posts from '../components/posts'
import Classification from '../components/classification'
export default {
  name: 'posts',
  data () {
    return {
      posts: 'posts'
    }
  },
  components: {
    'b-nav-bar': NavBar,
    'b-posts': Posts,
    'b-classification': Classification
  }
}
</script>
