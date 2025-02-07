import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './app.css';
import Counter from './assets/Counter';
import Textinput from "./Textinput";
import LoginForm from "./LoginForm";
import Uncontrolledinput from "./Uncontrolledinput";
import ItemList from "./ItemList";
import Card from "./Card";
import useFetch from "./hooks/useFetch";
import TodoList from "./TodoList";
import { TodoProvider } from "./TodoContext";

// Importiamo i nuovi componenti per le pagine Home e About
import Home from './components/home';
import About from './components/About';
import Layout from './components/Layout';


function App() {
  const items = ["Mela", "Banana", "Pera", "Arancia"];

  return (
    <Router>
      <div>
        {/* Barra di navigazione */}
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        {/* Definizione delle rotte */}
        <Routes>
        <Route element={<Layout />} />
          <Route path="/" element={<Home items={items} />} />
          <Route path="/about" element={<About />} />
        </Routes>

        {/* Altri componenti che rimangono invariati */}
        <TodoProvider>
          <Textinput />
          <Counter />
          <LoginForm />
          <Uncontrolledinput />
          <ItemList items={items} />
          <Card>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis illo
              labore provident sint eius ratione repudiandae ea in facere illum id,
              neque a blanditiis! Illo doloremque repudiandae totam reprehenderit neque.
            </p>
          </Card>
          <TodoList />
        </TodoProvider>
      </div>
    </Router>
  );
}

export default App;
