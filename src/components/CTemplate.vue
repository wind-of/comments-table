<template>
  <div class="comment">
    <article class="media">
      <figure class="media-left">
        <p class="image is-64x64">
          <img src="https://bulma.io/images/placeholders/64x64.png">
        </p>
      </figure>
      <div class="media-content">
        <div class="content">
          <p v-if="!isEditing">
            <strong>{{ comment.name }}</strong><br>
            {{ comment.content }}
          </p>
          <div v-else class="control">
            <textarea class="textarea has-fixed-size" 
                      placeholder="Comment" 
                      minlength="6"
                      v-model="comment.content" 
                      required/>
            <div class="field">
              <div class="control">
                <button @click.prevent="editComment()" class="button is-link">Edit</button>
              </div>
            </div>
          </div>
        </div>
        <nav class="level is-mobile" v-if="!isEditing">
          <div class="level-left">
            <a class="level-item">
              <span title="Reply" class="icon is-small"><i class="fas fa-reply"></i></span>
            </a>
            <a class="level-item">
              <span title="Like" class="icon is-small"><i class="fas fa-heart"></i></span>
            </a>
          </div>
        </nav>
      </div>
      <nav class="level is-mobile" v-if="!isEditing">
        <div class="level-left">
          <a class="level-item" @click="editComment(comment.id)">
            <span title="Edit" class="icon is-small"><i class="far fa-edit"></i></span>
          </a>
          <a class="level-item" @click="$emit('delete', {id: comment.id})">
            <span title="Delete" class="icon is-small"><i class="far fa-trash-alt"></i></span>
          </a>
        </div>
      </nav>
    </article>
  </div>
</template>

<script>
export default {
  data : () => ({
    isEditing: false
  }),
  methods: {
    editComment() {
      this.isEditing = !this.isEditing;
    }
  },
  props: {
    comment: Object
  }
}
</script>

<style lang="scss" scoped>
  .comment{
    margin: 25px 0;
  }
  .button{
    margin: 10px 0;
  }
</style>
