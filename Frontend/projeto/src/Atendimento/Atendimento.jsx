import React from "react";
import './Atendimento.css';


function Atendimento({ pacienteCPF, pacienteNome,  hospitalCNPJ, hospitalNome, enderecoHospital }) {
  return (
        <div className="card">
            <p>CPF: {pacienteCPF}</p>
            <p>Nome: {pacienteNome}</p>
            <p>HospitalCNPJ: {hospitalCNPJ}</p>
            <p>Hospital: {hospitalNome}</p>
            <p>Endereço: {enderecoHospital}</p>
        </div>
  );
}

export default Atendimento;