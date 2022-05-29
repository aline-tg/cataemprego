import {userCompany,userPerson} from "./videopage.js";
import Utils from "./Utils.js";

function mainPage() {
    /**
     * Function created to show the first page from CataEmprego
     */
    var myDiv = document.createElement("div");
    myDiv.setAttribute('style', 'text-align:center;');
    var lineBreak = document.createElement("br")
    var button1 = Utils.createButton("userPersonButton","button--actions", "Quero um emprego!");
    var button2 = Utils.createButton("userCompanyButton","button--actions", "Quero contratar!");
    
    myDiv.appendChild(lineBreak);
    myDiv.appendChild(lineBreak.cloneNode());
    myDiv.appendChild(button1);
    myDiv.appendChild(lineBreak.cloneNode());
    myDiv.appendChild(lineBreak.cloneNode());
    myDiv.appendChild(lineBreak.cloneNode());
    myDiv.appendChild(button2);
    document.body.appendChild(myDiv);

    document.getElementById("userPersonButton")
            .addEventListener("click", userPerson)

    document.getElementById("userCompanyButton")
            .addEventListener("click", userCompany)
}

mainPage();