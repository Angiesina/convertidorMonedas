import { useState } from 'react';
import './Insertar.css';
import fondo from '../assets/fondo.jpg';

const Actualizar = () => {
  const [id, setId] = useState('');
  const [origen, setOrigen] = useState('');
  const [destino, setDestino] = useState('');
  const [valor, setValor] = useState('');

  const actualizarMoneda = async () => {
    if (!id || !origen || !destino || !valor) {
      alert('Completa todos los campos');
      return;
    }
    try {
      const res = await fetch(`http://localhost:3000/actualizar/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ origen, destino, valor }),
      });
      if (res.status === 404) {
        alert('Moneda no encontrada');
        return;
      }
      const data = await res.json();
      alert(`Moneda actualizada: ${JSON.stringify(data)}`);
      setId('');
      setOrigen('');
      setDestino('');
      setValor('');
    } catch {
      alert('Error al actualizar moneda');
    }
  };

  return (
    <div className="insertar-fondo" style={{ backgroundImage: `url(${fondo})` }}>
      <div className="insertar-container">
        <h3>Actualizar Moneda</h3>

        <div className="insertar-group">
          <label htmlFor="id">ID:</label>
          <input id="id" name="id" type="text" placeholder="ID de la moneda" value={id} onChange={(e) => setId(e.target.value)}/>
        </div>

        <div className="insertar-group">
          <label htmlFor="origen">Origen:</label>
          <input id="origen" name="origen" type="text" placeholder="Ejemplo: MXN" value={origen} onChange={(e) => setOrigen(e.target.value)}/>
        </div>
        <div className="insertar-group"> 
          <label htmlFor="destino">Destino:</label>
          <input id="destino" name="destino" type="text" placeholder="Ejemplo: USD" value={destino} onChange={(e) => setDestino(e.target.value)}/>
        </div>

        <div className="insertar-group">
          <label htmlFor="valor">Valor:</label>
          <input id="valor" name="valor" type="number" placeholder="Ejemplo: 1.12" value={valor} onChange={(e) => setValor(e.target.value)}/>
        </div>

        <button className="insertar-button" onClick={actualizarMoneda}>Actualizar</button>
      </div>
    </div>
  );
};

export default Actualizar;
