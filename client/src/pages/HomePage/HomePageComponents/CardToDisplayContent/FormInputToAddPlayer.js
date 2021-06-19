import { useEffect, useState } from "react";

function FormInputToAddPlayer(props) {
    const { newPlayerInput, handleInputChangeNewPlayer, handleNewPlayerFormSubmit} = props;

    return (
        <form className="addPlayerContainer">
            Add Player
            <input type="text" value={newPlayerInput} onChange={handleInputChangeNewPlayer} />
            <button className="addPlayerBtn" onClick={(e) => handleNewPlayerFormSubmit(e)}>
                Add Player
            </button>
        </form>
    );
}
export default FormInputToAddPlayer;