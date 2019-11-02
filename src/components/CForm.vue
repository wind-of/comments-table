<template>
  <form class="comments-form">
    <div class="field">
      <label class="label">Name</label>
      <div class="control">
        <input class="input" placeholder="Name" v-model="state.name">
      </div>
      <BaseError v-for="error in nameErrors" :key="error">{{ error }}</BaseError>
    </div>
    <div class="field">
      <label class="label">Comment</label>
      <div class="control">
        <textarea class="textarea has-fixed-size" placeholder="Comment" v-model="state.content"/>
      </div>
      <BaseError v-for="error in cmErrors" :key="error">{{ error }}</BaseError>
      <div class="field">
        <BaseButton className="button is-link"
                    @click.native.prevent="$emit('add')">
        Add</BaseButton>
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