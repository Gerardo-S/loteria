const fs = require("fs");
const tablaNames = "TABLA 1, TABLA 2, TABLA 3, TABLA 4, TABLA 5, TABLA 6, TABLA 7, TABLA 8, TABLA 9, TABLA 10";



const tablaList = tablaNames.split(",")

let tablas = [];

for (let i = 0; i < tablaList.length; i++) {
    
    
    tablas[i]= { "id": "TABLA" + (i + 1),
                "name" : tablaList[i],
                "image":""
                };
};

const jsonCardString = JSON.stringify(tablas);;

fs.writeFile("tabla.json", jsonCardString, err => {

    // if an error occurs, log it
    if (err) {
      // stop execution if there is an error
      console.log(err)
      return console.log(err);
    }
  
    // finished writing to file
    console.log("Success!");
  });
// console.log(cards);