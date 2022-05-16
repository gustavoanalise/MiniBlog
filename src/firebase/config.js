import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase'
const firebaseConfig = {
  apiKey: "AIzaSyCpUkC2MlFtzXTk2NMVrLs3YqD7IZxvSbk",
  authDomain: "mini-blog-reactjs.firebaseapp.com",
  projectId: "mini-blog-reactjs",
  storageBucket: "mini-blog-reactjs.appspot.com",
  messagingSenderId: "489562905235",
  appId: "1:489562905235:web:4ddbb90459613a30d30b66"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };