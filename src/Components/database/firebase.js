// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore" 
import { getStorage } from "firebase/storage";
import {getAuth,GoogleAuthProvider ,signInWithPopup} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMxT0wz7ctFhpdFrasLxv6kPOD7IK5F8k",
  authDomain: "explore-keonjhar.firebaseapp.com",
  projectId: "explore-keonjhar",
  storageBucket: "explore-keonjhar.appspot.com",
  messagingSenderId: "465117343138",
  appId: "1:465117343138:web:21ea41bf0e3bd5068896fb",
  measurementId: "G-9JVJZ5HVL3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)
const storage = getStorage(app)
const auth =getAuth(app)
const provider = new GoogleAuthProvider()
const popup  = signInWithPopup()
export{auth,db,storage,analytics,provider,popup}


