import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";  // Importa lo slice che creiamo nel passo successivo

export const store = configureStore({
  reducer: {
    todos: todoReducer,  // Aggiungi lo slice dei todos allo store
  },
});

export default store;
