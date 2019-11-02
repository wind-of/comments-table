<template>
  <div id="comments">
    <div class="comments-list">
      <CTemplate v-for="comment of comments" 
                 :comment="comment" 
                 :key="comment.id"
                 :errors="comment.errors.cmErrors"
                 :isEditing="comment.isEditing"
                 @delete="deleteComment($event.id)"
                 @edit="editComment($event.comment)"/>
    </div>
    <CForm :state="currentState" 
           :cmErrors="currentState.errors.cmErrors"
           :nameErrors="currentState.errors.nameErrors"
           @add="addComment()"/>
  </div>
</template>

<script>
import comments from '../comments'
import checkCMForIssues from'../utils/comment-checkout'

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
    refreshState() {
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
      const checkout = checkCMForIssues(this.currentState);

      if(checkout === 'Nice') {
        this.currentState.errors = {};

        this.comments.unshift(Object.assign({}, this.currentState));
      
        this.refreshState();
      } else { 
        this.currentState.errors = {
          cmErrors: checkout.cmErrors,
          nameErrors: checkout.nameErrors
        }
      }
    },

    editComment(comment) {
      if(comment.isEditing === false) return comment.isEditing = !comment.isEditing
      
      const checkout = checkCMForIssues(comment);

      if (checkout === 'Nice') { 
        return comment.isEditing = !comment.isEditing 
      } else {
        comment.errors = {
          cmErrors: checkout.cmErrors
        }
      }
    },

    deleteComment(id) {this.comments = this.comments.filter(comment => comment.id !== id)}
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
