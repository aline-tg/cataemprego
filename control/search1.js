import * as FileReader from 'file-api';

class Position {
          
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
}

function searchJob() {
    // Declare variables
    var input, filter_input, data_treated, check_search, position, array_search = [];
    // const data = JSON.parse(fs.readFileSync('./model/data/test-data.json', 'utf-8'));
    //input = document.getElementById("search_jobs");
    //filter_input = input.value.toLowerCase();

    // new FileReader object
	let reader = new FileReader();

    // read file as text file
	reader.readAsText('./model/data/test-data.json');
    console.log(reader)

    data_treated = data.__collections__['registered-positions']
    Object.entries(data_treated).forEach(([key, value]) => {
    check_search = value.keywords.includes(filter_input.toLowerCase());
    position = new Position(key,
                            value.companyId,
                            value.companyName,
                            value.positionName,
                            value.positionLocation,
                            value.positionDutyHours,
                            value.positionSalary,
                            value.positionBenefits,
                            value.positionDescription,
                            value.companyLogoImage)
    
    if(check_search) {
        array_search.push(position);
        console.log(array_search);
    }
    else {
        console.log("Não foram encontradas vagas disponíveis para essa busca.");
    }
    });
  }

  searchJob();