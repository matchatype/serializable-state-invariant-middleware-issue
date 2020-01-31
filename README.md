# Issue with serializable-state-invariant-middleware

## Quick Start

To start the project:

- Visit [Firebase console](https://console.firebase.google.com/) and create a new demo project.
- Within Firebase Auth settings enable Google as Auth provider.
- Open the file `src/lib/firebase.js` and fill in `firebaseConfig` with your project credentials.
- Run `npm i`
- Run `npm start`
- Visit [http://localhost:3000](http://localhost:3000)

## Expected behavior
Open the console tab in your browser. Click on the login button and authenticate with your Google credentials. A serie of `A non-serializable value was detected in an action, in the path: <some-path>` errors will be triggered as soon as the auth object is loaded in state. Check `src/lib/store.js`.