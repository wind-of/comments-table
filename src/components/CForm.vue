<template>
  <form class="comments-form">
    <div class="field">
      <label class="label">Name</label>
      <div class="control">
        <input class="input" 
               type="text" 
               placeholder="Name" 
               minlength="3"
               v-model="currentState.name" 
               required>
      </div>
    </div>
    <div class="field">
      <label class="label">Comment</label>
      <div class="control">
        <textarea class="textarea has-fixed-size" 
                  placeholder="Comment" 
                  minlength="6"
                  v-model="currentState.content" 
                  required/>
      </div>
    </div>
    <div class="field">
      <div class="control">
        <button @click.prevent="$emit('add')" class="button is-link">Add</button>
      </div>
    </div>
  </form>
</template>


<script>
export default {
  props: {
    currentState: Object
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