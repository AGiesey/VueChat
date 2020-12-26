import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDGtvVu2dhNXjNJKST9o8ZliMBbDXPAbSs",
  authDomain: "vue-voxer-248fd.firebaseapp.com",
  databaseURL: "https://vue-voxer-248fd.firebaseio.com",
  projectId: "vue-voxer-248fd",
  storageBucket: "vue-voxer-248fd.appspot.com",
  messagingSenderId: "300166925029",
  appId: "1:300166925029:web:ea325fc5d6bb45f58d220c"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();