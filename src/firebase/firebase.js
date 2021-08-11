import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBIzsW0WJOGmwqXMSJhhsLPnfwpEj7OKLc",
    authDomain: "pollutiontracker-d7522.firebaseapp.com",
    projectId: "pollutiontracker-d7522",
    storageBucket: "pollutiontracker-d7522.appspot.com",
    messagingSenderId: "777915849461",
    appId: "1:777915849461:web:738730f1bac7fb984343bc",
    measurementId: "G-5XGP2ERN1D"
  };
  export const Firebase = firebase.initializeApp(firebaseConfig)