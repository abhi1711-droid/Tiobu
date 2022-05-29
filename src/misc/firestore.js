import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBQyn7h2-vP_GIGj8f8f3MoAXplH0Q5xNI",
  authDomain: "tiobu-533a1.firebaseapp.com",
  projectId: "tiobu-533a1",
  storageBucket: "tiobu-533a1.appspot.com",
  messagingSenderId: "652564076864",
  appId: "1:652564076864:web:fbd51231bd8aefef0f42a5",
  measurementId: "G-43PLR592J9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db=firebase.firestore();