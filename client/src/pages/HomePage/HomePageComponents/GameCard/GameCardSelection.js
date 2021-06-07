import { useEffect, useState } from "react";
import "../GameCard/GameCardSelection.css";
import TablaData from "../../tabla.json"
import Tabla from "./tabla"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";

library.add(faAngleUp, faAngleDown);



function GameCardSelection(props) {

    const [tablaCounter, setTablaCounter] = useState(1);

    // const handleupArrowClick = (event) => {
    //     event.preventDefault();
    //     setTablaCounter(tablaCounter + 1)
    //     console.log(tablaCounter);

    // };

    // const handleDownArrowClick = (event) => {
    //     event.preventDefault();
    //     setTablaCounter(tablaCounter - 1)
    //     console.log(tablaCounter);
        
    // };

    useEffect(() => {
        // GameCard images
        const tablaSlide = document.getElementsByClassName("tablaSlide");
        const allTablaImages = tablaSlide[0].querySelectorAll(".imageSize");
        // Arrow buttons
        const upArrow = document.getElementById("up");
        const downArrow = document.getElementById("down");

        // Image location
        const verticalSlideDistance = allTablaImages[0].clientHeight;
        // console.log(verticalSlideDistance);
        // Moving tablas 
        // tablaSlide[0].style.transform= "translateY(" + (-verticalSlideDistance * tablaCounter) + "px";
    }, []);
    return (
        <main className="selectionContainer">
            <button className="upArrow" onClick={() =>  setTablaCounter(tablaCounter + 1)}>
                <FontAwesomeIcon icon="angle-up" size="2x" id="up"

                />
            </button>

            <div className="tablaContainer">
                <div className="tablaSlide">
                    {TablaData.map(tabla => (
                        <Tabla
                            tablaImg={tabla.image}
                            id={tabla.name}
                            key={tabla.id}
                        />
                    ))}
                </div>
            </div>
            <button className="downArrow" onClick={() => setTablaCounter(tablaCounter - 1)}>
                <FontAwesomeIcon icon="angle-down" size="2x" id="down"

                />
            </button>

        </main>
    );
}
export default GameCardSelection;