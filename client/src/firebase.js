import firebase from 'firebase';
import 'firebase/firestore';


var config = {
  apiKey: "AIzaSyDDZGJJabm96Hb_LipK3Ts9M6jUzbAk2J8",
  authDomain: "react-social-media.firebaseapp.com",
  databaseURL: "https://react-social-media.firebaseio.com",
  projectId: "react-social-media",
  storageBucket: "react-social-media.appspot.com",
  messagingSenderId: "277495173936"
};
firebase.initializeApp(config);

export const db = firebase.firestore();
