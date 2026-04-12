import React from "react";
import { useState, useEffect } from "react";
import './Hospital.css';
import { useNavigate } from 'react-router-dom';
import HospitalList from "../HospitalList/HospitalList";


function Hospital({ hospitalCNPJ, hospitalNome, enderecoHospital, quantidadePacientes }) {
    return (
        <div className="card">
            <h1>Hospital: {hospitalNome}</h1>
            <h1>Endereço: {enderecoHospital}</h1>
            <h1>Quantidade de Pacientes: {quantidadePacientes}</h1>
        </div>
    );

}

export default Hospital;