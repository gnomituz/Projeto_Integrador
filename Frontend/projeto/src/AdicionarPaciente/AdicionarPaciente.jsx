import React, { useState } from "react";
import './AdicionarPaciente.css';


function AdicionarPaciente() {
  const [CPF, setCPF] = useState("");
  const [Nome, setNome] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://localhost:44324/api/projeto/AdicionarPaciente", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        CPF: CPF,
        Nome: Nome,
      }),
    })
      .then((response) => {
        if (response.ok) {
          alert("Paciente cadastrado com sucesso!");
          setCPF("");
          setNome("");
        } else {
          alert("Erro ao cadastrar paciente.");
        }
      })
      .catch((error) => {
        console.log(error);
        alert("Erro na requisição.");
      });
  };

  return(
    <div className="form-container">
      <h2>Cadastrar Paciente</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>CPF do Paciente:</label><br />
          <input
            type="text"
            value={CPF}
            onChange={(e) => setCPF(e.target.value)}
            placeholder="Digite o CPF"
            required
          />
        </div>

        <div>
          <label>Nome do Paciente:</label><br />
          <input
            type="text"
            value={Nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Digite o nome"
            required
          />
        </div>

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default AdicionarPaciente;