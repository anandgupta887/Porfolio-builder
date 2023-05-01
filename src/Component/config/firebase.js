import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCzTDaXQYAK0-xWBefOn5yMe9GjV73RxP0",
  authDomain: "portfolio-storage-7adfd.firebaseapp.com",
  projectId: "portfolio-storage-7adfd",
  storageBucket: "portfolio-storage-7adfd.appspot.com",
  messagingSenderId: "512078473726",
  appId: "1:512078473726:web:913b39971b8a6265f638af",
  measurementId: "G-3LGMTFVB7J",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);
const auth = getAuth();
const storage = getStorage();

export default app;
export { db, auth, storage };
