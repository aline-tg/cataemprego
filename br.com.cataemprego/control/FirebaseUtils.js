class FirebaseUtils {

    authentication() {
        var admin = require("firebase-admin");

        var serviceAccount = require("F:/projects/cataemprego/br.com.cataemprego/secrets/cataemprego-c4ddc-firebase-adminsdk-w9zd1-424a7c9fe7.json");
    
        admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: "https://cataemprego-c4ddc-default-rtdb.firebaseio.com",
        authDomain: "cataemprego-c4ddc.firebaseapp.com"
        });

        return admin
    }

    getCollection(collection){
        var admin = this.authentication();
        var db = admin.firestore();
        var data = db.collection(collection).get();

        return data;
    }

    createKeywords = (name) => {
        const arrName=[];
        let curName = "";
        name.split("").forEach((letter)=>{
            curName += letter;
            arrName.push(curName);
        });
        return arrName;
    };

    generateKeywords = (names) => {
        const [first,middle,last,sfx] = names;
        const suffix = sfx.length > 0 ? `$ {sfx}.` : "";
        const keywordNameWithoutMiddleName = this.createKeywords(`${first} ${last}${suffix}`);
        const keywordFullName = this.createKeywords(`${first} ${middle} ${last}${suffix}`);
        const keywordLastNameFirst = this.createKeywords(`${last}, ${first} ${middle}${suffix}`);

        const middleInitial = middle.length > 0 ? `${middle[0]}.` : "";
        const keywordFullNameMiddleInitial = this.createKeywords(`${first}${middleInitial} ${last}${suffix}`);
        const keywordLastNameFirstMiddleInitial = this.createKeywords(`${last}, ${first}${middleInitial}${suffix}`);

        return [
            ...new Set([
                "",
                ...keywordFullName,
                ...keywordLastNameFirst,
                ...keywordFullNameMiddleInitial,
                ...keywordLastNameFirstMiddleInitial,
                ...keywordNameWithoutMiddleName
            ])
        ];
    };

    async searchJobs() {
        var admin = this.authentication();

        var collection = admin.firestore().collection("registered-positions");

        var query = collection.where("positionName", "==", "Auxiliar de marketing");

        let querySnapshot = await query.get();
                if (querySnapshot.empty) {
                    console.log('no documents found');
                } else {
                    // do something with the data
                    console.log(JSON.stringify(querySnapshot.docs))
                }
    };

}

test = new FirebaseUtils;
search = test.searchJobs();