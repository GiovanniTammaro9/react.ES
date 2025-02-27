// src/redux/todoSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  isLoading: false,
  error: null,
};

const todoSlice = createSlice({
  name: "todos",  // Nome dello slice (questo nome è un identificativo per il tuo slice)
  initialState,
  reducers: {
    setTodos: (state, action) => {
      state.todos = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    completeTodo: (state, action) => {
      const todo = state.todos.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = true;
      }
    },
  },
});

// Esportiamo le azioni
export const { setTodos, setLoading, setError, addTodo, removeTodo, toggleTodo, completeTodo } = todoSlice.actions;

// Esportiamo il reducer con il nome corretto
export default todoSlice.reducer;


