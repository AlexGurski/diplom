import Rebase from 're-base'
import * as firebase from "firebase/app";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB4pqlnBwJHByltGk9PtZM6AnNShqwwY2M",
  authDomain: "bzsp-5c9ae.firebaseapp.com",
  databaseURL: "https://bzsp-5c9ae-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "bzsp-5c9ae",
  storageBucket: "bzsp-5c9ae.appspot.com",
  messagingSenderId: "373726371712",
  appId: "1:373726371712:web:9924d9bd6a19876a486b65",
  measurementId: "G-XCK0VXPFXB"
  
})

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp }

export default base