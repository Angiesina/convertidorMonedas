import { useState } from 'react';
import './Insertar.css';
import fondo from '../assets/fondo.jpg';

const Insertar = () => {
  const [origen, setOrigen] = useState('');
  const [destino, setDestino] = useState('');
  const [valor, setValor] = useState('');

  const insertarMoneda = async () => {
    if (!origen || !destino || !valor) {
      alert('Completa todos los campos');
      return;
    }
    try {
      const res = await fetch('http://localhost:3000/agregar/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ origen, destino, valor }),
      });
      const data = await res.json();
      alert(`Moneda insertada con ID ${data.id}`);
      setOrigen('');
      setDestino('');
      setValor('');
    } catch {
      alert('Error al insertar moneda');
    }
  };

  return (
    <div className="insertar-fondo" style={{ backgroundImage: `url(${fondo})` }}>
      <div className="insertar-container">
        <h3>Insertar Moneda</h3>

        <div className="insertar-group">
          <label htmlFor="origen">Origen:</label>
          <input
            id="origen"
            name="origen"
            type="text"
            placeholder="Ejemplo: USD"
            value={origen}
            onChange={(e) => setOrigen(e.target.value)}
          />
        </div>

        <div className="insertar-group">
          <label htmlFor="destino">Destino:</label>
          <input
            id="destino"
            name="destino"
            type="text"
            placeholder="Ejemplo: EUR"
            value={destino}
            onChange={(e) => setDestino(e.target.value)}
          />
        </div>

        <div className="insertar-group">
          <label htmlFor="valor">Valor:</label>
          <input
            id="valor"
            name="valor"
            type="number"
            placeholder="Ejemplo: 1.12"
            value={valor}
            onChange={(e) => setValor(e.target.value)}
          />
        </div>

        <button className="insertar-button" onClick={insertarMoneda}>Insertar</button>
      </div>
    </div>
  );
};

export default Insertar;
