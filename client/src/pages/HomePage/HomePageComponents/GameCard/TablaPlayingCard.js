import "../GameCard/tabla.css";
function TablaPlayingCard(props) {

    const { imageStyle, tablaImg, id } = props;

    return (
        <section className="UerSelectionPrompt">
            <img className={imageStyle} src={tablaImg} alt={id} id={id} />
            <h2 >Click to Select {id}</h2>
        </section>

    );
}
export default TablaPlayingCard;