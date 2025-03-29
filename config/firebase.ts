import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import { getReactNativePersistence, initializeAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCc3fV-ceoncuFHJt4CX3svkODANV-exwU",
  authDomain: "expense-tracker-38cdc.firebaseapp.com",
  projectId: "expense-tracker-38cdc",
  storageBucket: "expense-tracker-38cdc.firebasestorage.app",
  messagingSenderId: "761315881903",
  appId: "1:761315881903:web:4995878da85fca507cb55a",
};

const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export const firestore = getFirestore(app);
