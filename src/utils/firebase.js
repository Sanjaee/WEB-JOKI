// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAC21EizKvv8bYa83HDX4qq-0hokEOFmuc",
  authDomain: "atengstore-8235f.firebaseapp.com",
  projectId: "atengstore-8235f",
  storageBucket: "atengstore-8235f.appspot.com",
  messagingSenderId: "445589756201",
  appId: "1:445589756201:web:9f0f677e9d771104b3bf38",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Mengambil referensi Firestore
const db = getFirestore(app);

// Membuat fungsi untuk mengambil data dari koleksi "product" dan mengekspornya
export const fetchProductData = async () => {
  try {
    const productCollection = collection(db, "product");
    const querySnapshot = await getDocs(productCollection);

    const products = [];

    querySnapshot.forEach((doc) => {
      products.push(doc.data());
    });

    return products;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};
