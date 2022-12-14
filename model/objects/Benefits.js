export default class Benefits {

    constructor(positionId,
                foodBenefit,
                locomotionBenefit,
                healthBenefit,
                dentistBenefit) {
        this.positionId = positionId;
        this.foodBenefit = foodBenefit;
        this.locomotionBenefit= locomotionBenefit;
        this.healthBenefit= healthBenefit;
        this.dentistBenefit= dentistBenefit;
        }

    getPositionId(){
        return this.positionId;
    }

    getFoodBenefit(){
        return this.foodBenefit;
    }

    getLocomotionBenefit(){
        return this.locomotionBenefit;
    }

    getHealthBenefit(){
        return this.healthBenefit;
    }

    getDentistBenefit(){
        return this.dentistBenefit;
    }


}