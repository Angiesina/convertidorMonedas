import React from 'react';
import './Inicio.css';
import fondo from '../assets/fondo.jpg';
import foto1 from '../assets/foto1.jpg';
import foto2 from '../assets/foto2.jpg';
import foto3 from '../assets/foto3.jpg';
import foto4 from '../assets/foto4.jpg';
import foto5 from '../assets/foto5.jpg';

function Inicio() {
  return (
    <div className="inicio-fondo" style={{ backgroundImage: `url(${fondo})` }}>
      <div className="inicio-contenido">
        <h1>Convertidor de Monedas</h1>
        <h2>Rápido, preciso y actualizado</h2>
        <p>Consulta y administra tus monedas fácilmente. </p>
        
        <div className="galeria-blanca">
          <h3>Monedas populares</h3>
          <div className="galeria">
            <img src={foto1} alt="1" />
            <img src={foto2} alt="2" />
            <img src={foto3} alt="3" />
            <img src={foto4} alt="4" />
            <img src={foto5} alt="5" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inicio;

