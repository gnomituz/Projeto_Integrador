import React, { useState } from "react";
import './AdicionarAtendimento.css';

function AdicionarAtendimento() {
  const [pacienteCPF, setPacienteCPF] = useState("");
  const [hospitalCNPJ, setHospitalCNPJ] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://localhost:44324/api/projeto/AdicionarAtendimento", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        pacienteCPF: pacienteCPF,
        hospitalCNPJ: hospitalCNPJ,
      }),
    })
      .then((response) => {
        if (response.ok) {
          alert("Atendimento cadastrado com sucesso!");
          setPacienteCPF("");
          setHospitalCNPJ("");
        } else {
          alert("Erro ao cadastrar atendimento.");
        }
      })
      .catch((error) => {
        console.log(error);
        alert("Erro na requisição.");
      });
  };

  return (
    <div className="form-container">
      <h2>Cadastrar Atendimento</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>CPF do Paciente:</label><br />
          <input
            type="text"
            value={pacienteCPF}
            onChange={(e) => setPacienteCPF(e.target.value)}
            placeholder="Digite o CPF"
            required
          />
        </div>

        <div>
          <label>CNPJ do Hospital:</label><br />
          <input
            type="text"
            value={hospitalCNPJ}
            onChange={(e) => setHospitalCNPJ(e.target.value)}
            placeholder="Digite o CNPJ"
            required
          />
        </div>

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default AdicionarAtendimento;