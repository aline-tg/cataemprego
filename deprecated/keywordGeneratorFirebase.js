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

var admin = require("firebase-admin");
var serviceAccount = require("F:/projects/cataemprego/br.com.cataemprego/secrets/credentials.json");
  
let app =admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: "https://cataemprego-c4ddc-default-rtdb.firebaseio.com",
      authDomain: "cataemprego-c4ddc.firebaseapp.com"
      });
const db = app.firestore();
const jobs = [
    {"companyId": "test1", "companyName": "Alura", "positionDutyHours": "8hrs/dia", "positionLocation": "São Paulo", "positionName": "Auxiliar de Informática", "positionSalary": 1600},
    {"companyId": "test2", "companyName": "Rocketseat", "positionDutyHours": "8hrs/dia", "positionLocation": "São Paulo", "positionName": "Auxiliar de Informática", "positionSalary": 1500},
    {"companyId": "test3", "companyName": "Alura", "positionDutyHours": "Meio período", "positionLocation": "Home Office", "positionName": "Professor temporário", "positionSalary": 1200},
    {"companyId": "test4", "companyName": "WSD", "positionDutyHours": "8hrs/dia", "positionLocation": "São Paulo", "positionName": "Auxiliar de limpeza", "positionSalary": 1200},
    {"companyId": "test5", "companyName": "Casa da Chica", "positionDutyHours": "8hrs/dia", "positionLocation": "", "positionName": "Auxiliar de cozinha", "positionSalary": 1200},
    {"companyId": "test6", "companyName": "Só Concreto", "positionDutyHours": "Meio período", "positionLocation": "São Carlos", "positionName": "Servente de pedreiro", "positionSalary": null},
    {"companyId": "test7", "companyName": "Bradesco", "positionDutyHours": "8hrs/dia", "positionLocation": "Campinas", "positionName": "Auxiliar Administrativo", "positionSalary": null},
    {"companyId": "test8", "companyName": "Nubank", "positionDutyHours": "8hrs/dia", "positionLocation": "Belo Horizonte", "positionName": "Auxiliar Administrativo", "positionSalary": 1500},
    {"companyId": "test9", "companyName": "XP", "positionDutyHours": "", "positionLocation": "", "positionName": "Auxiliar Administrativo", "positionSalary": 1300},
    {"companyId": "test10", "companyName": "Vivaz", "positionDutyHours": "", "positionLocation": "Home Office", "positionName": "Auxiliar de Paisagismo", "positionSalary": null},
    {"companyId": "test11", "companyName": "MRV", "positionDutyHours": "Meio período", "positionLocation": "São Paulo", "positionName": "Auxiliar de Arquitetura", "positionSalary": 1200},
    {"companyId": "test12", "companyName": "Burger King", "positionDutyHours": "A combinar", "positionLocation": "Osasco", "positionName": "Auxiliar de cozinha", "positionSalary": 1200},
    {"companyId": "test13", "companyName": "Leroy Merlin", "positionDutyHours": "8hrs/dia", "positionLocation": "Guarulhos", "positionName": "Auxiliar de engenharia", "positionSalary": 1300},
    {"companyId": "test14", "companyName": "Magazine Luiza", "positionDutyHours": "8hrs/dia", "positionLocation": "", "positionName": "Vendedor", "positionSalary": 1500},
    {"companyId": "test15", "companyName": "Casas Bahia", "positionDutyHours": "8hrs/dia", "positionLocation": "Belo Horizonte", "positionName": "Vendedor", "positionSalary": 1400},
    {"companyId": "test16", "companyName": "Colombo", "positionDutyHours": "8hrs/dia", "positionLocation": "Valinhos", "positionName": "Vendedor", "positionSalary": 1400},
    {"companyId": "test17", "companyName": "Ponto Frio", "positionDutyHours": "A combinar", "positionLocation": "São José dos Campos", "positionName": "Vendedor", "positionSalary": 1500},
    {"companyId": "test18", "companyName": "Shoptime", "positionDutyHours": "8hrs/dia", "positionLocation": "Home Office", "positionName": "Assistente financeiro", "positionSalary": 1300},
    {"companyId": "test19", "companyName": "PUC Minas", "positionDutyHours": "8hrs/dia", "positionLocation": "Belo Horizonte", "positionName": "Assistente de educação", "positionSalary": 1200},
    {"companyId": "test20", "companyName": "Unisinos", "positionDutyHours": "8hrs/dia", "positionLocation": "Porto Alegre", "positionName": "Assistente de Marketing", "positionSalary": 1600},
];

jobs.forEach(
    position => {
        const companyName = position.companyName;
        const positionName = position.positionName;
        const positionLocation = position.positionLocation;
        position.keywords = generateKeywords([companyName, positionName,positionLocation]);
        db.collection("registered-positions").add(position);
    }
)