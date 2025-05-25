import { useEffect, useState } from 'react';
import fondo from '../assets/fondo.jpg';
import './Consultar.css'; // donde tienes los estilos

const Consultar = () => {
  const [monedas, setMonedas] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/monedas/')
      .then(res => res.json())
      .then(data => setMonedas(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="consultar-fondo" style={{ backgroundImage: `url(${fondo})` }}>
      <div className="consultar-container">
        <h3>Listado de Monedas</h3>
        <table className="consultar-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Origen</th>
              <th>Destino</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            {monedas.length > 0 ? (
              monedas.map(({ id, origen, destino, valor }) => (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{origen}</td>
                  <td>{destino}</td>
                  <td>{valor}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">No hay monedas registradas</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Consultar;
