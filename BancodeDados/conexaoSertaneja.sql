CREATE DATABASE conexaoSertaneja;
USE conexaoSertaneja;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
    cpf CHAR(11),
	email VARCHAR(50),
	senha VARCHAR(50)
);

select* from usuario;
