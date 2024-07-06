// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const FB_API_KEY = import.meta.env.VITE_FB_API_KEY;
const FB_AUTH_DOMAIN = import.meta.env.VITE_FB_AUTH_DOMAIN;
const FB_PROJECT_ID = import.meta.env.VITE_FB_PROJECT_ID;
const FB_STORAGE_BUCKET = import.meta.env.VITE_FB_STORAGE_BUCKET;
const FB_MESSAGING_SENDER_ID = import.meta.env.VITE_FB_MESSAGING_SENDER_ID;
const DB_APP_ID = import.meta.env.VITE_DB_APP_ID;
const FB_MEASSUREMENT_ID = import.meta.env.VITE_FB_MEASSUREMENT_ID;


console.log(FB_API_KEY);
console.log(FB_AUTH_DOMAIN);
console.log(FB_PROJECT_ID);
console.log(FB_STORAGE_BUCKET);
console.log(FB_MESSAGING_SENDER_ID);
console.log(DB_APP_ID);
console.log(FB_MEASSUREMENT_ID);



const firebaseConfig = {
  apiKey: FB_API_KEY,
  authDomain: FB_AUTH_DOMAIN,
  projectId: FB_PROJECT_ID,
  storageBucket: FB_STORAGE_BUCKET,
  messagingSenderId: FB_MESSAGING_SENDER_ID,
  appId: DB_APP_ID,
  measurementId: FB_MEASSUREMENT_ID,
};

// Initialize Firebase
const firebse_app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(firebse_app);
const auth = getAuth(firebse_app); 

export {
  firebse_app,
  // analytics,
  auth
};