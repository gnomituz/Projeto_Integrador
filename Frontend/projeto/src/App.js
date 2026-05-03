import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PacienteList from './PacienteList/PacienteList.jsx';
import AtendimentoList from './AtendimentoList/AtendimentoList.jsx';
import Inicio from './Inicio/Inicio.jsx';
import AdicionarAtendimento from './AdicionarAtendimento/AdicionarAtendimento.jsx';
import AdicionarPaciente from './AdicionarPaciente/AdicionarPaciente.jsx';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/api/projeto/paciente" element={<PacienteList />} />
        <Route path="/api/projeto/atendimento" element={<AtendimentoList />} />
        <Route path="/api/projeto/AdicionarAtendimento" element={<AdicionarAtendimento />} />
        <Route path="/api/projeto/AdicionarPaciente" element={<AdicionarPaciente />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;   
