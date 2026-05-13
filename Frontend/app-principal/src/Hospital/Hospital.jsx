import React from "react";
import './Hospital.css';

function Hospital({ hospitalNome, enderecoHospital, quantidadePacientes }) {
    return (
            <div className="card">
                <h2 className="card-titulo"> Hospital {hospitalNome}</h2>

                <p className="card-info">
                    <strong>Endereço:</strong> {enderecoHospital}
                </p>

                <p className="card-info">
                    <strong>Pacientes:</strong> {quantidadePacientes}/5
                </p>

                <span className={`status ${quantidadePacientes > 4 ? "lotado" : "normal"}`}>
                    {quantidadePacientes > 4 ? "Lotado" : "Normal"}
                </span>
            </div>
    );
}

export default Hospital;