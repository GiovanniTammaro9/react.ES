import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './app.css';
import Counter from './assets/Counter';
import Textinput from "./Textinput";
import LoginForm from "./LoginForm";
import Uncontrolledinput from "./Uncontrolledinput";
import ItemList from "./ItemList";
import Card from "./Card";
import TodoList from "./TodoList";
import TodoDetails from "./TodoDetails";
import { TodoProvider } from "./TodoContext";

// Componenti per le pagine
import Home from "./components/home";
import About from './components/About';
import Layout from './components/Layout';

function App() {
  const items = ["Mela", "Banana", "Pera", "Arancia"];

  return (
    <Router>
      <TodoProvider> {/* Avvolge tutte le pagine che possono usare useTodos() */}
        <Layout>
          {/* Barra di navigazione */}
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </nav>

          {/* Definizione delle rotte */}
          <Routes>
            <Route path="/" element={<Home items={items} />} />
            <Route path="/about" element={<About />} />
            <Route path="/todos/:id" element={<TodoDetails />} />
          </Routes>

          {/* Altri componenti sempre visibili */}
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
        </Layout>
      </TodoProvider>
    </Router>
  );
}

export default App;

