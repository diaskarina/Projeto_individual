-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

CREATE DATABASE conexaoSertaneja;

USE conexaoSertaneja;

CREATE TABLE usuario (
	id_usuario INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
    cpf CHAR(11),
	email VARCHAR(50),
	senha VARCHAR(50)
);

CREATE TABLE resultado_quiz (
	id_resultado INT PRIMARY KEY AUTO_INCREMENT,
	acertos INT,
	erros INT,
	porcentagem INT,
	acertos_historia INT,
	acertos_artistas INT,
	acertos_curiosidades INT,
	acertos_letras INT,
	fk_usuario INT,
	CONSTRAINT fkResultadoUsuario
	FOREIGN KEY (fk_usuario)
	REFERENCES usuario(id_usuario)
);
