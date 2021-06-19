import { useEffect, useState } from "react";

function FormInputToAddPlayer(props) {
    const [newPlayerInputName, setNewPlayerInputName] = useState("");
    // const { contentSection, cardWidth, cardHeight } = props;

   const handleInputChange = (event)=>{
        setNewPlayerInputName(event.target.value)
    };
    const handleFormSubmit = (event) => {
        event.preventDefault();
        setNewPlayerInputName("");
        
    
      };
    return (
        <form className="addPlayerContainer">
            Add Player
            <input type="text" value={newPlayerInputName} onChange={handleInputChange}/>
            <button className="addPlayerBtn"  onClick={(e) => handleFormSubmit(e)}>
                Add Player
            </button>
        </form>
    );
}
export default FormInputToAddPlayer;