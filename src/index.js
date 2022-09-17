import React from 'react';
import ReactDOM from "react-dom/client";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

import { Provider } from 'react-redux';
import store from './store';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZ12ED7mx6zE8gb9b1gIS_hRkEPeCMKEM",
  authDomain: "chat-project-test.firebaseapp.com",
  projectId: "chat-project-test",
  storageBucket: "chat-project-test.appspot.com",
  messagingSenderId: "783229787958",
  appId: "1:783229787958:web:689e607765f89a5900dd97",
  measurementId: "G-RY4HBHTL4X"
};


firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

window.store = store;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
