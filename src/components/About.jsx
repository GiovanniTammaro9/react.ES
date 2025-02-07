import React from 'react';
import { useNavigate } from 'react-router-dom';  // Importa useNavigate

const About = () => {
  // Inizializza useNavigate
  const navigate = useNavigate();

  // Funzione che verrà chiamata quando l'utente clicca il pulsante
  const goToHome = () => {
    navigate('/');  // Reindirizza alla pagina Home
  };

  return (
    <div>
      <h1>About Page</h1>
      <p>
        Questa è la pagina About. Clicca il pulsante per tornare alla Home.
      </p>
      
      {/* Pulsante che attiva la navigazione alla pagina Home */}
      <button onClick={goToHome}>Vai alla Home</button>
    </div>
  );
};

export default About;
