import React from "react";
import './app.css'
import Counter from './assets/Counter';
import Textinput from "./Textinput";
import LoginForm from "./LoginForm";
import Uncontrolledinput from "./Uncontrolledinput";
import ItemList from "./ItemList";
import Card from "./Card";

function App() {
  const items = [`Mela`, `Banana`, `Pera`, `Arancia`];


  return (
    <div>
      <Textinput />
      <Counter />
      <LoginForm />
      <Uncontrolledinput />
      <ItemList items={items} />
      <Card>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis illo labore provident sint eius ratione repudiandae ea in facere illum id, neque a blanditiis! Illo doloremque repudiandae totam reprehenderit neque.</p>
      </Card>
    </div>
    
  );

  
}



export default App;