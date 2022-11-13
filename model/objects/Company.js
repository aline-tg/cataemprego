export default class Company {

    constructor(companyId,
                cnpj,
                companyName,
                companyAddress,
                companyPhone,
                companyLogoImage) {
        this.companyId = companyId;
        this.cnpj = cnpj;
        this.companyName= companyName;
        this.companyAddress = companyAddress;
        this.companyPhone = companyPhone;
        this.companyLogoImage = companyLogoImage;
        }

    getCompanyId() {
        return this.companyId;
    }

    getCnpj(){
        return this.cnpj;
    }

    getCompanyName(){
        return this.companyName;
    }

    getCompanyAddress(){
        return this.companyAddress;
    }

    getCompanyPhone(){
        return this.companyPhone;
    }

    getCompanyLogoImage(){
        return this.companyLogoImage;
    }

    setCompanyName(){
        return undefined;
    }

    setCompanyPhone(){
        return undefined;
    }

    setCompanyLogoImage(){
        return undefined;
    }

}