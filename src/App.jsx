import React from "react";
import './app.css'
import Counter from './assets/Counter';
import Textinput from "./Textinput";
import LoginForm from "./LoginForm";
import Uncontrolledinput from "./Uncontrolledinput";

function App() {
  return (
    <div>
      <Textinput />
      <Counter />
      <LoginForm />
      <Uncontrolledinput />
    </div>
    
  );

  
}



export default App;