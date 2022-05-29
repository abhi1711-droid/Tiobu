import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQyn7h2-vP_GIGj8f8f3MoAXplH0Q5xNI",
  authDomain: "tiobu-533a1.firebaseapp.com",
  projectId: "tiobu-533a1",
  storageBucket: "tiobu-533a1.appspot.com",
  messagingSenderId: "652564076864",
  appId: "1:652564076864:web:fbd51231bd8aefef0f42a5",
  measurementId: "G-43PLR592J9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = app.auth();