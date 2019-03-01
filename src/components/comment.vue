<template>
  <div class="comment">
    <h2>留言</h2>
    <ul class="comments-list">
      <li class="comments-list-li" v-bind:key="index" v-for="(comment, index) in comments">
        <img class="user-avatar" v-bind:src=comment.userAvatar>
        <span class="user-name">{{ comment.userName }}</span>
        <p class="comment-content">{{ comment.content }}</p>
      </li>
    </ul>
    <form class="comment-form">
      <textarea name="comment" rows="5" placeholder="留下些什么吧..."></textarea>
      <input type="submit" value="发表">
    </form>
  </div>
</template>

<script>
import '../assets/scss/_comment.scss'
export default {
  data () {
    return {
      comments: [{
        userName: '张三',
        userAvatar: require('../assets/image/head.jpg'),
        commentId: 'xxxxxxx',
        content: '66666'
      }, {
        userName: '李四',
        userAvatar: require('../assets/image/head.jpg'),
        commentId: '3333333',
        content: 'hahahah'
      }, {
        userName: '张三',
        userAvatar: require('../assets/image/head.jpg'),
        commentId: 'rtretertre',
        content: '真棒'
      }, {
        userName: '王五',
        userAvatar: require('../assets/image/head.jpg'),
        commentId: 'tretertert',
        content: '很厉害'
      }]
    }
  }
}
</script>
