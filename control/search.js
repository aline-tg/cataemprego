import {initializeApp} from "firebase/app";
import { getFirestore} from "firebase/firestore";
import * as fs from "fs";

class Position {
          
  constructor(positionId,
              companyId,
              companyName,
              positionName,
              positionLocation,
              positionDutyHours,
              positionSalary,
              positionBenefits,
              positionDescription,
              companyLogoImage) {
      this.positionId = positionId;
      this.companyId = companyId;
      this.companyName= companyName;
      this.positionName = positionName;
      this.positionLocation = positionLocation;
      this.positionDutyHours = positionDutyHours;
      this.positionSalary = positionSalary;
      this.positionBenefits = positionBenefits;
      this.positionDescription = positionDescription;
      this.companyLogoImage = companyLogoImage;
  }
}

function firebaseAuthentication() {
  fs.readFile('F:/projects/cataemprego/secrets/credentials.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    var parsed_data = JSON.parse(data);
    const firebaseApp = initializeApp(parsed_data);
    const db = getFirestore(firebaseApp);
    //console.log(db)
    return db;
  });
}

function searchJobs() {
    fs.readFile('F:/projects/cataemprego/secrets/credentials.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    // var parsed_data = JSON.parse(data);
    // var firebase_login = admin.initializeApp({
    //   credential: admin.credential.cert(parsed_data),
    //   databaseURL: "https://cataemprego-c4ddc-default-rtdb.firebaseio.com",
    //   authDomain: "cataemprego-c4ddc.firebaseapp.com"
    //   });
    
    // const db = firebase_login.firestore();
    var parsed_data = JSON.parse(data);
    const firebaseApp = initializeApp(parsed_data);
    const db = getFirestore(firebaseApp);
    //console.log(db)
  });
    
      var search = document.getElementById("search_jobs");
      const searchJob = async(search) => {

          var collection = await db.collection("registered-positions");
          var query = collection.where('keywords', 'array-contains', search.toLowerCase());
          var listJobsFound = [];
          var querySnapshot = query.get()
                                   .then((querySnapshot) => {
                                          querySnapshot.forEach((doc) => {
                                          position = new Position(doc.data().id,
                                                                  doc.data().companyId,
                                                                  doc.data().companyName,
                                                                  doc.data().positionName,
                                                                  doc.data().positionLocation,
                                                                  doc.data().positionDutyHours,
                                                                  doc.data().positionSalary,
                                                                  doc.data().positionBenefits,
                                                                  doc.data().positionDescription,
                                                                  doc.data().companyLogoImage)
                                      
                                          listJobsFound.push(position);   
                                          console.log(length(listJobsFound)); 
                                          return listJobsFound;                   
                                            });
                                            }).catch((error) => {
                                          console.log("Sorry! We have a problem to process this call...")
                                        });
                                  }
}