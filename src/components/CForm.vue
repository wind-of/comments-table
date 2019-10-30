<template>
  <form class="comments-form">
    <div class="field">
      <label class="label">Name</label>
      <div class="control">
        <input class="input"
               type="text"
               placeholder="Name" 
               v-model="state.name">
        <Error v-if="state.errors.isNameEmpty">Name is empty</Error>
        <Error v-if="state.errors.isNameTooLong">Name is too long. Limit is 16.</Error>
      </div>
    </div>
    <div class="field">
      <label class="label">Comment</label>
      <div class="control">
        <textarea class="textarea has-fixed-size"
                  placeholder="Comment"
                  minlength="6"
                  v-model="state.content"/>
      </div>
      <Error v-if="state.errors.isCommentEmpty">Comment is empty</Error>
      <Error v-if="state.errors.hasTooLongWords">There are too long word(s)</Error>
      <div class="field">
        <Button @clicked="$emit('add')">Add</Button>
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