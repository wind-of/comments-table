<template>
  <div id="sign-up">
    <div class="title">
      <h2>Sign Up</h2>
    </div>
    <div class="field">
      <p class="control has-icons-left has-icons-right">
        <input class="input" type="email" placeholder="test@mail.ru" v-model="email">
        <span class="icon is-small is-left">
          <i class="fas fa-envelope"></i>
        </span>
      </p>
      <BaseError v-for="error in errors.emailErrors" :key="error">{{ error }}</BaseError>
    </div>
    <div class="field">
      <p class="control has-icons-left">
        <input class="input" type="password" placeholder="Password" v-model="password">
        <span class="icon is-small is-left">
          <i class="fas fa-lock"></i>
        </span>
      </p>
      <BaseError v-for="error in errors.passwordErrors" :key="error">{{ error }}</BaseError>
    </div>
    <div class="field">
      <p class="control has-icons-left">
        <input class="input" type="password" placeholder="Repeat password" v-model="repeatedPassword">
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
      <p>If you already have an account, <a href="/" @click.prevent="$emit('toggle')">sign in.</a></p>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    errors: Object
  },
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
  .postscriptum{
    text-align: center;
  }
</style>