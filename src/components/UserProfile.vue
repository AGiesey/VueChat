<template>
  <div>
    <p>Logged in as <span>{{user.uid}}</span></p>
    <button class="button is-warning is-small" @click="auth.signOut()">Log Out</button>
  </div>
</template>

<script>
import { auth } from '../firebase'

export default {
  data() {
    return {
      auth
    }
  },
  props: ['user']
};
</script>