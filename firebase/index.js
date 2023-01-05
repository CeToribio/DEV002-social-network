// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";

// https://firebase.google.com/docs/web/setup#available-libraries
// Autentificacion
import {getAuth} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Firebase, esta informacion la utiliza firebase para el uso de su servicio
const firebaseConfig = {
    apiKey: "AIzaSyAQxr8QueNyoazFnT3cCFo4YeCEz7S4FaE",
    authDomain: "social-network-dog.firebaseapp.com",
    projectId: "social-network-dog",
    storageBucket: "social-network-dog.appspot.com",
    messagingSenderId: "1073529346267",
    appId: "1:1073529346267:web:b2b1e7b435a9c16adc14fe",
    measurementId: "G-5PBN6ZD4GQ"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app)

