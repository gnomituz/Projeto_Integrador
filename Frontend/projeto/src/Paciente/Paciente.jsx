import React from "react";
import './Paciente.css';


function Paciente({ cpf, nome, hospitalID}) {
  return (
    <div className="card">
        <p>CPF: {cpf}</p>
        <p>Nome: {nome}</p>
        <p>HospitalID: {hospitalID}</p>
    </div>
  );
}

export default Paciente;