import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBQi1fBuHKgFjhWz3VDjxgjcblTldDnfLs",
    authDomain: "movie-app-1111a.firebaseapp.com",
    projectId: "movie-app-1111a",
    storageBucket: "movie-app-1111a.appspot.com",
    messagingSenderId: "170820213881",
    appId: "1:170820213881:web:550a1e9f3a575d0801c8a8"
};

const app = initializeApp(firebaseConfig);
export const dbService = getFirestore(app);
export const authService = getAuth(app);