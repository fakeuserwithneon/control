import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCP-ZChP2DYgRxDl5NQQ0Xbk1O8qzDsDW0",
    authDomain: "my-project-6b418.firebaseapp.com",
    projectId: "my-project-6b418",
    storageBucket: "my-project-6b418.appspot.com",
    messagingSenderId: "1059458146702",
    appId: "1:1059458146702:web:7c1707c26d7ebe04b944df"
};

//init firebase
firebase.initializeApp(firebaseConfig)

//init firestore service
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, timestamp }