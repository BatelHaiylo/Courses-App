// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoywxTEhMCTTVhHPPJG0jf8CAra8xsA3c",
  authDomain: "fir-auth-courses-app.firebaseapp.com",
  projectId: "fir-auth-courses-app",
  storageBucket: "fir-auth-courses-app.appspot.com",
  messagingSenderId: "1088409315076",
  appId: "1:1088409315076:web:68b3928c7b0efd804b1251"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app