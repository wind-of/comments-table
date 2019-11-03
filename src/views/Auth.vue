<template>
  <div id="authentication">
    <keep-alive>
      <SignUp v-if="isUserNew"
              :errors="signUpErrors"
              @sign-up="signUp($event)"
              @toggle="toggleForm()"/>

      <SignIn v-else
              :errors="signInErrors"
              @sign-in="signIn($event)"
              @toggle="toggleForm()"/>
    </keep-alive>
  </div>
</template>


<script>
import AuthFormCheckout from '../utils/auth-checkout'

export default {
  data() {
    return {
      isUserNew: false,
      signUpErrors: {},
      signInErrors: {}
    }
  },

  methods: {
    signUp(user) {
      const checkout = AuthFormCheckout.signingUp(user);
      if(checkout === 'Nice') {
        console.log(checkout)
      } else {
        this.signUpErrors = checkout
      }
    },

    signIn(user) {
      const checkout = AuthFormCheckout.signingIn(user);

      if(checkout === 'Nice') {
        console.log(checkout)
      } else {
        this.signInErrors = checkout
      }
    },

    toggleForm() {
      this.isUserNew = !this.isUserNew
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
  }  
</style>