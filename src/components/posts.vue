<template>
  <div class="posts">
    <ul class="posts-list">
      <li class="posts-list-li" v-bind:key='index' v-for="(post, index) in posts">
        <div class="user-message">
          <img class="user-avatar" v-bind:src=post.userAvatar>
          <span class="user-name">{{ post.userName }}</span>
        </div>
        <div class="post-message">
          <span class="post-title" v-on:click='goPost(index)'>{{ post.title }}</span>
          <p class="post-content">{{ post.content }}</p>
        </div>
        <span class="comments-count" v-on:click='goPost(index)'>留言（{{ post.commentsCount }}）</span>
        <span class="view-times">浏览（{{ post.viewTimes }}）</span>
      </li>
    </ul>
  </div>
</template>

<script>
import '../assets/scss/_posts.scss'
export default {
  data () {
    return {
      posts: [{
        postId: '111111111111',
        userAvatar: require('../assets/image/head.jpg'),
        userName: '张三',
        title: '前端开发',
        content: '前端开发是创建Web页面或app等前端界面呈现给用户的过程。前端开发通过HTML，CSS及JavaScript以及衍生出来的各种技术、框架、解决方案，来实现互联网产品的用户界面交互 [1]  。它从网页制作演变而来，名称上有很明显的时代特征。在互联网的演化进程中，网页制作是Web1.0时代的产物，早期网站主要内容都是静态，以图片和文字为主，用户使用网站的行为也以浏览为主。随着互联网技术的发展和HTML5、CSS3的应用，现代网页更加美观，交互效果显著，功能更加强大。前端开发是创建Web页面或app等前端界面呈现给用户的过程。前端开发通过HTML，CSS及JavaScript以及衍生出来的各种技术、框架、解决方案，来实现互联网产品的用户界面交互 [1]  。它从网页制作演变而来，名称上有很明显的时代特征。在互联网的演化进程中，网页制作是Web1.0时代的产物，早期网站主要内容都是静态，以图片和文字为主，用户使用网站的行为也以浏览为主。随着互联网技术的发展和HTML5、CSS3的应用，现代网页更加美观，交互效果显著，功能更加强大。',
        viewTimes: 10,
        commentsCount: 3
      }, {
        postId: '222222222222',
        userAvatar: require('../assets/image/head.jpg'),
        userName: '李四',
        title: '前端开发',
        content: '前端开发是创建Web页面或app等前端界面呈现给用户的过程。前端开发通过HTML，CSS及Java前端开发是创建Web页面或app等前端界面呈现给用户的过程。前端开发通过HTML，CSS及Java前端开发是创建Web页面或app等前端界面呈现给用户的过程。前端开发通过HTML，CSS及Java',
        viewTimes: 10,
        commentsCount: 3
      }, {
        postId: '333333333333',
        userAvatar: require('../assets/image/head.jpg'),
        userName: '王五',
        title: '前端开发',
        content: '前端开发是创建Web页面或app等前端界面呈现给用户的过程。前端开发通过HTML，CSS及JavaScript以及衍生出来的各种技术、框架、解决方案，来实现互联网产品的用户界面交互 [1]  。它从网页制作演变而来，名称上有很明显的时代特征。在互联网的演化进程中，网页制作是Web1.0时代的产物，早期网站主要内容都是静态，以图片和文字为主，用户使用网站的行为也以浏览为主。随着互联网技术的发展和HTML5、CSS3的应用，现代网页更加美观，交互效果显著，功能更加强大。前端开发是创建Web页面或app等前端界面呈现给用户的过程。前端开发通过HTML，CSS及JavaScript以及衍生出来的各种技术、框架、解决方案，来实现互联网产品的用户界面交互 [1]  。它从网页制作演变而来，名称上有很明显的时代特征。在互联网的演化进程中，网页制作是Web1.0时代的产物，早期网站主要内容都是静态，以图片和文字为主，用户使用网站的行为也以浏览为主。随着互联网技术的发展和HTML5、CSS3的应用，现代网页更加美观，交互效果显著，功能更加强大。',
        viewTimes: 10,
        commentsCount: 3
      }]
    }
  },
  methods: {
    goPost (index) {
      this.$router.push({
        path: '/post/' + this.posts[index].postId
      })
    }
  }
}
</script>
