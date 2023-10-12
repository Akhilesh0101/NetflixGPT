// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpzAE78WeNjLdXfEhWCQ8WEAOm65TMoU0",
  authDomain: "netfixgpt-31bb8.firebaseapp.com",
  projectId: "netfixgpt-31bb8",
  storageBucket: "netfixgpt-31bb8.appspot.com",
  messagingSenderId: "296045441672",
  appId: "1:296045441672:web:3fe6666f1993b49aada53d",
  measurementId: "G-GWDV2RHR89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();