import { useEffect, useState } from "react";
import API from "../../util/API";
import "../HomePage/Home.css";
import "../HomePage/HomePageComponents/Deck.css"
import "../HomePage/HomePageComponents/Scene.css"
// import Card from "../HomePage/HomePageComponents/Card"
import Card2 from "../HomePage/HomePageComponents/Card2"
import cardData from "../HomePage/card.json"
import { set } from "mongoose";


function HomePage() {

  const [data, setData] = useState(null);
  const [cardFlip, setCardFlip] = useState(false);
  // const [cardInner, setCardInner] = useState("cardInner");
  const [cardTarget, setCardTarget] = useState("");
  const [cardTrans, setCardTrans] = useState(false);
  // const front = "cardFace cardFace--front";
  // const back = "cardFace cardFace--back";
  // const cardInfo = ["El Gallo", "El Diablito", "La Dama", "El Catrin", "El Paraguas"]


  const handleClick = (event) => {
    event.preventDefault();

    if (!cardFlip) {
      const card = document.getElementById(cardTarget);
      
      setCardFlip(true)
      setCardTrans(true)
    };

 
    // !cardFlip ? setCardFlip(true) : setCardFlip(false)
    // if(event.target.id){

    // }
    // console.log(JSON.stringify(card[0].id))
    // card[0].id


    setCardTarget(event.target.id)


  };


  // Effect below returns card to standard plane then uses javaScript animation to move its location
  useEffect(() => {

    if (!cardTrans) return;
    const card = document.getElementById(cardTarget);
    card.classList.add("is-clicked")

    console.log(cardTarget)


  }, [cardTrans]);


// Effect below will flip card once its reached center of game board
  useEffect(() => {

    if (!cardTarget) return;
    const card = document.getElementById(cardTarget);

    // card.classList.add("is-flipped")

    console.log(cardTarget)

    console.log(cardTarget)


  }, [cardTarget]);

  // Flip a card effect original
  // useEffect(() => {
  //   if (!cardTarget) return;
  //   const card = document.getElementById(cardTarget);
  //   card.classList.add("is-flipped")
  //   // if(cardTarget !== card[0].id) return;
  //   // if(cardTarget){
  //   //   const card = document.querySelector(".cardInner");
  //   //   card.classList.add("is-flipped")
  //   //   // setCardInner("cardInner is-flipped")
  //   // }
  //   // !cardFlip ? setCardInner("cardInner"): setCardInner("cardInner is-flipped")
  //   // if(cardTarget ){


  //   // }

  //   console.log(cardTarget)


  // }, [cardTarget]);

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
            {/* if card has not been clicked  */}
            <div className="deckLocationIndicator">
              {(cardFlip) ? null :

                <Card2
                  // cardInner = {cardInner}
                  classCard={"card"}
                  imgClass={"imgClass"}
                  handleClick={handleClick}
                  imgSrcFront={"https://i.pinimg.com/564x/83/fc/f9/83fcf94ca67d33d6d15278d81ab3e8c7.jpg"}
                  imgSrcBack={"https://i.pinimg.com/564x/1b/ea/a0/1beaa04b5b87fedb860a85192f183e26.jpg"}
                  id={1}

                />

              }



            </div>
            <div className="cardsSet">
              Flipped card will go here
            </div>

          </div>
          {/* Test below/ create a container after clicking card */}
          {/* <div className="cardFlipContainer">

          </div> */}
          {/* card has been clicked */}
          {(!cardFlip) ? null :
            <Card2
              // cardInner = {cardInner}
              shadow = {"shadow"}
              classCard={"cardTransition"}
              imgClass={"imgTransition"}
              handleClick={handleClick}
              imgSrcFront={"https://i.pinimg.com/564x/83/fc/f9/83fcf94ca67d33d6d15278d81ab3e8c7.jpg"}
              imgSrcBack={"https://i.pinimg.com/564x/1b/ea/a0/1beaa04b5b87fedb860a85192f183e26.jpg"}
              id={1}

            />}




        </div>

      </div>

      {/* Prototype deck below */}
      <div className="scene2">
        <div className="box2">
          <div className="box__face2 box__face--front2">front</div>
          <div className="box__face2 box__face--back2">back</div>
          <div className="box__face2 box__face--right2">right</div>
          <div className="box__face2 box__face--left2">left</div>
          <div className="box__face2 box__face--top2">top</div>
          <div className="box__face2 box__face--bottom2">bottom</div>
        </div>
      </div>
      <div className="scene">
        <div className="box">
          <div className="box__face box__face--front">front</div>
          <div className="box__face box__face--back">back</div>
          <div className="box__face box__face--right">right</div>
          <div className="box__face box__face--left">left</div>
          <div className="box__face box__face--top">top</div>
          <div className="box__face box__face--bottom">bottom</div>
        </div>
      </div>


      {/* <div className="deck">
        <div className="allCards">

          {cardData.map(card => (
            <Card
              // cardInner = {cardInner}
              handleClick={handleClick}
              imgSrcFront={card.image}
              imgSrcBack={"https://i.pinimg.com/564x/83/fc/f9/83fcf94ca67d33d6d15278d81ab3e8c7.jpg"}
              id={card.id}
              key={card.id}
            />
          ))}

        </div>

      </div> */}
      {/* <div className="container">

      <Card
      
      // cardInner = {cardInner}
      handleClick = {handleClick}
      imgSrcFront = {"https://i.pinimg.com/564x/83/fc/f9/83fcf94ca67d33d6d15278d81ab3e8c7.jpg"}
      imgSrcBack = {"https://i.pinimg.com/564x/1b/ea/a0/1beaa04b5b87fedb860a85192f183e26.jpg"}
      id = {1}
      
      />

      </div> */}



    </div>
  );
}
export default HomePage;
