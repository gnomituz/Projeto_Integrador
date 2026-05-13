drop database ProjetoIntegrador;
CREATE DATABASE ProjetoIntegrador;
USE ProjetoIntegrador;

CREATE TABLE Hospital (
    CNPJ VARCHAR(14),
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
("11111111111111", "Santa'Ana", "Rua Vermelha, 03 - Santana de Parnaíba-SP"),
("22222222222222", "Cruzeiro do Sul", "Rua Verde, 01 - Santana de Parnaíba-SP"),
("33333333333333", "Vinicius de Moraes", "Rua Cinza, 20 - Curitiba-PR"),
("44444444444444", "São Lucas", "Av. Central, 45 - São Paulo-SP"),
("55555555555555", "Vida Nova", "Rua das Flores, 78 - Barueri-SP"),
("66666666666666", "Esperança", "Rua do Sol, 12 - Osasco-SP"),
("77777777777777", "Bom Jesus", "Av. Brasil, 101 - Campinas-SP"),
("88888888888888", "Monte Sinai", "Rua Verde, 56 - Belo Horizonte-MG"),
("99999999999999", "Santa Helena", "Av. Paulista, 900 - São Paulo-SP"),
("10101010101010", "Nossa Senhora", "Rua Azul, 33 - Rio de Janeiro-RJ");

insert into Paciente value 
("123456789012", "Ismael Lima"),
("111111111111", "Lucas Moraes"),
("222222222222", "Lisa Silva"),
("098765432109", "Maria Eduarda"),
("333333333333", "João Pedro"),
("444444444444", "Ana Clara"),
("555555555555", "Felipe Santos"),
("666666666666", "Camila Rocha"),
("777777777777", "Bruno Almeida"),
("888888888888", "Juliana Costa"),
("999999999999", "Rafael Souza"),
("101010101010", "Fernanda Lima"),
("121212121212", "Gustavo Henrique"),
("141414141414", "Bruno Henrique"),
("151515151515","Paulo Silva"),
("131313131313", "Patricia Gomes");

INSERT INTO Atendimento value
(default, "123456789012", "11111111111111"),
(default, "111111111111", "22222222222222"),
(default, "222222222222", "33333333333333"),
(default, "098765432109", "44444444444444"),
(default, "333333333333", "55555555555555"),
(default, "444444444444", "66666666666666"),
(default, "555555555555", "77777777777777"),
(default, "666666666666", "88888888888888"),
(default, "777777777777", "99999999999999"),
(default, "888888888888", "10101010101010"),
(default, "999999999999", "11111111111111"),
(default, "101010101010", "22222222222222"),
(default, "121212121212", "33333333333333"),
(default, "141414141414", "11111111111111"),
(default, "151515151515", "11111111111111"),
(default, "131313131313", "44444444444444");