// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAy5PT0giRwXS_EXCDoKoZoUSH-YIgFPn0",
  authDomain: "api-data-77420.firebaseapp.com",
  projectId: "api-data-77420",
  storageBucket: "api-data-77420.appspot.com",
  messagingSenderId: "915055690240",
  appId: "1:915055690240:web:22cc217a3f58d18c10cee5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Mengambil referensi Firestore
const db = getFirestore(app);

// Membuat fungsi untuk mengambil data dari koleksi "product" dan mengekspornya
// Membuat fungsi untuk mengambil data dari koleksi "store" dan mengekspornya
export const fetchStoreData = async () => {
  try {
    const storeCollection = collection(db, "store");
    const querySnapshot = await getDocs(storeCollection);

    const stores = [];

    querySnapshot.forEach((doc) => {
      stores.push(doc.data());
    });

    return stores;
  } catch (error) {
    console.error("Error fetching store data:", error);
    return [];
  }
};
