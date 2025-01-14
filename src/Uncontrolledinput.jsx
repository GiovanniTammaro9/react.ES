import { useRef } from "react";

function Uncontrolledinput () {
    const inputRef = useRef();
    const handleShowValue = () => {
        alert(`Valore dell'input: ${inputRef.current.value}`);
    };
    return (
        <div>
            <h2>Uncontrolled input</h2>
            <input type="text" ref={inputRef} placeholder="scrivi" />
            <button onClick={handleShowValue}>Mostra il valore</button>
        </div>
    );
};

export default Uncontrolledinput