import React, {useState} from "react";

function Textinput() {
    const [inputValue, setInputValue] = useState("");

    const handleChange = (event) => {
        setInputValue(event.target.value);
    }
    return (
        <div>
            <h2>inserisci del testo:</h2>
            <input type="text" value={inputValue} onChange={handleChange} />
            <p>hai scritto: {inputValue}</p>
        </div>
    );
};

export default Textinput;

