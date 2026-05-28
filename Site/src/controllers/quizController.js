var quizModel = require("../models/quizModel");

function salvarResultado(req, res) {

    var acertos = req.body.acertosServer;
    var erros = req.body.errosServer;
    var porcentagem = req.body.porcentagemServer;
    var idUsuario = req.body.idUsuarioServer;
    var acertosHistoria = req.body.acertosHistoriaServer;
    var acertosArtistas = req.body.acertosArtistasServer;
    var acertosCuriosidades = req.body.acertosCuriosidadesServer;
    var acertosLetras = req.body.acertosLetrasServer;

    quizModel.salvarResultado(acertos, erros, porcentagem, idUsuario,
        acertosHistoria, acertosArtistas, acertosCuriosidades, acertosLetras).then(function (resultado) {
            res.status(201).json({ message: "Resultado salvo com sucesso!", resultado });
        })
        .catch(function (erro) {
            console.log("Erro ao salvar resultado:", erro);
            res.status(500).json({ error: "Erro interno ao salvar resultado." });
        });
}

function buscarUsuario(req, res) {

    var idUsuario = req.params.idUsuario;

    quizModel.buscarUsuario(idUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum usuário encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar suas respostas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    salvarResultado,
    buscarUsuario
}