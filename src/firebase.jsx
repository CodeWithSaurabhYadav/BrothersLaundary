// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpLOuG_wIXm9D4mPipyhG83_mTGZ9vmLk",
  authDomain: "brotherslaundary-sauraj.firebaseapp.com",
  projectId: "brotherslaundary-sauraj",
  storageBucket: "brotherslaundary-sauraj.appspot.com",
  messagingSenderId: "42732148784",
  appId: "1:42732148784:web:f66f5194a6dd9c58d975f5",
  measurementId: "G-6MD4BCX99N"
};

// Initialize Firebase
const firebse_app = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebse_app);

export {
  firebse_app,
  analytics
};