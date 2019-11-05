<template>
  <div id="authentication">
    <keep-alive>
      <component :is="isUserNew ? 'SignUp' : 'SignIn'"
              :loading="isLoading"
              :errors="errors"
              @sign-up="sign($event, 'create')"
              @sign-in="sign($event, 'sign')"
              @toggle="toggleForm()">
      </component>
    </keep-alive>
  </div>
</template>


<script>
import firebase from 'firebase/app'
import 'firebase/auth'
import AuthFormCheckout from '@/utils/auth-checkout'

export default {
  data() {
    return {
      isLoading: false,
      isUserNew: false,
      errors: {},
      signInErrors: {}
    }
  },

  methods: {
    createUser({email, password, repeatedPassword}) {
      return firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(() => this.$router.push('/'))
          .catch(err => console.log(err))
    },
    signIn({email, password}) {
      return firebase.auth().signInWithEmailAndPassword(email, password)
          .then(() => this.$router.push('/'))
          .catch(err => console.log(err))
    },

    sign(user, method) {
      this.isLoading = true;

      const result = method === 'create' 
        ? AuthFormCheckout.signingUp(user) 
        : AuthFormCheckout.signingIn(user);

      if(result !== 'Nice') {
        this.isLoading = false;
        return this.errors = result; 
      } else this.errors = {};

      method === 'create' ? this.createUser(user) : this.signIn(user)

      this.isLoading = false;
    },

    toggleForm() { 
      this.isUserNew = !this.isUserNew;
      this.errors = {};
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
    margin: 100px auto;
  }
</style>