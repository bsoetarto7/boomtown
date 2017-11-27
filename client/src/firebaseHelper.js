import * as firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: "AIzaSyDcG1YAUo6WaPqacn0Bb3S130bU6hRwHp8",
  authDomain: "boomtown-fbc08.firebaseapp.com",
  databaseURL: "https://boomtown-fbc08.firebaseio.com",
  projectId: "boomtown-fbc08",
  storageBucket: "boomtown-fbc08.appspot.com",
  messagingSenderId: "423738432051"
};

firebase.initializeApp(config);

export default firebase;