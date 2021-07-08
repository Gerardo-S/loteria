import { useEffect, useState } from "react";
import "../GameCard/GameCardSelection.css";
import TablaData from "../../tabla.json"
import TablaPlayingCard from "./TablaPlayingCard.js"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";

library.add(faAngleUp, faAngleDown);



function GameCardSelection(props) {
    const { handlePlayersTablaSelectionClick } = props;
    const [tablaCounter, setTablaCounter] = useState(0);

    useEffect(() => {
        // GameCard images
        const tablaSlide = document.getElementsByClassName("tablaSlide");
        const allTablaImages = tablaSlide[0].querySelectorAll(".imageSizeForSelection");
        // Image location
        const verticalSlideDistance = allTablaImages[0].clientHeight;
        // Moving tablas

        // Stopping transition effect when tabla selection ends
        if (tablaCounter < 0) {
            setTablaCounter(9)

        } else if (tablaCounter >= 10) {
            setTablaCounter(0)
        }

        if (tablaCounter === 9 || tablaCounter === 0) {
            tablaSlide[0].style.transition = "none"
        } else {

            tablaSlide[0].style.transition = "transform 0.4s ease-in-out"
        };

        tablaSlide[0].style.transform = "translateY(" + (-verticalSlideDistance * tablaCounter) + "px";

    }, [tablaCounter]);
    return (
        <main className="selectionContainer">
            <button className="upArrow" onClick={() => setTablaCounter(tablaCounter + 1)}>
                <FontAwesomeIcon icon="angle-up" size="2x" id="up"

                />
            </button>

            <div className="tablaContainer">
                <div className="tablaSlide">
                    {TablaData.map(tabla => (
                        <TablaPlayingCard
                            handlePlayersTablaSelectionClick={handlePlayersTablaSelectionClick}
                            parentDivHover={"UerSelectionPrompt"}
                            imageStyle={"imageSizeForSelection"}
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