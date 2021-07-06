import "../GameCard/tabla.css";
function TablaPlayingCard(props) {

    const { handlePlayersTablaSelectionClick, parentDivHover, imageStyle, tablaImg, id } = props;

    return (
        <section className={parentDivHover}>
            <img className={imageStyle} src={tablaImg} alt={id} id={id} 
            onClick = {(event)=> handlePlayersTablaSelectionClick(event)}
            />
            <h2 style={{visibility: "hidden"}}>Click to Select {id}</h2>
        </section>

    );
}
export default TablaPlayingCard;