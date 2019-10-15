import * as firebase from 'firebase'

const config = {
  apiKey: "AIzaSyDMkjcE5bcAdd2ca9SHIK_YtbCXUXdaebQ",
  authDomain: "expensify-app-d43b4.firebaseapp.com",
  databaseURL: "https://expensify-app-d43b4.firebaseio.com",
  projectId: "expensify-app-d43b4",
  storageBucket: "expensify-app-d43b4.appspot.com",
  messagingSenderId: "213726614025",
  appId: "1:213726614025:web:8a9b6679121f5ceb0eded8"
}

// const config = {
//   apiKey: process.env.FIREBASE_API_KEY,
//   authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//   databaseURL: process.env.FIREBASE_DATABASE_URL,
//   projectId: process.env.FIREBASE_PROJECT_ID,
//   storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
// };


firebase.initializeApp(config)

const database = firebase.database()

export { firebase, database as default }