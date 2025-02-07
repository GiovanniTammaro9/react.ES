import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      {/* Barra di navigazione */}
      <nav>
        <ul className="nav-list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>

      {/* Contenuto principale delle pagine */}
      <div className="main-content">
        <Outlet /> {/* Qui verrà renderizzato il contenuto specifico della pagina */}
      </div>
    </div>
  );
};

export default Layout;
