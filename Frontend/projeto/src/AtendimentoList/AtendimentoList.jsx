import React from "react";
import { useState, useEffect } from "react";
import Atendimento   from "../Atendimento/Atendimento.jsx";

function AtendimentoList() {
  const [atendimentos, setAtendimentos] = useState([]);

  useEffect(() => {
    fetch("https://localhost:44324/api/projeto/atendimento", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => setAtendimentos(json))
      .catch((error) => {
        console.log(error);
        alert("Erro ao buscar os pacientes em atendimento.");
      });
  }, []);

  return (
    <div>
      {atendimentos.map((atendimento) => (
        <Atendimento
          key={atendimento.id}
          id={atendimento.id}
          pacienteCPF={atendimento.pacienteCPF}
          pacienteNome={atendimento.pacienteNome}
          hospitalCNPJ={atendimento.hospitalCNPJ}
          hospitalNome={atendimento.hospitalNome}
          enderecoHospital={atendimento.enderecoHospital}
        />
      ))}
    </div>
  );
}

export default AtendimentoList;