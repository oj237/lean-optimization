import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
    apiKey: "AIzaSyC_Zytf2bloTDpppPnxWejElXca8uBnzSg",
    authDomain: "lean-optimization.firebaseapp.com",
    databaseURL: "https://lean-optimization.firebaseio.com",
    projectId: "lean-optimization",
    storageBucket: "lean-optimization.appspot.com",
    messagingSenderId: "503284190359",
    appId: "1:503284190359:web:29726b7a79399c1ae6edd2",
    measurementId: "G-M2DVZC0W7N"
  };

  // Initialize Firebase
  firebase.initializeApp(config);
  firebase.auth();
  firebase.firestore().settings({
      timestampsInSnapshot: true
  });

  export default firebase;