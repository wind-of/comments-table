<template>
  <div id="authentication">
    <component v-bind:is="component"></component>
  </div>
</template>


<script>
export default {
  data: () => {
    return {
      component: 'SignUp'
    }
  },
  components: {
    SignUp: () => import('../components/SignUp'),
    SignIn: () => import('../components/SignIn')
  }
}
</script>

<style lang="scss" scoped>
  #authentication{
    width: 20%;
    margin: 150px auto;
    text-align: center;
  }  
</style>