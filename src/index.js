import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { BrowserRouter } from "react-router-dom";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlXFvDa0qUjN0L9iHvYPzifkAJKOMEapI",
  authDomain: "bootcamp-2829f.firebaseapp.com",
  databaseURL: "https://bootcamp-2829f-default-rtdb.firebaseio.com",
  projectId: "bootcamp-2829f",
  storageBucket: "bootcamp-2829f.appspot.com",
  messagingSenderId: "1076609245376",
  appId: "1:1076609245376:web:3079c756f4d9151eddcd25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
