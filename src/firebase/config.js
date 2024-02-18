// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGqs-TaSf9hz4IVzsUUOgD8tvjATeeU_s",
  authDomain: "weatherapp-firebase-890d8.firebaseapp.com",
  projectId: "weatherapp-firebase-890d8",
  storageBucket: "weatherapp-firebase-890d8.appspot.com",
  messagingSenderId: "883641226969",
  appId: "1:883641226969:web:66446f7ef00beb26ce50c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const database = getAuth(app);