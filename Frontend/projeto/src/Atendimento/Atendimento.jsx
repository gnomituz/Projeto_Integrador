import React from "react";
import './Atendimento.css';


function Atendimento({ cpf, nome, atendimento, hospitalID}) {
  return (
        <div className="card">
            <p>CPF: {cpf}</p>
            <p>Nome: {nome}</p>
            <p>Status: {atendimento ? "Em atendimento" : "Não está em atendimento"}</p>
            <p>HospitalID: {hospitalID}</p>
        </div>
  );
}

export default Atendimento;