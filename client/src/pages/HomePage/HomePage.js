import { useEffect, useState } from "react";
import API from "../../util/API";
import "../HomePage/Home.css";
import "../HomePage/HomePageComponents/Scene.css"
import Deck from "../HomePage/HomePageComponents/Deck"
import CardToDisplayContent from "./HomePageComponents/CardToDisplayContent/CardToDisplayContent.js";
// import GameCardSelection from "./HomePageComponents/GameCard/GameCardSelection"
import FormInputToAddPlayer from "./HomePageComponents/CardToDisplayContent/FormInputToAddPlayer";
import TablaPlayingCard from "./HomePageComponents/GameCard/TablaPlayingCard";
import TablaSelectionWindow from "./HomePageComponents/TablaSelectionWindow/TablaSelectionWindow";

// this function is causing a delay which allows for flipping effect
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

  // States Start ============================================================================
  const [data, setData] = useState(null);
  const [cardTarget, setCardTarget] = useState("");
  const [cardTrans, setCardTrans] = useState("");
  const [cardCounter, setCardCounter] = useState(0);
  const [initialCardHeightForPlayer, setInitialCardHeightForPlayer] = useState(100);
  const initialPlayerList = [
    {
      id: "a",
      name: "John Doe",
      tablaId: 0
    },

    {
      id: "b",
      name: "HelloWorld",
      tablaId: 0
    }

  ]
  const [playerList, setPlayerList] = useState(initialPlayerList);
  const [newPlayerInput, setNewPlayerInput] = useState("");
  const [playerCounter, setPlayerCounter] = useState(0);
  const [playerData, setPlayerData] = useState({
    id: playerCounter,
    name: newPlayerInput,
    tablaId: 0
  });
  const [CurrentPlayerForTablaSelection, setCurrentPlayerForTablaSelection] = useState("");
  const [CurrentPlayerForTablaSelectionId, setCurrentPlayerForTablaSelectionId] = useState("")
  const [tablaSelectionWindowVisibility, setTablaSelectionWindowVisibility] = useState(false);

  // States End ===============================================================================

  // Click Events Start=====================================================================
  // handleCardClick
  const handleClick = (event) => {
    event.preventDefault();
    setCardTarget(event.target.id)
  };

  const handleInputChangeNewPlayer = (event) => {
    setNewPlayerInput(event.target.value)
    setPlayerData({
      id: playerCounter,
      name: event.target.value,
      tablaId: 0
    })

  };

  const handleNewPlayerFormSubmit = (event) => {
    event.preventDefault();
    setPlayerCounter(playerCounter + 1);
    const addedPlayerList = playerList.concat(playerData);
    setPlayerList(addedPlayerList);
    setNewPlayerInput("")
  };

  const handleSelectTabla = (event) => {
    event.preventDefault();
    let target = event.target.attributes[1];
    let playerToSelectTabla = target.value;
    let playerTargetId = event.target.offsetParent.firstChild.id;


    setCurrentPlayerForTablaSelection(playerToSelectTabla);
    setCurrentPlayerForTablaSelectionId(playerTargetId);
    setTablaSelectionWindowVisibility(true);

  };

  const handlePlayersTablaSelectionClick = (event) => {
    event.preventDefault();
    alert("clicked")
    

  };

  

  // Click Events End ================================================================================

  // useEffects Start =================================================================================
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

  // Effect for TablaSelectionWindow
  useEffect(() => {

    if (!tablaSelectionWindowVisibility) return;
    const tablaSelectionDiv = document.getElementsByClassName("tablaSelectionWindowHidden");
    const accessTablaSelectionWindowContent = tablaSelectionDiv[0];
    if (tablaSelectionWindowVisibility) {

      accessTablaSelectionWindowContent.classList.remove("tablaSelectionWindowHidden");
      accessTablaSelectionWindowContent.classList.add("tablaSelectionWindowVisible")
      accessTablaSelectionWindowContent.style.transition = "transform: opacity 0.5s 0.5s"
    }

  }, [CurrentPlayerForTablaSelection]);

  // useEffect below to grab user info
  useEffect(() => {

    API.getPublicExample().then((response) => {
      setData(response.data);
    });
  }, []);




  // useEffects End =============================================================================================

  // Pseudo code for Tabla Selection
  // When user selects tabla grey out selection
  // set initialCardHeightForPlayer to 650px
  // copy selection and append to player card



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
            contentSection={<FormInputToAddPlayer
              playerList={playerList}
              newPlayerInput={newPlayerInput}
              handleInputChangeNewPlayer={handleInputChangeNewPlayer}
              handleNewPlayerFormSubmit={handleNewPlayerFormSubmit}
            />}
          />

          {playerList.map((players) => (
            <CardToDisplayContent
              key={"P" + players.id}
              cardWidth={"350px"}
              cardHeight={initialCardHeightForPlayer + "px"}
              contentSection={

                <div key={players.id} id={"Player " + playerCounter}>
                  <h2 >
                    Player: {players.name}<br></br>
                  </h2>
                  <section className="editTablaSelection">
                    <p id="selectTabla"
                      data={players.name}
                      onClick={(e) => handleSelectTabla(e)}
                    >
                      Select Tabla
                    </p>
                    <p id="editTabla">
                      Edit Tabla
                    </p>
                  </section>

                  <h3>
                    Your Tabla:{players.tablaId}
                  </h3>
                  <TablaPlayingCard
                    imageStyle={"PlayersTabla"}
                    tablaImg={null}
                    id={null}
                    key={null}
                  />
                </div>
              }
            />
          ))}

          <CardToDisplayContent
            cardWidth={"350px"}

            cardHeight={"650px"}
            contentSection={
              <div>
                <h2>
                  Player: NameGoesHere <br></br>
                </h2>
                <section className="editTablaSelection">
                  <p id="selectTabla">
                    Select Tabla
                  </p>
                  <p id="editTabla">
                    Edit Tabla
                  </p>
                </section>

                <h3>
                  Your Tabla: tabla.id
                </h3>

                {/* hard coded for now */}
                <TablaPlayingCard
                  parentDivHover = {"playersTabla"}
                  imageStyle={"selectedTablaForPlay"}
                  tablaImg={"https://i.pinimg.com/originals/14/d6/e2/14d6e21f1ea517873fd5ce6db41b4343.jpg"}
                  id={"TABLA 1"}
                  key={"TABLA1"}
                />

              </div>}
          />

        </div>

        <TablaSelectionWindow
          CurrentPlayerForTablaSelection={CurrentPlayerForTablaSelection}
          handlePlayersTablaSelectionClick={handlePlayersTablaSelectionClick}

        />
        {/* Game Board where the magic happens */}
        <div >
          <div className="gameScene">
            <div className="board">
              {/* if card has not been clicked  show deck*/}
              <div className="deckLocationIndicator">
                {/* Deck of cards */}
                <Deck
                  classCard={"card"}
                  imgClass={"imgClass"}
                  // Card Click
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
