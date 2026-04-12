import React from "react";
import './Paciente.css';


function Paciente({ cpf, nome}) {
  return (
    <div className="card">
        <p>CPF: {cpf}</p>
        <p>Nome: {nome}</p>
    </div>
  );
}

export default Paciente;