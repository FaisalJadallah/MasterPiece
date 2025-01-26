// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUfO6heB6bXKI8YxuC3xjCe2gauZHQm2U",
  authDomain: "master--piece.firebaseapp.com",
  projectId: "master--piece",
  storageBucket: "master--piece.firebasestorage.app",
  messagingSenderId: "800599227086",
  appId: "1:800599227086:web:c828b0c1487dac07356e9f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// Get references to the form elements
const loginForm = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const googleSignInBtn = document.getElementById("googleSignIn");

// Function to handle email/password login
loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = emailInput.value;
  const password = passwordInput.value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("Logged in successfully: ", user);
      window.location.href = "../htmlPages/homeUserPage.html";
    })
    .catch((error) => {
      console.error("Error signing in with email and password: ", error.message);
      alert("Invalid Email or Password during login.");
    });
});

// Function to handle Google sign-in
googleSignInBtn.addEventListener("click", () => {
  signInWithPopup(auth, googleProvider)
    .then((result) => {
      const user = result.user;
      console.log("Logged in with Google: ", user);
      window.location.href = "../htmlPages/userPage.html";
    })
    .catch((error) => {
      console.error("Error during Google sign-in: ", error.message);
      alert("An error occurred during Google sign-in.");
    });
});
