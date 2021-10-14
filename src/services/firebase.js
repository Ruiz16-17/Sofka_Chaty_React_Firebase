import firebase from 'firebase';

const firebaseConfig =
{
    apiKey: "AIzaSyCM_bM6Q66IaE-m1VxrRDuFvMn-m1JSJHM",
    authDomain: "chatty-638c0.firebaseapp.com",
    projectId: "chatty-638c0",
    storageBucket: "chatty-638c0.appspot.com",
    messagingSenderId: "626524971719",
    appId: "1:626524971719:web:ad170209047d0b96a594e2",
    measurementId: "G-6K1BD71Y90"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth;
export const db = firebase.database();