<template>
  <div class="chat-list">
    <h6 class="title">My Chat Rooms:</h6>
    <ul>
      <li v-for="chat of chats" :key="chat.id">
        <router-link :to="{name: 'chat', params: {id: chat.id}}"> {{chat.id}}</router-link>
      </li>
    </ul>
    <br/>
    <button class="button is-primary" @click="createChatRoom()">Create New Chat Room</button>
  </div>
</template>

<script>
import { db } from '../firebase';

export default {
  data() {
    return {
      chats: []
    }
  },
  firestore() {
    return {
      chats: db.collection('chats').where('owner', '==', this.uid)
    }
  },
  methods: {
    async createChatRoom() {
      const newChat = await db.collection('chats').add({
        createdAt: Date.now(),
        owner: this.uid,
        members: [this.uid]
      })

      console.log(newChat);
    }
  },
  props: ['uid'],
}
</script>

<style scoped>
  .chat-list {
    margin: 20px 0;
  }
</style>