import { useEffect, useState } from "react";
import API from "../../util/API";
import "../HomePage/Home.css";
import "../HomePage/HomePageComponents/Deck.css"
import "../HomePage/HomePageComponents/Scene.css"
import CardTransition from "../HomePage/HomePageComponents/CardTransition"
import cardData from "../HomePage/card.json"
import { set } from "mongoose";
import Deck from "../HomePage/HomePageComponents/Deck"


function HomePage() {

  const [data, setData] = useState(null);
  const [cardTarget, setCardTarget] = useState("");
  const [cardTrans, setCardTrans] = useState(false);

  // will need to figure out how to set up next card after initial click
  const [nextCard, setNextCard] = useState([0]);

  const handleClick = (event) => {
    event.preventDefault();

    if (!cardTrans) {

      setCardTrans(true)
      setNextCard(+1)
    };

    setCardTarget(event.target.id)
    console.log(cardTarget)

  };


  // Effect below returns card to standard plane then uses javaScript animation to move its location
  useEffect(() => {

    if (!cardTarget) return;

    const card = document.getElementById(cardTarget);
    card.classList.add("is-clicked")

    console.log(cardTarget)
    console.log(card)
  }, [cardTrans]);


  useEffect(() => {

    API.getPublicExample().then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <div >
      <h1>Public Page</h1>
      <h3>Public API Data</h3>
      <p>{data && data.message}</p>
      <br />
      {/* developing game board */}
      <div>

        <div className="gameScene">

          {/* Prototype Deck below */}
          <div className="board">
            {/* if card has not been clicked  show deck*/}
            <div className="deckLocationIndicator">
              {(cardTrans) ?
                // once card from deck is clicked deck is removed from view and transition card is placed in view to parallel plane
                null
                :

                <Deck
                  classCard={"card"}
                  imgClass={"imgClass"}
                  handleClick={handleClick}
                  imgSrcFront={"https://i.pinimg.com/564x/83/fc/f9/83fcf94ca67d33d6d15278d81ab3e8c7.jpg"}
                  imgSrcBack={"https://i.pinimg.com/564x/83/fc/f9/83fcf94ca67d33d6d15278d81ab3e8c7.jpg"}
                  cardTrans={cardTrans}

                />


              }

            </div>

            {/* WIP */}
            <div className="cardsSet">
              Flipped card will go here
            </div>

          </div>
          {/* Below is for when card is clicked switching planes I need to figure out how to keep deck visible here */}
          {(!cardTrans) ?

            null

            :
            <CardTransition
              shadow={"shadow"}
              classCard={"cardTransition"}
              imgClass={"imgTransition"}
              handleClick={handleClick}
              imgSrcFront={"https://i.pinimg.com/564x/83/fc/f9/83fcf94ca67d33d6d15278d81ab3e8c7.jpg"}
              imgSrcBack={cardData[cardTarget - 1].image}
              id={cardTarget}

            />}


        </div>

      </div>

    </div>
  );
}
export default HomePage;
