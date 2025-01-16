import React, { useEffect, useState } from "react";
import useFetch from "./hooks/useFetch";
import useFilteredTodos from "./hooks/useFilteredTodos";

const API_URL = "https://jsonplaceholder.typicode.com/todos";




const TodoList = () => {
    const { data, loading, error } = useFetch(API_URL);
    const [todos, setTodos] = useState([]);
    const [searchTerm, setSearchTerm] = useState(``);
    
    useEffect(() => {
        const fetchTodos = async () => {
            const response = await fetch("http://jsonplaceholder.typicode.com/todos");
            const data = await response.json();
            setTodos(data);
        };
        fetchTodos();
    }, []);
    const filteredTodos = useFilteredTodos(todos, searchTerm);

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
            <input type="text" placeholder="Searc todos..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
            <ul>
                {filteredTodos.map((todo) => (
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>
        </div>
        
    );
};

export default TodoList;