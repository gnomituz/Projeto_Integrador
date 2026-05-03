import React from "react";
import './HospitalPage.css';

function HospitalPage(){
    return(
        <div className="container">
            <header>
                <h1 className="titulo">Lotações de Hospitais</h1>
                <p className="subtitulo">
                    Consulte em tempo real a ocupação dos hospitais da sua região.
                </p>
            </header>
        </div>
    );
}

export default HospitalPage;