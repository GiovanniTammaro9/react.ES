import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";  // Importa useDispatch e useSelector
import { setTodos, setLoading, setError, completeTodo } from "./redux/todoSlice";  // Importa l'azione completeTodo

const TodoList = () => {
  const { todos, isLoading, error } = useSelector((state) => state.todos);  // Usa useSelector per leggere lo stato
  const dispatch = useDispatch();  // Usa useDispatch per inviare azioni

  useEffect(() => {
    const fetchTodos = async () => {
      dispatch(setLoading(true));
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        if (!response.ok) {
          throw new Error("Errore nel caricamento dei to-do");
        }
        const data = await response.json();
        dispatch(setTodos(data));  // Memorizza i To-Do nello store Redux
      } catch (error) {
        dispatch(setError(error.message));
      } finally {
        dispatch(setLoading(false));
      }
    };

    fetchTodos();
  }, [dispatch]);

  // Funzione per completare un To-Do
  const handleComplete = (id) => {
    dispatch(completeTodo(id));  // Usa l'azione completeTodo
  };

  if (isLoading) return <p>Caricamento...</p>;
  if (error) return <p>Errore: {error}</p>;

  return (
    <div>
      <h2>Lista To-Do</h2>
      <ul>
        {todos.map(todo => (
          <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            <Link to={`/todos/${todo.id}`}>{todo.title}</Link>
            <button onClick={() => handleComplete(todo.id)}>
              {todo.completed ? "Completato" : "Completa"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;






