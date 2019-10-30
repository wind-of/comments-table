<template>
  <a class="level-item" @click="$emit('clicked')">
    <span title="Icon" class="icon is-small">
      <i :class="className"></i>
    </span>
  </a>
</template>


<script>
export default {
  props: {
    className: String
  }
}
</script>