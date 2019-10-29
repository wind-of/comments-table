<template>
  <div id="comments">
    <div class="comments-list">
      <CTemplate v-for="comment of comments" 
                 :comment="comment" 
                 :key="comment.id"
                 :errors="comment.errors"
                 :isEditing="comment.isEditing"
                 @delete="deleteComment($event.id)"
                 @edit="editComment($event.comment)"/>
    </div>
    <CForm :currentState="currentState" @add="addComment()"/>
  </div>
</template>

<script>
import comments from '../comments'
import utils from'../utils'

export default {
  data() {
    return {
      comments,
      currentState: {
        name: '',
        content: '',
        isEditing: false,
        id: this.createID(),
        errors: {}
      }
    }
  },
  methods: {
    clearState() {
      this.currentState = {
        name: '',
        content: '',
        isEditing: false,
        id: this.createID(),
        errors: {}
      }
    },

    createID() {return Math.floor(Math.random() * 1000000000)},

    addComment() {
      const newComment = {};
      Object.assign(newComment, this.currentState);

      this.comments.unshift(newComment);

      this.clearState();
    },

    deleteComment(id) {this.comments = this.comments.filter(comment => comment.id !== id)},

    editComment(comment) {
      if(comment.isEditing) {
        const check = utils.checkCommentForIssues(comment);

        if (check === 'Success') {
          return comment.isEditing = !comment.isEditing
        } else {
          comment.errors = {
            isCommentEmpty: check.includes('empty-comment'),
            hasTooLongWords: check.includes('too-long-word')
          }
        }
      } else {
        return comment.isEditing = !comment.isEditing
      }
    }
  },

  components: {
    CTemplate: () => import('../components/CTemplate.vue'),
    CForm:     () => import('../components/CForm.vue')
  }
}
</script>

<style lang="scss">
#comments{
  width: 40%;
  margin: 100px auto 25px;
}
</style>
