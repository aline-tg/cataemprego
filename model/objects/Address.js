class Address {

    constructor(companyId,
                street,
                city,
                state,
                district) {
        this.companyId = companyId;
        this.street = street;
        this.city= city;
        this.state = state;
        this.district = district;
        }

    getStreet(){
        return this.street;
    }
    getCity(){
        return this.city;
    }
    getState(){
        return this.state;
    }
    getDistrict(){
        return this.district;
    }
    setStreet(){
        return undefined;
    }
    setCity(){
        return undefined;
    }
    setState(){
        return undefined;
    }
    setDistrict(){
        return undefined;
    }

}