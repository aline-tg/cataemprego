import AbstractView from "./AbstractView.js";
import {userPerson, userCompany} from "../../control/videopage.js"

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("CataEmprego - Página Principal");
    }

    async getHtml(){
        /**
        * Function created to show the first page from CataEmprego
        */

        return `
        <div style = 'text-align:center;'><br><br>
        <button class='button--actions' id='userPersonButton' onclick="./view/pages/videopage_user.html">"Quero um emprego!"</button>
        <br><br><br>
        <button class='button--actions' id='userCompanyButton'>"Quero contratar!"</button>
        </div>
    `;
    }

} 

