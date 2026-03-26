import React from "react";
import './Paciente.css';


function Paciente({ cpf, nome, atendimento, hospitalID}) {
  return (
    <div className="card">
        <p>CPF: {cpf}</p>
        <p>Nome: {nome}</p>
        <p>Status: {atendimento ? "Em atendimento" : "Não está em atendimento"}</p>
        <p>HospitalID: {hospitalID}</p>
    </div>
  );
}

export default Paciente;