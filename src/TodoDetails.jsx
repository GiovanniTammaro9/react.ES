import React from "react";
import { useParams } from "react-router-dom";
import { useTodos } from "./TodoContext";

const TodoDetail = () => {
  const { id } = useParams(); // Ottiene l'ID dall'URL
  const { todos } = useTodos(); // Ottiene la lista dei To-Do dal context

  // Cerca il to-do con l'ID specifico
  const todo = todos.find(todo => todo.id === parseInt(id));

  if (!todo) {
    return <p>To-Do non trovato!</p>;
  }

  return (
    <div>
      <h2>Dettagli To-Do</h2>
      <p><strong>ID:</strong> {todo.id}</p>
      <p><strong>Title:</strong> {todo.title}</p>
      <p><strong>Completato:</strong> {todo.completed ? "Sì" : "No"}</p>
    </div>
  );
};

export default TodoDetail;
