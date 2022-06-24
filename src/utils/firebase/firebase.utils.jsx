import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCtAJ58hHy7_I0A15tzlXI67sd_tBdKXBg",
  authDomain: "shopy-ict-1.firebaseapp.com",
  projectId: "shopy-ict-1",
  storageBucket: "shopy-ict-1.appspot.com",
  messagingSenderId: "1043632778958",
  appId: "1:1043632778958:web:e40aaef2f12e25f4b36a9f",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account'
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
