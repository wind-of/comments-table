<template>
  <form class="comments-form">
    <div class="field">
      <label class="label">Name</label>
      <div class="control">
        <input class="input" placeholder="Name" v-model="state.name">
      </div>
      <Error v-for="error in nameErrors" :key="error">{{ error }}</Error>
    </div>
    <div class="field">
      <label class="label">Comment</label>
      <div class="control">
        <textarea class="textarea has-fixed-size" placeholder="Comment" v-model="state.content"/>
      </div>
      <Error v-for="error in cmErrors" :key="error">{{ error }}</Error>
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
    cmErrors: Array,
    nameErrors: Array
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