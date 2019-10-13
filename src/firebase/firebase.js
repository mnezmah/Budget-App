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


firebase.initializeApp(config)
firebase.database().ref().set({
  name: 'Andrew Mead'
})