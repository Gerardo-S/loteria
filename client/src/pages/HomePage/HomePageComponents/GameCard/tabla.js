import "../GameCard/tabla.css";
function Tabla(props) {

    const {tablaImg, TablaName} = props;

    return (


        <main className="tablaContainer">

            
            <div className="tablaDiv">
                <img className="imageSize" src={tablaImg} alt={TablaName}/>
                

            </div>
            
        </main>




    );
}
export default Tabla;