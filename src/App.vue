<template>
  <div id="comments">
    <CForm @add="addComment()" :currentState="currentState"/>
    <div class="comments-list">
      <CTemplate v-for="comment of comments" 
                 :comment="comment" 
                 :key="comment.id"
                 @delete="deleteComment($event.id)"/>
    </div>
  </div>
</template>

<script>
import comments from './comments'

export default {
  data() {
    return {
      comments,
      currentState: {
        name: '',
        content: '',
        id: this.createID()
      }
    }
  },
  methods: {
    createID() {
      return Math.floor(Math.random() * 1000000000)
    },
    addComment() {
      if (this.currentState.name === '' || this.currentState.content === '') return;

      const newComment = {};
      Object.assign(newComment, this.currentState);

      this.comments.unshift(newComment);
      this.currentState = {
        name: '',
        content: '',
        id: this.createID()
      }
    },
    deleteComment(id) {
      this.comments = this.comments.filter(comment => comment.id !== id);
    }
  },
  components: {
    CTemplate: () => import('./components/CTemplate.vue'),
    CForm:     () => import('./components/CForm.vue')
  }
}
</script>

<style lang="scss">
#comments{
  width: 40%;
  margin: 0 auto;
}
</style>
