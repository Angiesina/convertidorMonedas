import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logomonedas.png'; 
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-contenido">
        <Link to="/" className="logo-link">
          <img src={logo} alt="Logo" className="logo" />
        </Link>

        <nav className="navbar">
          <ul className="nav-opciones">
            <li><Link to="/" className="nav-link">Inicio</Link></li>
            <li><Link to="/insertar" className="nav-link">Insertar monedas</Link></li>
            <li><Link to="/actualizar" className="nav-link">Actualizar monedas</Link></li>
            <li><Link to="/consultar" className="nav-link">Consultar monedas</Link></li>
            <li><Link to="/eliminar" className="nav-link">Eliminar monedas</Link></li>
            <li><Link to="/convertir" className="nav-link">Convertir monedas</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;