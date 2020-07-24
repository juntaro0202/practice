import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyAvo0JEA92VoCwzIZyB2XZ-7hBbzacDcSQ",
    // authDomain: "xxxxxxxxxxxxxxxx.firebaseapp.com",
    // databaseURL: "https://xxxxxxxxxxxxxxxx.firebaseio.com",
    projectId: "nuxt-practice-2bfeb",
    // storageBucket: "xxxxxxxxxxxxxxxx.appspot.com",
    // messagingSenderId: "xxxxxxxxxxxxx",
    // appId: "x:xxxxxxxxxxxxx:web:xxxxxxxxxxxxxxxx"
}

if(!firebase.apps.length){
    firebase.initializeApp(config)
}
export default firebase
