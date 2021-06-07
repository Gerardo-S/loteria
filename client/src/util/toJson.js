const fs = require("fs");
const cardNames = "El Gallo ,El Diablito,La Dama,El Catron ,El Paraguas ,La Sirena ,La Escalera,La Botella ,El Barril ,"
+ "El Arbol,El Melon ,El Valiente ,El Gorrito ,La Muerte ,La Pera ,La Bandera ,El Bandolon ,El Violoncello,La Garza ,El Pajaro ,"
+ "La Mano ,La Bota ,La Luna ,El Cotorro ,El Borracho ,El Negrito ,El Corazon ,La Sandia ,El Tambor ,El Camaron ,Las Jaras ,El Musico ,"
+ "La Arana ,El Soldado ,La Estrella,El Cazo ,El Mundo ,El Apache ,El Nopal ,El Alacran ,La Rosa ,La Calavera ,La Campana ,El Cantarito ,"
+ "El Venado ,El Sol ,La Corona ,La Chalupa ,El Pino ,El Pescado,La Palma,La Maceta ,El Arpa ,La Rana ";


const cardList = cardNames.split(",")

let cards = [];

for (let i = 0; i < cardList.length; i++) {
    
    
    cards[i]= { "id": (i + 1),
                "name" : cardList[i],
                "image":""
                };
};

const jsonCardString = JSON.stringify(cards);;

fs.writeFile("card.json", jsonCardString, err => {

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