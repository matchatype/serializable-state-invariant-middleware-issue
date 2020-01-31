import React from "react";
import { Provider } from "react-redux";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { createFirestoreInstance } from "redux-firestore";
import Routes from "../components/routes";
import firebase from "../lib/firebase";
import configureAppStore from "../lib/store";

const store = configureAppStore();

const rrfProps = {
  firebase,
  config: {
    attachAuthIsReady: true,
    enableClaims: true,
    keysToRemoveFromAuth: [],
    presence: "presence",
    sessions: "sessions",
    useFirestoreForProfile: true,
    useFirestoreForStorageMeta: true,
    userProfile: "users"
  },
  dispatch: store.dispatch,
  createFirestoreInstance
};

const App = () => (
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <Routes />
    </ReactReduxFirebaseProvider>
  </Provider>
);

export default App;
