import { useEffect, useState } from "react";
import API from "../../util/API";
import "../HomePage/Home.css";
import "../HomePage/HomePageComponents/Scene.css"


import Deck from "../HomePage/HomePageComponents/Deck"

// this function is causing a delay which allow for flipping effect
function delayFlip(card) {
  setTimeout(function () {
    { card.classList.add("is-clicked"); }
  }, 50);



};

// sets drawn cards into a new deck pile
function setCard(card, cardFront,  img1, img2, cardCounter,setCardCounter) {
  setTimeout(function () {
    {
      // console.log(card)
      
      // keep track of card counter here for positioning purposes 
      setCardCounter(cardCounter + 1);
      
      // create new parent element where set card will be placed
      const parentSetDiv = document.getElementsByClassName("deckOfSetCards");
      

      // remove shadow
      cardFront.classList.remove("shadow");
      card.classList.remove("is-clicked");
      card.classList.remove("cardInner");
      card.classList.add("cardInnerSet","flipped","cardSet");
      
      // creating new deck of set cards
      card.style.zIndex = cardCounter;
      card.style.bottom = cardCounter + "px";
      // adjust image display
      img1.className = "imgSet";
      img2.className = "imgSet";
      parentSetDiv[0].appendChild(card);

    }

  }, 2500);

};

function HomePage() {

  const [data, setData] = useState(null);
  const [cardTarget, setCardTarget] = useState("");
  const [cardTrans, setCardTrans] = useState("");
  const [cardCounter, setCardCounter] = useState(0);


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
    img1.className = "imgTransition";
    img2.className = "imgTransition";


    // Lastly add is-clicked to initiate transition and flip
    delayFlip(card);

    setCardTrans(false)

    // set card after a short delay
    setCard(card, cardFront,  img1, img2,cardCounter,setCardCounter)

  }, [cardTarget]);

  // useEffect below to grab user info
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
            <div className="cardsSetLocation">
              <div className="deckOfSetCards">


                
              </div>
            </div>

          </div>


        </div>

      </div>

    </div>
  );
}
export default HomePage;
