import firebase from 'firebase'

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBxUDWTK4GCFpjQZz6KcrGfoi1u_qYM0C8",
    authDomain: "chatapp-b5541.firebaseapp.com",
    databaseURL: "https://chatapp-b5541.firebaseio.com",
    projectId: "chatapp-b5541",
    storageBucket: "chatapp-b5541.appspot.com",
    messagingSenderId: "269359627401",
    appId: "1:269359627401:web:9f116ade7347596f279a58",
    measurementId: "G-HQVZSEBWJ5"
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

export default firebaseApp