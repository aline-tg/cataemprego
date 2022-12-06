export default class Benefit {

    constructor(positionId,
                benefitName,
                benefitValue) {
        this.positionId = positionId;
        this.benefitName = benefitName;
        this.benefitValue= benefitValue;
        }

    getPositionId(){
        return this.positionId;
    }

    getBenefitName(){
        return this.benefitName;
    }

    getBenefitiValue(){
        return this.benefitValue;
    }

}