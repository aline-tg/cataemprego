function firebaseAuthentication() {
  var firebase = require("firebase/app");
  var serviceAccount = require("F:/projects/cataemprego/br.com.cataemprego/secrets/cataemprego-c4ddc-firebase-adminsdk-w9zd1-424a7c9fe7.json");
  admin = firebase.initializeApp(serviceAccount);
  return admin
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
