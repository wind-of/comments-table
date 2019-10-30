<template>
  <div class="control">
    <button class="button is-link" @click.prevent="$emit('clicked')">
      <slot></slot>
    </button>
  </div>
</template>


<style lang="scss" scoped>
  button{
   margin: 10px 0;
  }
</style>