
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBfZHP0KDAcTYdns3lsqQ11Y3UDy0wH3aw",
  authDomain: "book-catalog-c9f30.firebaseapp.com",
  projectId: "book-catalog-c9f30",
  storageBucket: "book-catalog-c9f30.appspot.com",
  messagingSenderId: "300828800405",
  appId: "1:300828800405:web:af558bfe4325fdc312329c"
};

const app = initializeApp(firebaseConfig);
export default app;