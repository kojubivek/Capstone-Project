import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInwithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD7dfOPS87tbqHO5QY8WxCe3nq5-Glsog4",
  authDomain: "crwn-clothing-2bffd.firebaseapp.com",
  projectId: "crwn-clothing-2bffd",
  storageBucket: "crwn-clothing-2bffd.appspot.com",
  messagingSenderId: "342722468943",
  appId: "1:342722468943:web:9f7f0b7c24c4049e391e3a",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_amount",
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInwithPopup(auth, provider);
