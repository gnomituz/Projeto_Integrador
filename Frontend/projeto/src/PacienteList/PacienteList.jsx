import React from "react";
import { useState, useEffect } from "react";
import Paciente from "../Paciente/Paciente";

function PacienteList() {
  const [pacientes, setPacientes] = useState([]);

  useEffect(() => {
    fetch("https://localhost:44324/api/paciente", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => setPacientes(json))
      .catch((error) => {
        console.log(error);
        alert("Erro ao buscar os pacientes.");
      });
  }, []);

  return (
    <div>
      {pacientes.map((paciente) => (
        <Paciente
          cpf={paciente.cpf}
          nome={paciente.nome}
          hospitalID={paciente.hospitalID}
        />
      ))}
    </div>
  );
}

export default PacienteList;