//import {Position} from "../model/objects/Position.js"

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

function searchJobs(firebase_login) {

      // var admin = require("firebase-admin");
      // var serviceAccount = require("F:/projects/cataemprego/br.com.cataemprego/secrets/cataemprego-c4ddc-firebase-adminsdk-w9zd1-424a7c9fe7.json");
      // firebase_login = admin.initializeApp({
      // credential: admin.credential.cert(serviceAccount),
      // databaseURL: "https://cataemprego-c4ddc-default-rtdb.firebaseio.com",
      // authDomain: "cataemprego-c4ddc.firebaseapp.com"
      // });
      const db = firebase_login.firestore();
      search = document.getElementById("search_jobs")
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
                                          return listJobsFound;                   
                                            });
                                            }).catch((error) => {
                                          console.log("Sorry! We have a problem to process this call...")
                                        });
                                  }
}