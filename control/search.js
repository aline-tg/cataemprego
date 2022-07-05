import { firebaseAuthentication } from "./FirebaseUtils.js";
import { collection, query, where, getFirestore, getDocs } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js";

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

async function searchJobs(search,messageToPrint) {
    //const firebase_login = firebaseAuthentication()
    //let firebase_login = firebaseAuthentication().app
    let db = firebaseAuthentication().firestoreDB
    console.log(db)
    //const db = getFirestore(firebase_login)
    const jobsCol = db.collection("registered-positions");
    console.log(jobsCol)
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

let jobsList = [];
let messageToPrint = "Você ainda não buscou nenhuma vaga :(";
const searchInput = document.querySelector("[data-search]");
searchInput.addEventListener("keydown", e => {
  if (e.code == "Enter"){
    const value = e.target.value
    jobsList, messageToPrint = searchJobs(value,messageToPrint);
    console.log(value)
  }
})
    