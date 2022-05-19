//import {userCompany,userPerson} from "./control/videopage.js";

function userPerson() {
    window.location.href = "videopage.html"; 
 }
 
 function userCompany() {
     window.location.href = "videopage.html"; 
  }

function createButton(inputId, buttonClass, text) {
    /**
     * Creates a button element
     * 
     * @param inputId the button id
     * @param buttonClass the css class used to style button
     * @param text the button text to be seen in UI
     * 
     * @return button a button element
     */
    var button = document.createElement("button");
    button.classList.add(buttonClass);
    button.innerText = text;
    button.id = inputId;

    return button;
}

function mainPage() {
    /**
     * Function created to show the first page from CataEmprego
     */
    var myDiv = document.createElement("div");
    myDiv.setAttribute('style', 'text-align:center;');
    var lineBreak = document.createElement("br")
    var button1 = createButton("userPersonButton","button--actions", "Quero um emprego!");
    var button2 = createButton("userCompanyButton","button--actions", "Quero contratar!");
    
    myDiv.appendChild(lineBreak);
    myDiv.appendChild(lineBreak.cloneNode());
    myDiv.appendChild(button1);
    myDiv.appendChild(lineBreak.cloneNode());
    myDiv.appendChild(lineBreak.cloneNode());
    myDiv.appendChild(lineBreak.cloneNode());
    myDiv.appendChild(button2);
    document.body.appendChild(myDiv);

    document.getElementById("userPersonButton").addEventListener("click", userPerson)
    document.getElementById("userCompanyButton").addEventListener("click", userCompany)
}

mainPage();