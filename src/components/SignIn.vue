<template>
  <div id="sign-up">
    <div class="title">
      <h2>Sign In</h2>
    </div>
    <div class="field">
      <p class="control has-icons-left has-icons-right">
        <input class="input" type="email" placeholder="Email">
        <span class="icon is-small is-left">
          <i class="fas fa-envelope"></i>
        </span>
      </p>
    </div>
    <div class="field">
      <p class="control has-icons-left">
        <input class="input" type="password" placeholder="Password">
        <span class="icon is-small is-left">
          <i class="fas fa-lock"></i>
        </span>
      </p>
    </div>
    <div class="field">
      <BaseButton className="button is-success" @click.native.prevent="$emit('sign-in')">Sign in</BaseButton>
    </div>
  </div>
</template>

