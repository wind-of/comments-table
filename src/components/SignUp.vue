<template>
  <div id="sign-up">
    <div class="title">
      <h2>Sign Up</h2>
    </div>
    <div class="field">
      <p class="control has-icons-left has-icons-right">
        <input class="input" type="email" placeholder="Email" v-model="email">
        <span class="icon is-small is-left">
          <i class="fas fa-envelope"></i>
        </span>
      </p>
    </div>
    <div class="field">
      <p class="control has-icons-left">
        <input class="input" type="password" placeholder="Password" v-model="password">
        <span class="icon is-small is-left">
          <i class="fas fa-lock"></i>
        </span>
      </p>
    </div>
    <div class="field">
      <p class="control has-icons-left">
        <input class="input" type="password" placeholder="Repeat Password" v-model="repeatedPassword">
        <span class="icon is-small is-left">
          <i class="fas fa-lock"></i>
        </span>
      </p>
    </div>
    <div class="field">
      <BaseButton className="button is-success" 
                  @click.native.prevent="$emit('sign-up', {email, password, repeatedPassword})">
      Sign up</BaseButton>
    </div>
    <br>
    <div class="postscriptum">
      <p>If you already have an account, <a href="/" @click.prevent="$emit('toggleForm')">sign in.</a></p>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      repeatedPassword: '',
    }
  }
}
</script>


<style lang="scss" scoped>
  .input{
    padding: 15px 0;
  }
</style>