// import Card2 from "./Card/Card2"
import DrawingCard from "./DrawingCard/DrawingCard"
import cardData from "../../HomePage/card.json"
function Deck({ handleClick}) {

    return (

        <div className="deckOfCards">

            {cardData.map(card => (
                <DrawingCard
                    classCard={"card"}
                    imgClass={"imgClass"}
                    handleClick={handleClick}
                    imgSrcBack={card.image}
                    imgSrcFront={"https://i.pinimg.com/564x/83/fc/f9/83fcf94ca67d33d6d15278d81ab3e8c7.jpg"}
                    id={card.id}
                    key={card.id}
                />
            ))}



        </div>

    );
}
export default Deck;