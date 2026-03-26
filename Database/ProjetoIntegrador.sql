drop database ProjetoIntegrador;
CREATE DATABASE ProjetoIntegrador;
USE ProjetoIntegrador;

CREATE TABLE Hospital (
    ID INT NOT NULL AUTO_INCREMENT,
    Nome VARCHAR(100),
    Endereco VARCHAR(200),
    primary key(ID)
);

CREATE TABLE Paciente (
    CPF varchar(12) not null,
    Nome VARCHAR(100),
    Atendimento bool default false,
    HospitalID INT,
    primary key(CPF),
    FOREIGN KEY (HospitalID) REFERENCES Hospital(ID)
);

insert into Hospital value 
(default, "Hospital Cruzeiro do Sul", "Rua x, 01 - Santana de Parnaíba-SP");

insert into Paciente value 
(123456789012, "Ismael", 1, 1),
(098765432109, "Maria", default, 1);

SELECT * FROM Paciente WHERE Atendimento = 1;
