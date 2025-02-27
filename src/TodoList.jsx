import React, { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useTodos } from "./TodoContext";

const TodoList = () => {
  const { todos, isLoading, error } = useTodos();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("query") || ""; // Ottiene il termine di ricerca dall'URL
  const [searchTerm, setSearchTerm] = useState(searchQuery);

  // Aggiorna l'URL quando cambia il searchTerm
  useEffect(() => {
    if (searchTerm) {
      setSearchParams({ query: searchTerm });
    } else {
      setSearchParams({});
    }
  }, [searchTerm, setSearchParams]);

  if (isLoading) return <p>Caricamento...</p>;
  if (error) return <p>Errore: {error}</p>;

  // Filtra i To-Do in base al termine di ricerca
  const filteredTodos = todos.filter(todo =>
    todo.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h2>Lista To-Do</h2>
      <input
        type="text"
        placeholder="Cerca un To-Do..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      
      <ul>
        {filteredTodos.map(todo => (
          <li key={todo.id}>
            <Link to={`/todos/${todo.id}`}>{todo.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;




