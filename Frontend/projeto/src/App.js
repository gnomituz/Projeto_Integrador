import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PacienteList from './PacienteList/PacienteList.jsx';
import AtendimentoList from './AtendimentoList/AtendimentoList.jsx';
import Inicio from './Inicio/Inicio.jsx';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/api/projeto/paciente" element={<PacienteList />} />
        <Route path="/api/projeto/atendimento" element={<AtendimentoList />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;   
