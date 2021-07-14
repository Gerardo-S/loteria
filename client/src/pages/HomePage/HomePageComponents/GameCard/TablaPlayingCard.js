import "../GameCard/tabla.css";

function TablaPlayingCard(props) {

    const { handlePlayersTablaSelectionClick, parentDivHover, imageStyle, tablaImg, id, handleSelectionConfirmation, handleResetTablaSelection} = props;

    return (
        <section className={parentDivHover}>
            <img className={imageStyle} src={tablaImg} alt={id} id={id} 
            onClick = {(event)=> handlePlayersTablaSelectionClick(event)}
            />
            <div className="SelectionConfirmation" style={{visibility: "hidden"}}>
            <h2 >You have selected {id}</h2>
            <button id="confirmTablaSelection"
            onClick = {(event)=> handleSelectionConfirmation(event)}
            >Confirm</button>
            <button id="resetTablaSelection"
            onClick = {(event)=> handleResetTablaSelection(event)}
            >Re-Select</button>
            </div>
        </section>

    );
}
export default TablaPlayingCard;