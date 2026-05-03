import React from "react";
import './Hospital.css';

function Hospital({ hospitalNome, enderecoHospital, quantidadePacientes }) {
    return (
            <div className="card">
                <h2 className="card-titulo">{hospitalNome}</h2>

                <p className="card-info">
                    <strong>Endereço:</strong> {enderecoHospital}
                </p>

                <p className="card-info">
                    <strong>Pacientes:</strong> {quantidadePacientes}
                </p>

                <span className={`status ${quantidadePacientes > 2 ? "lotado" : "normal"}`}>
                    {quantidadePacientes > 2 ? "Lotado" : "Normal"}
                </span>
            </div>
    );
}

export default Hospital;