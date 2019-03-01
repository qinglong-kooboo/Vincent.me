<template>
  <div class="post-page">
    <b-nav-bar></b-nav-bar>
    <b-post></b-post>
    <b-comment></b-comment>
  </div>
</template>

<script>
import '../assets/scss/_post.scss'
import NavBar from '../components/navBar'
import Post from '../components/post'
import Comments from '../components/comment'
export default {
  components: {
    'b-nav-bar': NavBar,
    'b-post': Post,
    'b-comment': Comments
  }
}
</script>
