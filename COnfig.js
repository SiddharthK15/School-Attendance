import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDUyQdHMgNolS6ymCOm5xX1BQBR5A8NOTY",
    authDomain: "attendance-app-789c0.firebaseapp.com",
    databaseURL: "https://attendance-app-789c0-default-rtdb.firebaseio.com",
    projectId: "attendance-app-789c0",
    storageBucket: "attendance-app-789c0.appspot.com",
    messagingSenderId: "998516157527",
    appId: "1:998516157527:web:6524c5d04fc35d7c008712"
  };
  // Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase.database();
