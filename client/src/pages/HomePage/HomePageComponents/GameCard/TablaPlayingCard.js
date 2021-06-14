import "../GameCard/tabla.css";
function TablaPlayingCard(props) {

    const {imageStyle, tablaImg, TablaName} = props;

    return (
        
            <img className={imageStyle} src={tablaImg} alt={TablaName}/>
        
    );
}
export default TablaPlayingCard;