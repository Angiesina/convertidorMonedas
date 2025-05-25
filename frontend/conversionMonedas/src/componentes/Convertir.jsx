import { useState } from 'react';
import './Insertar.css';
import fondo from '../assets/fondo.jpg';

const Convertir = () => {
  const [origen, setOrigen] = useState('');
  const [destino, setDestino] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [resultado, setResultado] = useState(null);
  const [error, setError] = useState('');

const convertirMoneda = async () => {
  if (!origen || !destino || !cantidad) {
    alert('Completa todos los campos');
    return;
  }
  if (Numero(cantidad) <= 0) {
    alert('Cantidad debe ser un número positivo');
    return;
  }

  try {
    const res = await fetch('http://localhost:3000/convertir/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        origen: origen.toUpperCase(),
        destino: destino.toUpperCase(),
        cantidad: Numero(cantidad),
      }),
    });

    if (!res.ok) throw new Error('Error al obtener la tasa');

    const data = await res.json();

    setResultado(data.resultado);
    setError('');
  } catch (error) {
    alert('Error al convertir moneda');
    setResultado(null);
    setError(error.message);
  }
};


  return (
    <div className="insertar-fondo" style={{ backgroundImage: `url(${fondo})` }}>
      <div className="insertar-container">
        <h3>Convertir Moneda</h3>

        <div className="insertar-group">
          <label htmlFor="origen">Origen:</label>
          <input id="origen" name="origen" type="text" placeholder="Ejemplo: USD" value={origen} onChange={(e) => setOrigen(e.target.value)}/>
        </div>
        <div className="insertar-group">
          <label htmlFor="destino">Destino:</label>
          <input id="destino" name="destino" type="text" placeholder="Ejemplo: MXN" value={destino} onChange={(e) => setDestino(e.target.value)}/>
        </div>

        <div className="insertar-group">
          <label htmlFor="cantidad">Cantidad:</label>
          <input id="cantidad" name="cantidad" type="number" placeholder="Ejemplo: 100" value={cantidad} onChange={(e) => setCantidad(e.target.value)}/>
        </div>

        <button className="insertar-button" onClick={convertirMoneda}> Convertir</button>

        {resultado !== null && (
          <p className="insertar-resultado"> La cantidad de {cantidad} {origen.toUpperCase()} equivale a {resultado} {destino.toUpperCase()}</p>
        )}

        {error && <p className="insertar-error">{error}</p>}
      </div>
    </div>
  );
};

export default Convertir;
