import { useEffect, useState } from "react";
import API from "../../util/API";
import "../HomePage/Home.css";
import "../HomePage/HomePageComponents/Deck.css"
import "../HomePage/HomePageComponents/Scene.css"

import { set } from "mongoose";
import Deck from "../HomePage/HomePageComponents/Deck"

// this function is causing a delay which allow for flipping effect
function delayFlip(card) {
 setTimeout(function(){
  {card.classList.add("is-clicked");}
 }, 50);
};

function HomePage() {

  const [data, setData] = useState(null);
  const [cardTarget, setCardTarget] = useState("");
  const [cardTrans, setCardTrans] = useState("");

  
// Set current target to id value
  const handleClick = (event) => {
    event.preventDefault();
    setCardTarget(event.target.id)

  };


  // Effect below returns card to standard plane then uses javaScript animation to move its location
  useEffect(() => {
    
    if (!cardTarget) return;
  
    const card = document.getElementById(cardTarget);
    const gameScene = document.getElementsByClassName("gameScene");
    const cardId = document.getElementById(cardTarget);
    // select card which has been switched to parallel plane "cardTransition"
    const cardTransition = document.getElementById("card" + cardTarget);
    const cardFront = cardId.childNodes[1];
    // add class for card sizing 
    cardTransition.className = "cardTransition";
    
    // remove old deck inline style positions
    cardTransition.removeAttribute("style");
    
    // append cardContent to CardTransition plane
    cardTransition.appendChild(cardId);
    
    // add shadow to cardFront
    cardFront.classList.add("shadow");
    
    
    // append cardTransition to gameScene
    gameScene[0].appendChild(cardTransition);
    
    // adjust image size
    const img1 = cardId.childNodes[0].firstChild;
    const img2 = cardId.childNodes[1].firstChild;
    img1.className= "imgTransition";
    img2.className= "imgTransition";
    
    
    // Lastly add is-clicked to initiate transition and flip
    delayFlip(card);
  
    setCardTrans(false)
  }, [cardTarget]);
  

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

          <div className="board">
            {/* if card has not been clicked  show deck*/}
            <div className="deckLocationIndicator">
              {/* Deck of cards */}
              <Deck
                classCard={"card"}
                imgClass={"imgClass"}
                handleClick={handleClick}
                imgSrcFront={"https://i.pinimg.com/564x/83/fc/f9/83fcf94ca67d33d6d15278d81ab3e8c7.jpg"}
                imgSrcBack={"https://i.pinimg.com/564x/83/fc/f9/83fcf94ca67d33d6d15278d81ab3e8c7.jpg"}
                cardTrans={cardTrans}

              />

            </div>

            {/* WIP */}
            <div className="cardsSet">
              Flipped card will go here
            </div>

          </div>
         

        </div>

      </div>

    </div>
  );
}
export default HomePage;
