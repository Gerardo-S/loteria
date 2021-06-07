import "../GameCard/tabla.css";
function Tabla(props) {

    const {tablaImg, TablaName} = props;

    return (
        
            <img className="imageSize" src={tablaImg} alt={TablaName}/>
        
    );
}
export default Tabla;