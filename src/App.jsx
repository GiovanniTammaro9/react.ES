import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";  // Importa il provider di Redux
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
import { store } from "./redux/store";  // Importa lo store Redux

// Componenti per le pagine
import Home from "./components/home";
import About from './components/About';
import Layout from './components/Layout';

function App() {
  const items = ["Mela", "Banana", "Pera", "Arancia"];

  return (
    <Provider store={store}>  {/* Avvolgi la tua app con il Provider di Redux */}
      <Router>
        <TodoProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<Home items={items} />} />
              <Route path="/about" element={<About />} />
              <Route path="/todos/:id" element={<TodoDetails />} />
            </Routes>

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
    </Provider>
  );
}

export default App;

