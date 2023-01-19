// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA9Q3Y7tdLIKr4rtB0V8uibGb4nvLXjRPE",
    authDomain: "react-freshnft.firebaseapp.com",
    projectId: "react-freshnft",
    storageBucket: "react-freshnft.appspot.com",
    messagingSenderId: "865914511200",
    appId: "1:865914511200:web:30f1cf397d344e3c948805"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);