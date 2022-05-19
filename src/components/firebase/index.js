import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyLZA7QzSMhfpfkbOBm6GqbZHcbmkg_j4",
  authDomain: "khub-firebase-form.firebaseapp.com",
  databaseURL: "https://khub-firebase-form-default-rtdb.firebaseio.com",
  projectId: "khub-firebase-form",
  storageBucket: "khub-firebase-form.appspot.com",
  messagingSenderId: "195760978184",
  appId: "1:195760978184:web:e1d23b39c11eae2c9554bd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Firebase storage reference
const storage = getStorage(app);

export default storage;
