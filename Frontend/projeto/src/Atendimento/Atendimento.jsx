import React from "react";
import './Atendimento.css';


function Atendimento({ id, pacienteCPF, pacienteNome,  hospitalCNPJ, hospitalNome, enderecoHospital }) {

  const deletarAtendimento = () => {
    fetch(`https://localhost:44324/api/projeto/${id}`, {
      method: "DELETE",
    })
    .then((response) => {
      if (response.ok) {
        alert("Atendimento excluído com sucesso.");
        window.location.reload();
      } else { 
        alert("Erro ao excluir o atendimento.");
      }
    })
    .catch((error) => {
      console.log(error);
      alert("Erro na requisição.");
    });
  };

  return (
        <div className="card">
            <p><span>CPF: {pacienteCPF}</span></p>
            <p><span>Nome: {pacienteNome}</span></p>
            <p><span>HospitalCNPJ: {hospitalCNPJ}</span></p>
            <p><span>Hospital: {hospitalNome}</span></p>
            <p><span>Endereço: {enderecoHospital}</span></p>
            <button onClick={deletarAtendimento}>Excluir Atendimento</button>
        </div>
  );
}

export default Atendimento;