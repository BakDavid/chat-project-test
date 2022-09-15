import React from "react";
import firebase from "firebase/compat";

export default function SignIn(props) {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    props.auth.signInWithPopup(provider);
  };

  return <button onClick={signInWithGoogle}>Sign in with Google</button>;
}
