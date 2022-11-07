export default class Position {
    
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

    getPositionId() {
        return this.positionId;
    }

    getCompanyId() {
        return this.companyId;
    }

    getCompanyName() {
        return this.companyName;
    }

    getPositionName() {
        return this.positionName;
    }

    getPositionLocation() {
        return this.positionLocation;
    }

    getPositionDutyHours() {
        return this.positionDutyHours;
    }

    getPositionSalary() {
        return this.positionSalary;
    }

    getPositionBenefits() {
        return this.positionBenefits;
    }

    getPositionDescription() {
        return this.positionDescription;
    }

    getCompanyLogoImage() {
        return this.companyLogoImage;
    }

    setPositionName() {
        return undefined;
    }

    setPositionLocation() {
        return undefined;
    }

    setPositionDutyHours() {
        return undefined;
    }

    setPositionSalary() {
        return undefined;
    }

    setPositionBenefits() {
        return undefined;
    }

    setPositionDescription() {
        return undefined;
    }

    deletePosition() {
        return undefined;
    }

}