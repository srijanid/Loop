// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "loop-f8962.firebaseapp.com",
  projectId: "loop-f8962",
  storageBucket: "loop-f8962.appspot.com",
  messagingSenderId: "821474927191",
  appId: "1:821474927191:web:fcb9ec2cb9817576c73912",
  measurementId: "G-Z3VDVGJ2JZ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);

if (typeof window !== 'undefined') {
  import('firebase/analytics').then(({ getAnalytics, isSupported }) => {
    isSupported().then((yes) => {
      if (yes) {
        const analytics = getAnalytics(app);
      }
    });
  });
}