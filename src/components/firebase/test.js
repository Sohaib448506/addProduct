import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZaKUgwKF1iuIdi11F5Tccw65dD25BseM",
  authDomain: "khub-addtoproduct.firebaseapp.com",
  databaseURL: "https://khub-addtoproduct-default-rtdb.firebaseio.com",
  projectId: "khub-addtoproduct",
  storageBucket: "khub-addtoproduct.appspot.com",
  messagingSenderId: "809569119882",
  appId: "1:809569119882:web:6bd03c52bfee50dd7f0773",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Firebase storage reference
var database = app.database();

export default database;
