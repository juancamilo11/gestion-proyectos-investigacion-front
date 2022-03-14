// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMXPPpVvqjU3UfNWB5Z1QngohYB4HMWbY",
  authDomain: "gestion-proyectos-inv-udea.firebaseapp.com",
  projectId: "gestion-proyectos-inv-udea",
  storageBucket: "gestion-proyectos-inv-udea.appspot.com",
  messagingSenderId: "120357191576",
  appId: "1:120357191576:web:d76f87ebcfe935756275ed",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
