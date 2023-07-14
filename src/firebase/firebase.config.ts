import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_apiKey,
//   authDomain: process.env.REACT_APP_authDomain,
//   projectId: process.env.REACT_APP_projectId,
//   storageBucket: process.env.REACT_APP_storageBucket,
//   messagingSenderId: process.env.REACT_APP_messagingSenderId,
//   appId: process.env.REACT_APP_appId
// };
const firebaseConfig = {
    apiKey:"AIzaSyBfZHP0KDAcTYdns3lsqQ11Y3UDy0wH3aw",
    authDomain:"book-catalog-c9f30.firebaseapp.com",
    projectId:"book-catalog-c9f30",
    storageBucket:"book-catalog-c9f30.appspot.com",
    messagingSenderId:"300828800405",
    appId:"1:300828800405:web:af558bfe4325fdc312329c"
  };
// const firebaseConfig = {
//     apiKey: import.meta.env.VITE_apiKey,
//     authDomain: import.meta.env.VITE_authDomain,
//     projectId: import.meta.env.VITE_projectId,
//     storageBucket: import.meta.env.VITE_storageBucket,
//     messagingSenderId: import.meta.env.VITE_messagingSenderId,
//     appId: import.meta.env.VITE_appId
//   };



const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);