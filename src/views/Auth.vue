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
    <button @click="test('Up')">Click</button>
  </div>
</template>


<script>
import AuthFormCheckout from '../utils/auth-checkout'
import firebase from 'firebase'

export default {
  data() {
    return {
      isUserNew: false,
      signUpErrors: {},
      signInErrors: {}
    }
  },

  methods: {
    signUp(user, method) {
      const checkout = AuthFormCheckout.signingUp(user);
      this.signUpErrors = checkout === 'Nice' ? {} : checkout;

      if (checkout === 'Nice') {
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
          .then(() => this.$router.push('/'))
          .catch(err => alert(err))
      }
    },

    signIn(user) {
      const checkout = AuthFormCheckout.signingIn(user);
      this.signInErrors = checkout === 'Nice' ? {} : checkout;

      if (checkout === 'Nice') {
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
          .then(() => this.$router.push('/'))
          .catch(err => alert(err))
      }
    },

    toggleForm() {
      this.isUserNew = !this.isUserNew
    },
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