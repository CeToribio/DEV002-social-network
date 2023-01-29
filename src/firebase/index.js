// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";

// https://firebase.google.com/docs/web/setup#available-libraries
// Autentificacion
import {getAuth} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js"
import {createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js"
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Firebase, esta informacion la utiliza firebase para el uso de su servicio

import { firebaseConfig } from "./config_firebase.js";
import {onAuthStateChanged, signOut, updateProfile, GoogleAuthProvider, 
   signInWithEmailAndPassword, signInWithPopup} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js"

import { getFirestore,collection,  addDoc, getDocs, onSnapshot, doc, deleteDoc, orderBy, Timestamp, getDoc, query, updateDoc,
arrayUnion, arrayRemove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js"

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

 export{createUserWithEmailAndPassword,auth, onAuthStateChanged,signOut,
    getFirestore,collection,  addDoc, getDocs, onSnapshot, doc, deleteDoc, 
    orderBy, Timestamp,getDoc, query, updateDoc, updateProfile, arrayUnion, 
    arrayRemove, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup}



























  


   