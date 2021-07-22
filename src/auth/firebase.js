import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyB18AyTFpqNS1EbzSjHSR4-t3-f7O3NURg",
    authDomain: "richpanel-helpdek.firebaseapp.com",
    projectId: "richpanel-helpdek",
    storageBucket: "richpanel-helpdek.appspot.com",
    messagingSenderId: "754145778722",
    appId: "1:754145778722:web:b4e35c9b5f448e5f6c3e7b",
    measurementId: "G-M1X4Q81SXM",
  })
  .auth();
