// import "../GameCard/tabla.css";
import GameCardSelection from "../GameCard/GameCardSelection"
function tablaSelectionWindow(props) {

    const {CurrentPlayerForTablaSelection } = props;

    return (
        <section className="tablaSelectionWindow">
            <h3>
                Player: {CurrentPlayerForTablaSelection}
            </h3>
            <p>
                Choose Tabla from list below
            </p>
            <GameCardSelection />
        </section>

    );
}
export default tablaSelectionWindow;