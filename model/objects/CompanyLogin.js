function CompanyLogin(){
    var companyId;
    var userType;
    var companyRegisteredEmail;
    var companyPassword;
    var registrationDate;

    function getCompanyId(){
        return this.companyId;
    }

    function getUserType(){
        return this.userType;
    }

    function getCompanyRegisteredEmail(){
        return this.companyRegisteredEmail;
    }

    function updatedPasswordCompany(){
        return undefined;
    }

    function deleteCompany(){
        return undefined;
    }

    function getRegistrationDate(){
        return this.registrationDate;
    }

}