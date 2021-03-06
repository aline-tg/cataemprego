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

export default async function searchJobs(search,
                                         messageToPrint, 
                                         supabaseClient) {   

    var listJobsFound = [];
    let message = messageToPrint;
    const {data: all_jobs, error: error_reading} = await supabaseClient
    .from("registered-jobs")
    .select("*")
    .contains("position_keywords",[search])

    console.log(all_jobs)

    // all_jobs.forEach(position_filtered => {
    //   // var position = new Position(position_filtered.id,
    //   //                             position_filtered.company_id,
    //   //                             position_filtered.company_name,
    //   //                             position_filtered.position_name,
    //   //                             position_filtered.position_location,
    //   //                             position_filtered.position_duty_hours,
    //   //                             position_filtered.position_salary,
    //   //                             position_filtered.position_benefits,
    //   //                             position_filtered.position_description)
    //   // listJobsFound.push(position)
    //   console.log(position_filtered)
    // })

    if (listJobsFound.length == 0)
      message = "N??o foram encontradas vagas para a posi????o buscada."
    else
      message = "Foram encontradas " + listJobsFound.length + "vagas."
}