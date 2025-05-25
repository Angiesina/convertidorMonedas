import { useState } from 'react';
import './Insertar.css';
import fondo from '../assets/fondo.jpg';  // asumo que tienes la imagen fondo en assets

const Eliminar = () => {
  const [id, setId] = useState('');

  const eliminarMoneda = async () => {
    if (!id) {
      alert('Ingresa un ID');
      return;
    }
    try {
      const res = await fetch(`http://localhost:3000/eliminar/${id}`, {
        method: 'DELETE',
      });
      if (res.status === 404) {
        alert('Moneda no encontrada');
        return;
      }
      if (res.ok) {
        alert('Moneda eliminada');
        setId('');
      } else {
        alert('Error al eliminar moneda');
      }
    } catch (error) {
      alert('Error al eliminar moneda');
    }
  };

  return (
    <div className="insertar-fondo" style={{ backgroundImage: `url(${fondo})` }}>
      <div className="insertar-container">
        <h3>Eliminar Moneda</h3>

        <div className="insertar-group">
          <label htmlFor="id">ID:</label>
          <input
            id="id"
            name="id"
            type="text"
            placeholder="ID de la moneda a eliminar"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>

        <button className="insertar-button" onClick={eliminarMoneda}>Eliminar</button>
      </div>
    </div>
  );
};

export default Eliminar;
