var admin = require("firebase-admin");
var serviceAccount = require("F:/projects/cataemprego/br.com.cataemprego/secrets/credentials.json");
  
let app =admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: "https://cataemprego-c4ddc-default-rtdb.firebaseio.com",
      authDomain: "cataemprego-c4ddc.firebaseapp.com"
      });
const db = app.firestore();
const products = db.collection("registered-positions").get()

const json = JSON.stringify(products.docs.map((doc) => ({ ...doc.data() })))
console.log(json)