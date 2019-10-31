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
            <span>{{ comment.content }}</span>
          </p>
          <div v-else class="field">
            <div class="control">
              <textarea class="textarea has-fixed-size" placeholder="Comment" v-model="comment.content"/>
            </div>
            <Error v-for="error in errors" :key="error">{{ error }}</Error>
            <div class="field">
              <Button @clicked="$emit('edit', {comment})">Edit</Button>
            </div>
          </div>
        </div>
        <nav class="level is-mobile" v-show="!isEditing">
          <div class="level-left">
            <Icon className="fas fa-reply"/>
            <Icon className="fas fa-heart"/>
          </div>
        </nav>
      </div>
      <nav v-show="!isEditing" class="level is-mobile">
        <div class="level-left">
          <Icon className="far fa-edit"      @clicked="$emit('edit', {comment})"/>
          <Icon className="far fa-trash-alt" @clicked="$emit('delete', {id: comment.id})"/>
        </div>
      </nav>
    </article>
  </div>
</template>

<script>
export default {
  props: {
    comment: Object,
    errors: Array,
    isEditing: Boolean
  }
}
</script>

<style lang="scss" scoped>
  .comment{
    margin: 25px 0;
  }
</style>
