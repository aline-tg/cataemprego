import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";

export function firebaseAuthentication() {

      const firebaseConfig = {
        apiKey: "AIzaSyAFsQEvPzzmNqp9Xen1LiaQNhenVmwHreo",
        authDomain: "cataemprego-c4ddc.firebaseapp.com",
        databaseURL: "https://cataemprego-c4ddc-default-rtdb.firebaseio.com",
        projectId: "cataemprego-c4ddc",
        storageBucket: "cataemprego-c4ddc.appspot.com",
        messagingSenderId: "157341212687",
        appId: "1:157341212687:web:8a5a66b8dd79463ee7437a"
      };
      
      const app = initializeApp(firebaseConfig);

  return app;
}

function getFirebaseCollection(collection){
    var admin = firebaseAuthentication();
    var db = admin.firestore();
    var data = db.collection(collection).get();
    return data;
}
