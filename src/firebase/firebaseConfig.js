// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZTCpRovoZWkVlAqPITMjlA-cOqXzboFE",
  authDomain: "pokemon-react-pt4.firebaseapp.com",
  projectId: "pokemon-react-pt4",
  storageBucket: "pokemon-react-pt4.appspot.com",
  messagingSenderId: "290230338597",
  appId: "1:290230338597:web:ae1124edfd333d43326bcc"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth();

export { firebaseApp, auth }