// import { firebaseAuthentication } from "./FirebaseUtils.js";
//import { collection, query, where, getFirestore, getDocs } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js";
//import {collection, query, where, getFirestore, getDocs} from 'https://www.gstatic.com/firebasejs/9.8.4/firebase-firestore.js'

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

export async function searchJobs(search,messageToPrint, firestore_db) {   
    const jobsCol = collection(firestore_db,"registered-positions");
    console.log(firestore_db)
    var querySearch = query(jobsCol,where('keywords', 'array-contains', search.toLowerCase()));
    const querySnapshot = await getDocs(querySearch);
    var listJobsFound = [];
    let message = messageToPrint;

    querySnapshot.forEach((doc) => {
      var position = new Position(doc.data().id,
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
        });

      if (listJobsFound.length == 0)
        message = "Não foram encontradas vagas para a posição buscada."
      else
        message = "Foram encontradas " + listJobsFound.length + "vagas."
        
      return listJobsFound, message;  
      }


    