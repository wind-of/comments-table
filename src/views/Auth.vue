<template>
  <div id="authentication">
    <keep-alive>
      <SignUp v-if="isUserNew"
              :loading="isLoading"
              :errors="signUpErrors"
              @sign-up="signUp($event)"
              @toggle="toggleForm()"/>

      <SignIn v-else
              :loading="isLoading"
              :errors="signInErrors"
              @sign-in="signIn($event)"
              @toggle="toggleForm()"/>
    </keep-alive>
  </div>
</template>


<script>
import AuthFormCheckout from '../utils/auth-checkout'
import firebase from 'firebase'

export default {
  data() {
    return {
      isLoading: false,
      isUserNew: false,
      signUpErrors: {},
      signInErrors: {}
    }
  },

  methods: {
    signUp(user) {
      this.isLoading = true;
      const checkout = AuthFormCheckout.signingUp(user);
      this.signUpErrors = checkout === 'Nice' ? {} : checkout;

      if (checkout === 'Nice') {
        return firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
          .then(() => {
            this.$router.push('/');
            this.isLoading = false;
          })
          .catch(err => alert(err))
      }
      this.isLoading = false;
    },

    signIn(user) {
      this.isLoading = true;
      const checkout = AuthFormCheckout.signingIn(user);
      this.signInErrors = checkout === 'Nice' ? {} : checkout;

      if (checkout === 'Nice') {
        return firebase.auth().signInWithEmailAndPassword(user.email, user.password)
          .then(() => {
            this.$router.push('/');
            this.isLoading = false;
          })
          .catch(err => {
            alert(err);
            this.isLoading = false;
          })
      }
      this.isLoading = false;
    },

    toggleForm() {
      this.isUserNew = !this.isUserNew
    },
  },

  components: {
    SignUp: () => import('@/components/SignUp'),
    SignIn: () => import('@/components/SignIn')
  }
}
</script>



<style lang="scss" scoped>
  #authentication{
    width: 20%;
    margin: 150px auto;
  }  
</style>