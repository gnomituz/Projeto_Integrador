import React from "react";
import { useState, useEffect } from "react";
import Atendimento   from "../Atendimento/Atendimento.jsx";

function AtendimentoList() {
  const [pacientes, setPacientes] = useState([]);

  useEffect(() => {
    fetch("https://localhost:44324/api/paciente/atendimento", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => setPacientes(json))
      .catch((error) => {
        console.log(error);
        alert("Erro ao buscar os pacientes em atendimento.");
      });
  }, []);

  return (
    <div>
      {pacientes.map((paciente) => (
        <Atendimento
          key={paciente.cpf}
          cpf={paciente.cpf}
          nome={paciente.nome}
          atendimento={paciente.atendimento}
          hospitalID={paciente.hospitalID}
        />
      ))}
    </div>
  );
}

export default AtendimentoList;