import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDmAMchxqpEFrCSgiNzhpLzAPYb9J3wkxY",
    authDomain: "challenge-96dbb.firebaseapp.com",
    projectId: "challenge-96dbb",
    storageBucket: "challenge-96dbb.appspot.com",
    messagingSenderId: "568067374844",
    appId: "1:568067374844:web:3323cc4f695152458c6179",
    measurementId: "G-6TEQFHVN5Z"
  }; 

  const firebaseApp=firebase.initializeApp(firebaseConfig);


  const db=firebaseApp.firestore();
  const auth=firebase.auth();

  export {db,auth};