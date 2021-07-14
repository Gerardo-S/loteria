import "../TablaSelectionWindow/TablaSelectionWindow.css";
import GameCardSelection from "../GameCard/GameCardSelection"
function tablaSelectionWindow(props) {

    const {currentPlayerForTablaSelection, handlePlayersTablaSelectionClick, handleSelectionConfirmation, handleResetTablaSelection} = props;

    return (
        <section className="tablaSelectionWindowHidden">
            <h3>
                Player: {currentPlayerForTablaSelection}
            </h3>
            <p>
                Choose Tabla from list below
            </p>
            <GameCardSelection 
            handlePlayersTablaSelectionClick= {handlePlayersTablaSelectionClick}
            handleSelectionConfirmation = {handleSelectionConfirmation}
            handleResetTablaSelection = {handleResetTablaSelection}

            />
        </section>

    );
}
export default tablaSelectionWindow;