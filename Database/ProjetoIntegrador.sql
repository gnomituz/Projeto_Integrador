drop database ProjetoIntegrador;
CREATE DATABASE ProjetoIntegrador;
USE ProjetoIntegrador;

CREATE TABLE Hospital (
    CNPJ INT NOT NULL AUTO_INCREMENT,
    Nome VARCHAR(100),
    Endereco VARCHAR(200),
    primary key(CNPJ)
);

CREATE TABLE Paciente (
    CPF varchar(12) not null,
    Nome VARCHAR(100),
    primary key(CPF)
);

CREATE TABLE Atendimento (
	ID INT NOT NULL auto_increment,
    PacienteCPF VARCHAR(12) NOT NULL,
    HospitalCNPJ VARCHAR(14) NOT NULL,
    primary key(ID),
	foreign key (HospitalCNPJ) references Hospital(CNPJ),
    foreign key (PacienteCPF) references Paciente(CPF)
);

insert into Hospital value 
(11111111111111, "Hospital SantaAna", "Rua y, 03 - Santana de Parnaíba-SP"),
(22222222222222, "Hospital Cruzeiro do Sul", "Rua x, 01 - Santana de Parnaíba-SP");

insert into Paciente value 
(123456789012, "Ismael"),
(111111111111, "Lucas"),
(222222222222, "Lisa"),
(098765432109, "Maria");

INSERT INTO Atendimento value
(default, 098765432109, 11111111111111),
(default, 111111111111, 22222222222222), 
(default, 123456789012, 11111111111111); 