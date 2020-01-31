import {
  combineReducers,
  configureStore,
  getDefaultMiddleware
} from "@reduxjs/toolkit";
import { firebaseReducer, getFirebase } from "react-redux-firebase";
import { firestoreReducer, getFirestore } from "redux-firestore";

const initialState = {};

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer
});

const configureAppStore = (preloadedState = initialState) => {
  return configureStore({
    middleware: [
      ...getDefaultMiddleware({
        thunk: {
          extraArgument: { getFirebase, getFirestore }
        },
        /*
         * Ignoring paths works only for `firebase.profile.token`,
         * not for `auth` and `profile.token`
         *
         * The following setting disables the middleware
         * serializableCheck: false
         */
        serializableCheck: {
          ignoredPaths: ["firebase.profile.token", "auth", "profile.token"]
        }
      })
    ],
    reducer: rootReducer,
    preloadedState
  });
};
export { configureAppStore as default };
