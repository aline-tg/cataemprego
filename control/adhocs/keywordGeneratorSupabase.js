import supabaseAuthentication from "../SupabaseUtils.js"; 

const createKeywords = name => {
    const arrName = [];
    let curName = '';
    name.split('').forEach(letter => {
      curName += letter.toLowerCase();
      arrName.push(curName);
    });
    return arrName;
  }
  
  
const generateKeywords = names => {
  const [companyName, positionName, positionLocation] = names;
  const keywordNamePosition = createKeywords(`${positionName}`);
  const keywordFull = createKeywords(`${positionName} ${companyName} ${positionLocation}`);
  const keywordLocationFirst = createKeywords(`${positionLocation} ${positionName} ${companyName}`);
  const keywordCompanyFirst = createKeywords(` ${companyName} ${positionName} ${positionLocation}`);
  
  const middleInitial = positionName.length > 0 ? ` ${positionName[0]}.` : '';
  const keywordFullMiddleInitial = createKeywords(`${companyName} ${positionLocation}`);
  const keywordLocationMiddleInitial = createKeywords(`${positionLocation} ${middleInitial}`);
  return [
    ...new Set([
      '',
      ...keywordNamePosition,
      ...keywordFull,
      ...keywordLocationFirst,
      ...keywordCompanyFirst,
      ...keywordFullMiddleInitial,
      ...keywordLocationMiddleInitial
    ])
  ];
}

const supabaseUrl = 'https://heyuuynqxqobgiotfgaj.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhleXV1eW5xeHFvYmdpb3RmZ2FqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTcyNDcyMTUsImV4cCI6MTk3MjgyMzIxNX0.Y7Q_scMNfYmZXmeJWbZI4OUj7ic7GKCDao_j5TP4-Ts'
const table_name = "registered-jobs"

const _supabase = supabaseAuthentication(supabaseUrl, supabaseKey)

const {data: all_jobs, error: error_reading} = await _supabase
.from(table_name)
.select("*")

var list = []
var positionKeywords = []
all_jobs.forEach(position => {
             const companyName = position.company_name;
             const positionName = position.position_name;
             const positionLocation = position.position_ocation;
             positionKeywords = generateKeywords([companyName, positionName,positionLocation]);
             list.push(Object.freeze([position.position_id,positionKeywords]))
          })

var result = list.map(function(e) {
  return {position_id: e[0], position_keywords: e[1]}
})

//console.log(_supabase)
// to use the upsert funcion the column needs to exist
const {data: insert_jobs, error: error2_insertion} = await _supabase
.from(table_name)
.upsert(result)

console.log(error2_insertion)
console.log(insert_jobs)