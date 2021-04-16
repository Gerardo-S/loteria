import "../HomePageComponents/Card2.css";
function Card2(props) {

    const {cardInner, handleClick,imgSrcFront, imgSrcBack, id, classCard, imgClass, shadow} = props;
    
    return (
        <main className = {classCard} style={{zIndex: `${id}`}}>
            <div className="cardInner" id={`${id}`}  onClick = {(event)=> handleClick(event)} >
            
                <div className={"cardFace cardFace--back " + `${shadow}` }>
                    <img  src={imgSrcFront} alt="BackPattern"   id={id} className={imgClass} />
                </div>

                <div className="cardFace cardFace--front" >
                    <img  src={imgSrcBack} alt="El Gallo" className={imgClass}/> 
                </div>
          
            </div>
        </main>

        
    );
  }
  export default Card2;