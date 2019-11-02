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
            <BaseError v-for="error in errors" :key="error">{{ error }}</BaseError>
            <div class="field">
              <BaseButton className="button is-link"
                          @click.native.prevent="$emit('edit', {comment})">
              Edit</BaseButton>
            </div>
          </div>
        </div>
        <nav class="level is-mobile" v-show="!isEditing">
          <div class="level-left">
            <BaseIcon className="fas fa-reply"/>
            <BaseIcon className="fas fa-heart"/>
          </div>
        </nav>
      </div>
      <nav v-show="!isEditing" class="level is-mobile">
        <div class="level-left">
          <BaseIcon className="far fa-edit"      @click.native="$emit('edit', {comment})"/>
          <BaseIcon className="far fa-trash-alt" @click.native="$emit('delete', {id: comment.id})"/>
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
