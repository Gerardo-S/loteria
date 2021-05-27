import "../GameCard/GameCard.css";
import TablaData from "../../../HomePage/tabla.json"
import Tabla from "../GameCard/tabla"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faAngleUp, faAngleDown} from "@fortawesome/free-solid-svg-icons";

library.add(faAngleUp, faAngleDown);



function GameCard(props) {

    // console.log(TablaData)
    // const {handleClick,imgSrcFront, imgSrcBack, id, classCard, imgClass} = props;

    return (


        <main className="tablas">
            <div className="upArrow">

                <FontAwesomeIcon icon="angle-up" size="2x" />
            </div>
            <div className="individualTablas">
                {TablaData.map(tabla => (

                    <Tabla
                        tablaImg={tabla.image}
                        id={tabla.name}
                        key={tabla.id}

                    />

                ))}

            </div>
            <div className="downArrow" >
                <FontAwesomeIcon icon="angle-down" size="2x"/>

            </div>
        </main>




    );
}
export default GameCard;