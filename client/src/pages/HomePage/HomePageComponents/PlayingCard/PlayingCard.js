import "../GameCard/tabla.css";
import "../PlayingCard/PlayingCardMechanics.css"
function PlayingCard(props) {

    const { imageStyle, tablaImg, id } = props;
    const totalNumgerofSquares = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    return (
        <section >

            <div className="gridBoardForMatchingImages">
                <div className="allSquares">
                    {totalNumgerofSquares.map((squares) => (
                        
                        <button className="square" key={squares}>
                            {squares}
                        </button>
                    )

                    )}

                </div>
            </div>
            <img className={imageStyle} src={tablaImg} alt={id} id={id}

            />
            <h2 style={{ visibility: "hidden" }}>Click to Select {id}</h2>
        </section>

    );
}
export default PlayingCard;