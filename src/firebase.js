// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSh9nw3zrcGWwKjFBWWepqZmhNC_IliYY",
  authDomain: "booking-app-13a37.firebaseapp.com",
  projectId: "booking-app-13a37",
  storageBucket: "booking-app-13a37.appspot.com",
  messagingSenderId: "410023018340",
  appId: "1:410023018340:web:4499f932a5a683f0e3c471",
  measurementId: "G-E6HPC065VN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);