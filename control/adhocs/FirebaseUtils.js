import admin from "firebase-admin";

export function firebaseAuthentication() {
      var serviceAccount = require("F:/projects/cataemprego/secrets/credentials.json");
      firebase_login = admin.initializeApp({
       credential: admin.credential.cert(serviceAccount),
       databaseURL: "https://cataemprego-c4ddc-default-rtdb.firebaseio.com",
       authDomain: "cataemprego-c4ddc.firebaseapp.com"
       });
  return firebase_login
}

function getFirebaseCollection(collection){
    var admin = firebaseAuthentication();
    var db = admin.firestore();
    var data = db.collection(collection).get();
    return data;
}

function searchFirebaseJobs() {
    document.addEventListener('DOMContentLoaded', async function() {
        admin = firebaseAuthentication();
        const db = admin.firestore();

        const searchByName = async ({
            search = '',
            limit = 50,
        } = {}) => {
        const snapshot = await db.collection('registered-positions')
          .where('keywords', 'array-contains', search.toLowerCase())
          .orderBy('positionName')
          .limit(limit)
          .get();
        return snapshot.docs.reduce((acc, doc) => {
          const job = doc.data();
          console.log(job.companyName);
        //   return acc.concat(               
        //     `
        //     <tr>
        //       <td>${job.companyName}</td>
        //       <td>${job.positionName}</td>
        //       <td>${job.description}</td>
        //     </tr>`
        //     );
        }, '');
      }});

    }
