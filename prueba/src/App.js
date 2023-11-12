import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import PrimeraVentana from './primeraVentana';
import SegundaVentana from './segundaVentana';
import TerceraVentana from './terceraVentana';


function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={<PrimeraVentana />} />
        <Route path="/primera-ventana" element={<PrimeraVentana />} />
        <Route path="/segunda-ventana" element={<SegundaVentana />} />
        <Route path="/tercera-ventana" element={<TerceraVentana />} />
      </Routes>
    </>

  );
}

export default App;
