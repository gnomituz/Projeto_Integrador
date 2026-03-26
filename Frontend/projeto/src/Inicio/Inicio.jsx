import React from "react";
import { useState, useEffect } from "react";
import './Inicio.css';
import { useNavigate } from 'react-router-dom';



function Inicio() {
    const navigate = useNavigate();

    return (
        <div className="body">
            <h1 className="titulo">Sistema do hospital X</h1>
            <p className="subtitulo">Use o menu para navegar entre as diferentes seções do sistema.</p>

            
            <button className="botao" onClick={() => navigate('/api/paciente')}>Lista de Pacientes</button>
            <button className="botao" onClick={() => navigate('/api/paciente/atendimento')}>Pacientes em atendimento</button>
        </div>
    );
}

export default Inicio;