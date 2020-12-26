<template>
  <aside>
    <div v-if="newUser">
      <h3 class="title">Sign Up for a New Account</h3>
      <a href="#" @click="newUser = false">Returning User?</a>
    </div>
    <div v-else>
      <h3 class="label">Sign In With Email </h3>
      <a href="#" @click="newUser = true">New User?</a>
    </div>
    
    <label class="label" for="email">Email</label>
    <input class="input" type="email" placeholder="email" v-model="email" />
    <br class="spacer"/>
    <label class="label" for="password">Password</label>
    <input class="input" type="password" placeholder="password" v-model="password" />

    <br />
    <button class="button is-info" :class="{'is-loading': isLoading}" @click="signInOrCreateUser()">
      {{ newUser ? 'Sign Up' : 'Login' }}
    </button>

    <p class="has-text-danger" v-if={errorMessage}>{{errorMessage}}</p>
  </aside>
</template>

<script>
import { auth } from '../firebase';

export default {
  data() {
    return {
      auth,
      email: '',
      password: '',
      newUser: false,
      isLoading: false,
      errorMessage: ''
    }
  },

  methods: {
    async signInOrCreateUser() {
       this.isLoading = true;
       this.errorMessage = '';

      try {
        if (this.newUser) {
          auth.createUserWithEmailAndPassword(this.email, this.password);
        } else {
          auth.signInWithEmailAndPassword(this.email, this.password);
        }  
      } catch(error) {
        console.log(error);
        this.errorMessage = error;
      }
        this.isLoading = false;
    }
  }
}
</script>

<style scoped>
  h3 {
    display: inline-block;
    margin-right: 20px;
  }

  input {
    margin-bottom: 20px;
  }
</style>