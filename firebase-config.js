// firebase-config.js
const firebaseConfig = {
  apiKey: "AIzaSyC6pOYCsbcr0z9UtQK-lKcVOgogP41RcNo",
  authDomain: "testing-b42c3.firebaseapp.com",
  projectId: "testing-b42c3",
  storageBucket: "testing-b42c3.firebasestorage.app",
  messagingSenderId: "495240630123",
  appId: "1:495240630123:web:c3450ff9a14e0ffcba862e",
  measurementId: "G-RJ2W7G8J6V"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
