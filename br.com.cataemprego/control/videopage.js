import {createButton} from "./utils.js";

export function userPerson() {
   window.location.href = "./view/pages/videopage.html"; 
   var myDiv = document.createElement("div");
   myDiv.setAttribute('style', 'text-align:center;');

   var button1 = createButton("videopage_back","video_page_btn", "Voltar");
   var button2 = createButton("videopage_next","video_page_btn", "Próximo");
   myDiv.appendChild(button1);
   myDiv.appendChild(button2);

   document.body.appendChild(myDiv);
}  

export function userCompany() {
    window.location.href = "./view/pages/videopage.html"; 
 }
