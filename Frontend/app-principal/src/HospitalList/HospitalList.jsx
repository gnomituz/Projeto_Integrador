import { hasSelectionSupport } from "@testing-library/user-event/dist/utils";
import React from "react";
import { useState, useEffect } from "react";
import Hospital from "../Hospital/Hospital";


function HospitalList() {
    const [hospitais, setHospitais] = useState([]); 
    useEffect(() => {
        fetch("https://localhost:44324/api/projeto/hospital", {
            method: "GET",
        })
            .then((response) => response.json())
            .then((json) => setHospitais(json))
            .catch((error) => {
                console.log(error);
                alert("Erro ao buscar os hospitais.");
            });
    }, []);


    return (
        <div>
            {hospitais.map((hospital) => (
                <Hospital
                    key={hospital.hospitalCNPJ}
                    hospitalCNPJ={hospital.hospitalCNPJ}
                    hospitalNome={hospital.hospitalNome}
                    enderecoHospital={hospital.enderecoHospital}
                    quantidadePacientes={hospital.quantidadePacientes}
                />
            ))}
        </div>
    );  
}

export default HospitalList; 