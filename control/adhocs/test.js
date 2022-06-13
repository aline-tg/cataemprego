import { createRequire } from 'firebase-admin';

function firebaseAuthentication() {
    const admin = createRequire(import.meta.admin);
    //var admin = require("firebase-admin");
    var serviceAccount = require("F:/projects/cataemprego/br.com.cataemprego/secrets/cataemprego-c4ddc-firebase-adminsdk-w9zd1-424a7c9fe7.json");

    admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://cataemprego-c4ddc-default-rtdb.firebaseio.com",
    authDomain: "cataemprego-c4ddc.firebaseapp.com"
    });
    return admin
}

function getFirebaseCollection(collection){
    var admin = firebaseAuthentication();
    var db = admin.firestore();
    var data = db.collection(collection).get();
    return data;
}

function searchFirebaseJobs() {
    //document.addEventListener('DOMContentLoaded', async function() {
        admin = firebaseAuthentication();
        const db = admin.firestore();

        const searchByName = async ({
            search = 'Aux',
            limit = 50,
        } = {}) => {
        const snapshot = await db.collection('registered-positions')
          .where('keywords', 'array-contains', search.toLowerCase())
          .orderBy('positionName')
          .limit(limit)
          .get();
        return snapshot.docs.reduce((acc, doc) => {
          const job = doc.data();
          console.log(acc.companyName);
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
      }};
      //}});

    //}

function test(search) {
  admin = firebaseAuthentication();
  const db = admin.firestore();

  const snapshot = db.collection('registered-positions')
          .where('keywords', 'array-contains', search)
          .orderBy('positionName')
          .get()
          .then((snapshot) => {
            const data = snapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }));
            console.log("All data in 'books' collection", data); 
            // [ { id: 'glMeZvPpTN1Ah31sKcnj', title: 'The Great Gatsby' } ]
          });

//          console.log(snapshot.docs)

//         return snapshot.docs.reduce((acc, doc) => {
//           const job = doc.data();
//           console.log(acc.companyName);
//           console.log(job.companyName);
// });
}


test("Auxiliar");