import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBWUtJCBcY-TUAyWsQ3NvvUYg8X4SnVOT8",
  authDomain: "twitter-clone-fe1fc.firebaseapp.com",
  databaseURL: "https://twitter-clone-fe1fc.firebaseio.com",
  projectId: "twitter-clone-fe1fc",
  storageBucket: "twitter-clone-fe1fc.appspot.com",
  messagingSenderId: "480829025627",
  appId: "1:480829025627:web:3857ebd798355faf4bfe7e",
  measurementId: "G-N839LJEC6K"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();

export default db;