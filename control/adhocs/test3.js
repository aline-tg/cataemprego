// var firebase = require("firebase/app");
// var serviceAccount = require("F:/projects/cataemprego/br.com.cataemprego/secrets/cataemprego-c4ddc-firebase-adminsdk-w9zd1-424a7c9fe7.json");
// test = firebase.initializeApp(serviceAccount);


// const db = test.firestore();


// console.log(db)

const firebase = require('firebase');

var firebaseConfig  = require("F:/projects/cataemprego/br.com.cataemprego/secrets/cataemprego-c4ddc-firebase-adminsdk-w9zd1-424a7c9fe7.json");
firebase.initializeApp(firebaseConfig);
const db=firebase.firestore();

console.log(firebaseApp);

console.log(db);