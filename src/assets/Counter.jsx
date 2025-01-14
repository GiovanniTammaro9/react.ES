import React, {useEffect, useState} from "react";
function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };
    const decrement = () => setCount(count - 1);
    const reset = () => setCount(0);

    useEffect(() => {
        document.title = `Contatore: ${count}`;
    })
    return (
        <div>
            <h1>Contatore: {count}</h1>
            <p>count: {count}</p>
            <button onClick={increment}>Incremento</button>
            <button onClick={decrement}>decrementa</button>
            <button onClick={reset}>resetta</button>
        </div>
    );
}

export default Counter;