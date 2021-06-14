import { useEffect, useState } from "react";
import API from "../../util/API";
import "../HomePage/Home.css";
import "../HomePage/HomePageComponents/Scene.css"
import Deck from "../HomePage/HomePageComponents/Deck"
import CardToDisplayContent from "./HomePageComponents/CardToDisplayContent/CardToDisplayContent.js";
import GameCardSeclection from "./HomePageComponents/GameCard/GameCardSelection"
import FormInputToAddPlayer from "./HomePageComponents/CardToDisplayContent/FormInputToAddPlayer";
import TablaPlayingCard from "./HomePageComponents/GameCard/TablaPlayingCard";
// this function is causing a delay which allow for flipping effect
function delayFlip(card) {
  setTimeout(function () {
    card.classList.add("is-clicked");
  }, 50);

};

// sets drawn cards into a new deck pile
function setCard(card, cardFront, img1, img2, cardCounter, setCardCounter) {
  setTimeout(function () {

    // console.log(card)

    // keep track of card counter here for positioning purposes 
    setCardCounter(cardCounter + 1);

    // create new parent element where set card will be placed
    const parentSetDiv = document.getElementsByClassName("deckOfSetCards");

    // remove shadow
    cardFront.classList.remove("shadow");
    card.classList.remove("is-clicked");
    card.classList.remove("cardInner");

    // Need to fix this on Heroku, card does not set properly
    card.classList.add("cardInnerSet", "flipped", "cardSet");

    // creating new deck of set cards
    card.style.zIndex = cardCounter;
    card.style.bottom = cardCounter + "px";
    // adjust image display
    img1.className = "imgSet";
    img2.className = "imgSet";
    parentSetDiv[0].appendChild(card);



  }, 2500);

};



function HomePage() {

  const [data, setData] = useState(null);
  const [cardTarget, setCardTarget] = useState("");
  const [cardTrans, setCardTrans] = useState("");
  const [cardCounter, setCardCounter] = useState(0);
  // const formInputToAddPlayer = <form className="addPlayerContainer">
  //   Add Player
  //   <input></input>
  //   <button className="addPlayerBtn">Add Player</button>
  // </form>;
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
    setCard(card, cardFront, img1, img2, cardCounter, setCardCounter)

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
      <div className="HomeGameScreen">

        <div className="playersContainer">
          <CardToDisplayContent
            cardWidth={"200px"}
            cardHeight={"100px"}
            contentSection={<FormInputToAddPlayer />}
          />
          <CardToDisplayContent
            // contentSection = {formInputToAddPlayer}
            cardWidth={"350px"}
            // Height will change once tabla is selected
            cardHeight={"650px"}
            contentSection={
              <div>
                <h2>
                  Player: NameGoesHere <br></br>
                </h2>
                <p>
                  Select Tabla
                </p>
                <p>
                  Change Tabla
                </p>

                <h3>
                  Your Tabla: tabla.id
                </h3>

                {/* hard coded for now */}

                <TablaPlayingCard
                  imageStyle={"selectedTablaForPlay"}
                  tablaImg={"https://i.pinimg.com/originals/14/d6/e2/14d6e21f1ea517873fd5ce6db41b4343.jpg"}
                  id={"TABLA 1"}
                  key={"TABLA1"}
                />

              </div>}
          />

          <CardToDisplayContent
            // contentSection = {formInputToAddPlayer}
            cardWidth={"350px"}
            // Height will change once tabla is selected
            cardHeight={"100px"}
            contentSection={
              <div>
                <h2>
                  Player: AdditionalPlayer <br></br>
                </h2>
                <p>
                  Select Tabla
                </p>
                <p>
                  Change Tabla
                </p>

                <h3>
                  Your Tabla: tabla.id
                </h3>

                {/* hard coded for now */}

                {/* <TablaPlayingCard
                  imageStyle={"selectedTablaForPlay"}
                  tablaImg={"https://i.pinimg.com/originals/14/d6/e2/14d6e21f1ea517873fd5ce6db41b4343.jpg"}
                  id={"TABLA 1"}
                  key={"TABLA1"}
                /> */}

              </div>}
          />
          {/* <section className="smallCardContent">
            <form className="addPlayerContainer">
              Add Player
              <input></input>
              <button className="addPlayerBtn">Add Player</button>
            </form>
          </section> */}
        </div>
        <section>
          <h3>
            Player: NewPlayer
          </h3>
          <p>
            Choose Tabla from list below
          </p>
          <h4>
            Tabla : "id"
          </h4>
          <GameCardSeclection />
        </section>

        <div >
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
              {/* Deck of Set Cards */}
              <div className="cardsSetLocation">
                <div className="deckOfSetCards">
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
export default HomePage;
