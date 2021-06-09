import "../GameCard/tabla.css";
function TablaPlayingCard(props) {

    const {tablaImg, TablaName} = props;

    return (
        
            <img className="imageSize" src={tablaImg} alt={TablaName}/>
        
    );
}
export default TablaPlayingCard;