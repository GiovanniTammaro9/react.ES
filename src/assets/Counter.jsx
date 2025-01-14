import React, {useState} from "react";
function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };
    const decrement = () => setCount(count - 1);
    const reset = () => setCount(0);
    return (
        <div>
            <p>count: {count}</p>
            <button onClick={increment}>Incremento</button>
            <button onClick={decrement}>decrementa</button>
            <button onClick={reset}>resetta</button>
        </div>
    );
}

export default Counter;