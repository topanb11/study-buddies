// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAswhRil7Gi5fb-z6quXi5cmxVd-V39nW0",
  authDomain: "studybuddies-b4404.firebaseapp.com",
  projectId: "studybuddies-b4404",
  storageBucket: "studybuddies-b4404.appspot.com",
  messagingSenderId: "498941174180",
  appId: "1:498941174180:web:c9a4dfce7a442dc63ae131",
  measurementId: "G-YBT37K83NX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default getFirestore();















/*import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAswhRil7Gi5fb-z6quXi5cmxVd-V39nW0",
    authDomain: "studybuddies-b4404.firebaseapp.com",
    projectId: "studybuddies-b4404",
    storageBucket: "studybuddies-b4404.appspot.com",
    messagingSenderId: "498941174180",
    appId: "1:498941174180:web:c9a4dfce7a442dc63ae131",
    measurementId: "G-YBT37K83NX"
};

firebase.initializeApp(firebaseConfig);

export default firebase;*/

