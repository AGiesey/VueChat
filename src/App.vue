<template>
  <div id="app">
    <header class="has-background-info ">
      <h1 class="title has-text-white-bis">Vue Firebase</h1>
      <p class="subtitle has-text-white-ter">Realtime Voice Chat</p>
    </header>
    <div class="body-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { auth } from './firebase';

console.log(auth);

export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
  header {
    margin-bottom: 15px;
    padding: 15px;
  }

  .body-container {
    padding: 20px;
  }
</style>
