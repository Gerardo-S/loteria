import "../GameCard/tabla.css";
import "../PlayingCard/PlayingCardMechanics.css"
function PlayingCard(props) {

    const { visibility, imageStyle, tablaImg, id } = props;
    const totalNumberOfSquares = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    return (
        <section >

            <div className="gridBoardForMatchingImages" style={{visibility: visibility}}>
                <div className="allSquares">
                    {totalNumberOfSquares.map((squares) => ( 
                        <button className="square" key={squares}>
                            {squares}
                        </button>
                    )

                    )}

                </div>
            </div>
            <img className={imageStyle} src={tablaImg} alt={id} id={id}/>
        </section>

    );
}
export default PlayingCard;