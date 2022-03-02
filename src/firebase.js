// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEaejRIEpM3hY_cxLsyI83f37cEhgQ95Q",
  authDomain: "hexadsign-web.firebaseapp.com",
  projectId: "hexadsign-web",
  storageBucket: "hexadsign-web.appspot.com",
  messagingSenderId: "159453549465",
  appId: "1:159453549465:web:708151e98786ff970e3908"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Exportar la base de datos de fstore.
export const db = getFirestore(app);

