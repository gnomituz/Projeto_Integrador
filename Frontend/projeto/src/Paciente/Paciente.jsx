import React from "react";
import './Paciente.css';


function Paciente({ cpf, nome}) {
  return (
    <div className="card">
        <p><span>CPF: </span>{cpf}</p>
        <p><span>Nome: </span>{nome}</p>
    </div>
  );
}

export default Paciente;