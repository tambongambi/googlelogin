import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDZG_L2zgbwzOiSlsRDn4yewa_7oIep_i8",
  authDomain: "blankcheque-88d96.firebaseapp.com",
  projectId: "blankcheque-88d96",
  storageBucket: "blankcheque-88d96.appspot.com",
  messagingSenderId: "756966788490",
  appId: "1:756966788490:web:e6e482030f82f371f34c73"  
};
if (!firebase.apps.length) {
firebase.initializeApp(firebaseConfig);
}


export default firebase;
