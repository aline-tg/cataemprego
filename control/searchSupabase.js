import Position from "../model/objects/Position.js"

export default async function searchJobs(search, 
                                         supabaseClient) {   

    var listJobsFound = [];
    const {data: all_jobs, error: error_reading} = await supabaseClient
    .from("registered-jobs")
    .select("*")
    .contains("position_keywords",[search])

    all_jobs.forEach(position_filtered => {
      console.log(position_filtered)
      var position = new Position(position_filtered.position_id,
                                  position_filtered.company_id,
                                  position_filtered.company_name,
                                  position_filtered.position_name,
                                  position_filtered.position_location,
                                  position_filtered.position_duty_hours,
                                  position_filtered.position_salary,
                                  position_filtered.position_benefits,
                                  position_filtered.position_description)
      listJobsFound.push(position)
    })
    return listJobsFound
  }