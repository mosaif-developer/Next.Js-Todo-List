import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC96Rj79eFic_-Ja9_CHnQbxn0AdAq8iU4",
    authDomain: "todo-app-d84ce.firebaseapp.com",
    projectId: "todo-app-d84ce",
    storageBucket: "todo-app-d84ce.appspot.com",
    messagingSenderId: "828514945919",
    appId: "1:828514945919:web:5b8e2f41f5b84bb62ea84a"
  };
  
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { auth, db };