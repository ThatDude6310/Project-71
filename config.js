import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyD-HbXWMxe_vt82vyzcaOqNJSl48jsrrtU",
    authDomain: "project-71-110f9.firebaseapp.com",
    projectId: "project-71-110f9",
    storageBucket: "project-71-110f9.appspot.com",
    messagingSenderId: "178033825276",
    appId: "1:178033825276:web:43c5713c792498f5e68e79"
  };
  
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
