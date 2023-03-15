import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBJOJOVd3Y3S5PYwAxbBQMdnjnYcyDqiJA",
  authDomain: "ciclista-emanuel.firebaseapp.com",
  projectId: "ciclista-emanuel",
  storageBucket: "ciclista-emanuel.appspot.com",
  messagingSenderId: "147517866519",
  appId: "1:147517866519:web:006be5fa3e84f14f049252"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
