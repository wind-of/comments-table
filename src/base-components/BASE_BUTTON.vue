<template>
  <div class="control">
    <button :class="className">
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    className: String
  }
}
</script>


<style lang="scss" scoped>
  button{
   margin: 10px 0;
  }
</style>