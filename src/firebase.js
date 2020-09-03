import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAGh4gNXBkcCmlE58nag34MWq9VmsuMqZ0",
  authDomain: "twitter-clone-e75f4.firebaseapp.com",
  databaseURL: "https://twitter-clone-e75f4.firebaseio.com",
  projectId: "twitter-clone-e75f4",
  storageBucket: "twitter-clone-e75f4.appspot.com",
  messagingSenderId: "561313495485",
  appId: "1:561313495485:web:43ff2287c38a5b19cbbad4",
  measurementId: "G-4KHVWXS9N8"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();

export default db;