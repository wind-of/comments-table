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
import utils from'../utils/utils'

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
      const checkout = utils.checkCMForIssues(this.currentState);
      if(checkout === 'Nice') {
        this.currentState.errors = {
          cmErrors: [],
          nameErrors: []
        };

        const newComment = {};

        Object.assign(newComment, this.currentState);

        this.comments.unshift(newComment);
        this.refreshState();
      } else { 
        this.currentState.errors = {
          cmErrors: checkout.cmErrors,
          nameErrors: checkout.nameErrors
        }
      }
    },

    editComment(comment) {
      if(!comment.isEditing) return comment.isEditing = !comment.isEditing
      
      const checkout = utils.checkCMForIssues(comment);

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
