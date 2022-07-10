import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import {initializeFirestore,CACHE_SIZE_UNLIMITED} from "https://cdnjs.cloudflare.com/ajax/libs/firebase/9.8.4/firebase-firestore-lite.min.js";

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

      const firestoreDB = initializeFirestore(app, {
        experimentalForceLongPolling: true, // this line
        useFetchStreams: false, // and this line
        cacheSizeBytes: CACHE_SIZE_UNLIMITED
      })
      
  return app, firestoreDB;
}

function getFirebaseCollection(collection){
    var admin = firebaseAuthentication();
    var db = admin.firestore();
    var data = db.collection(collection).get();
    return data;
}
