import "../TablaSelectionWindow/TablaSelectionWindow.css";
import GameCardSelection from "../GameCard/GameCardSelection"
function tablaSelectionWindow(props) {

    const {CurrentPlayerForTablaSelection, handlePlayersTablaSelectionClick} = props;

    return (
        <section className="tablaSelectionWindowHidden">
            <h3>
                Player: {CurrentPlayerForTablaSelection}
            </h3>
            <p>
                Choose Tabla from list below
            </p>
            <GameCardSelection 
            handlePlayersTablaSelectionClick= {handlePlayersTablaSelectionClick}
            />
        </section>

    );
}
export default tablaSelectionWindow;