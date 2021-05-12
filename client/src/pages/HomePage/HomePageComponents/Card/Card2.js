import "../Card/Card2.css";
function Card2(props) {

    const {handleClick,imgSrcFront, imgSrcBack, id, classCard, imgClass} = props;
    
    return (
       

        <main className = {classCard + " posDeckCard"} style={{zIndex: `${id}`,right:`${id}`  + "px", bottom:`${id}`  + "px"}} id={"card" + id}>
            <div className="cardInner" id={`${id}`}  onClick = {(event)=> handleClick(event)} >
            
                <div className={"cardFace cardFace--back" }>
                    <img  src={imgSrcFront} alt="BackPattern"   id={id} className={imgClass} />
                </div>

                <div className={"cardFace cardFace--front "} >
                    <img  src={imgSrcBack} alt="El Gallo" className={imgClass}/> 
                </div>
          
            </div>
        </main>

       

        
    );
  }
  export default Card2;