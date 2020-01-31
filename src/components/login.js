import React from "react";
import "./styles.css";
import { isEmpty, isLoaded, useFirebase } from "react-redux-firebase";
import { useSelector } from "react-redux";

export default function Login() {
  const firebase = useFirebase();

  const auth = useSelector(state => state.firebase.auth);

  async function handleLogin() {
    await firebase.login({ provider: "google", type: "redirect" });
  }

  async function handleLogout() {
    await firebase.logout();
  }

  return (
    <div className="container">
      <h1>Hello dude</h1>
      <h2>Come on in!</h2>

      {!isLoaded(auth) ? (
        <span>Loading...</span>
      ) : isEmpty(auth) ? (
        <button onClick={handleLogin}>Login With Google</button>
      ) : (
        <>
          <pre>{JSON.stringify(auth.uid, null, 2)}</pre>
          <button onClick={handleLogout}>Logout</button>
        </>
      )}
    </div>
  );
}
