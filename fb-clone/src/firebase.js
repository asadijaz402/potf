// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyD56UJtPkol8_AF2PRiVkwt2SlWq4gMljo",
    authDomain: "fb-clone-5dab8.firebaseapp.com",
    databaseURL: "https://fb-clone-5dab8.firebaseio.com",
    projectId: "fb-clone-5dab8",
    storageBucket: "fb-clone-5dab8.appspot.com",
    messagingSenderId: "53726434884",
    appId: "1:53726434884:web:7d86db81dc5be14daace11",
    measurementId: "G-LT6FCGRSZ1"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider(); 
  export {auth, provider}
  export default db;