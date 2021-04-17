import "../HomePageComponents/Card2.css";
function CardTransition(props) {

    const {handleClick,imgSrcFront, imgSrcBack, id, classCard, imgClass, shadow} = props;
    
    return (
        <main className = {classCard} style={{zIndex: `${id}`}}>
            <div className="cardInner" id={`${id}`}  onClick = {(event)=> handleClick(event)} >
            
                <div className={"cardFace cardFace--back" }>
                    <img  src={imgSrcFront} alt="BackPattern"   id={id} className={imgClass} />
                </div>

                <div className={"cardFace cardFace--front " + `${shadow}`} >
                    <img  src={imgSrcBack} alt="El Gallo" className={imgClass}/> 
                </div>
          
            </div>
        </main>

        
    );
  }
  export default CardTransition;