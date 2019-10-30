<template>
  <form class="comments-form">
    <div class="field">
      <label class="label">Name</label>
      <div class="control">
        <input class="input" 
               type="text" 
               placeholder="Name" 
               minlength="3"
               v-model="state.name" 
               required>
        <small class="help is-danger" v-if="state.errors.isNameEmpty">Name is empty</small>
        <small class="help is-danger" v-if="state.errors.isNameTooLong">Name is too long. Limit is 16.</small>
      </div>
    </div>
    <div class="field">
      <label class="label">Comment</label>
      <div class="control">
        <textarea class="textarea has-fixed-size" 
                  placeholder="Comment" 
                  minlength="6"
                  v-model="state.content" 
                  required/>
        <small class="help is-danger" v-if="state.errors.isCommentEmpty">Comment is empty</small>
        <small class="help is-danger" v-if="state.errors.hasTooLongWords">There are too long word(s)</small>
      </div>
    </div>
    <div class="field">
      <div class="control">
        <button class="button is-link" @click.prevent="$emit('add')">Add</button>
      </div>
    </div>
  </form>
</template>


<script>
export default {
  props: {
    state: Object,
  }
}
</script>

<style lang="scss" scoped>
.comments-form{
  margin: 50px 0;
  .input{
    width: 60%;
  }
}
</style>