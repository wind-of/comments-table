<template>
  <div id="authentication">
    <keep-alive>
      <component :is="component"
               @sign-up="signUp($event)"
               @sign-in="signIn($event)"
               @toggleForm="toggleForm()"></component>
    </keep-alive>
  </div>
</template>


<script>
export default {
  data() {
    return {
      isUserNew: false
    }
  },

  methods: {
    signUp(user) {
      console.log(user)
    },

    signIn(user) {
      console.log(user)
    },

    toggleForm() {
      this.isUserNew = !this.isUserNew
    }
  },

  computed: {
    component() {
      return this.isUserNew ? 'SignUp' : 'SignIn';
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