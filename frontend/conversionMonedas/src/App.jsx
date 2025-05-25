import Header from './componentes/Header';
import Inicio from './componentes/Inicio';
import Insertar from './componentes/Insertar';
import './componentes/Header.css';
import { Routes, Route } from 'react-router-dom';
import Actualizar from './componentes/Actualizar';
import Eliminar from './componentes/Eliminar';
import Consultar from './componentes/Consultar';
import Convertir from './componentes/Convertir';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/insertar" element={<Insertar />} />
        <Route path="/actualizar" element={<Actualizar/>} />
        <Route path="/consultar" element={<Consultar/>} />
        <Route path="/eliminar" element={<Eliminar/>} />
        <Route path="/convertir" element={<Convertir/>} />
      </Routes>
    </>
  );
}

export default App;
