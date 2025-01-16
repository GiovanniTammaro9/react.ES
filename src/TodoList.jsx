import React from "react";
import useFetch from "./hooks/useFetch";

const API_URL = "https://jsonplaceholder.typicode.com/todos";

const TodoList = () => {
    const { data, loading, error } = useFetch(API_URL);

    if (loading) return <div>Caricamento in corso....</div>;

    if (error) return <div>Errore: {error}</div>;

    if (!data || data.lenght === 0) return <div>Nessun to-do trovato</div>

    return (
        <div>
            <h1>Lista di to-do</h1>
            <ul>
                {data.map((todo) => (
                    <li key={todo.id}>
                        <strong>{todo.title}</strong> {todo.completed ? `(Completato)` : `(incompleto)`}

                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;