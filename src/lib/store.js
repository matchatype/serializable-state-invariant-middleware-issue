import {
  combineReducers,
  configureStore,
  getDefaultMiddleware
} from "@reduxjs/toolkit";
import { actionTypes, firebaseReducer, getFirebase } from "react-redux-firebase";
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
        serializableCheck: {
          ignoredActions: [actionTypes.LOGIN, actionTypes.SET_PROFILE],
        }
      })
    ],
    reducer: rootReducer,
    preloadedState
  });
};
export { configureAppStore as default };
