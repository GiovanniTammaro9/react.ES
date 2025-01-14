import React from "react";
import './app.css'
import Counter from './assets/Counter';
import Textinput from "./Textinput";
import LoginForm from "./LoginForm";
import Uncontrolledinput from "./Uncontrolledinput";
import ItemList from "./ItemList";

function App() {
  const items = [`Mela`, `Banana`, `Pera`, `Arancia`];


  return (
    <div>
      <Textinput />
      <Counter />
      <LoginForm />
      <Uncontrolledinput />
      <ItemList items={items} />
    </div>
    
  );

  
}



export default App;