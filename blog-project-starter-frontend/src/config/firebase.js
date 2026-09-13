// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4L2_tiA4eklwIq7ez17IO2O_YRoUFnjU",
  authDomain: "blogathuo.firebaseapp.com",
  projectId: "blogathuo",
  storageBucket: "blogathuo.firebasestorage.app",
  messagingSenderId: "532012794792",
  appId: "1:532012794792:web:918fc36ced1d12191b539d",
  measurementId: "G-D5VFPYRW5S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth, analytics };