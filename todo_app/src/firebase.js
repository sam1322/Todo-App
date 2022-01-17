// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkcP3tiMUI8AT_chYTBy7IbV5vCesnBA0",
  authDomain: "todo-app-50f8a.firebaseapp.com",
  projectId: "todo-app-50f8a",
  storageBucket: "todo-app-50f8a.appspot.com",
  messagingSenderId: "640043148383",
  appId: "1:640043148383:web:296f828340a08db974e7ea",
  measurementId: "G-QPEZ4RER6G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(); 
// const db = app.fireStore()
export default db