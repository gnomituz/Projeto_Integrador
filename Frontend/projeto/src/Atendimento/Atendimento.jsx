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
            <p>CPF: {pacienteCPF}</p>
            <p>Nome: {pacienteNome}</p>
            <p>HospitalCNPJ: {hospitalCNPJ}</p>
            <p>Hospital: {hospitalNome}</p>
            <p>Endereço: {enderecoHospital}</p>
            <button onClick={deletarAtendimento}>Excluir Atendimento</button>
        </div>
  );
}

export default Atendimento;