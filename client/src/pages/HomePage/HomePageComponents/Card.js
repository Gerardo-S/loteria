import "../HomePageComponents/Card.css";
function Card(props) {

    const {cardInner, handleClick,imgSrcFront, imgSrcBack, id,} = props;
    
    return (
        
        <main className = "card" style={{zIndex: `${id}`}}>
            <div className="cardInner" id={`${id}`}  onClick = {(event)=> handleClick(event)} >
            
                <div className="cardFace cardFace--back" >
                    <img src={imgSrcFront} alt="BackPattern"   className="pp" />
                </div>

                <div className="cardFace cardFace--front" >
                    <img  src={imgSrcBack} alt="El Gallo" id={id}/> 
                </div>
          
            </div>
        </main>
    );
  }
  export default Card;