import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


firebase.initializeApp({
  apiKey: "AIzaSyCHuE_23XqSSIcMKtuwpHn7uF2t6FjDdLM",
  authDomain: "chat-react-dac96.firebaseapp.com",
  projectId: "chat-react-dac96",
  storageBucket: "chat-react-dac96.appspot.com",
  messagingSenderId: "293075846292",
  appId: "1:293075846292:web:5dd94c89d8452d1337e081",
  measurementId: "G-6C0C2PRVJY"
});


export const Context = createContext(null);

const auth = firebase.auth();
const firestore = firebase.firestore();
console.log("🚀 ~ file: index.js ~ line 26 ~ firestore", firestore)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={{
    firebase,
    auth,
    firestore
  }}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Context.Provider>
);