var database = require("../database/config");

// Function que vai inserir no banco
function salvarResultado(acertos, erros, porcentagem, idUsuario,
    acertosHistoria, acertosArtistas, acertosCuriosidades, acertosLetras) {

    var instrucaoSql = `
        INSERT INTO resultado_quiz
        (acertos, erros, porcentagem, fk_usuario,
         acertos_historia, acertos_artistas, acertos_curiosidades, acertos_letras)
        VALUES
        (${acertos}, ${erros}, ${porcentagem}, ${idUsuario},
         ${acertosHistoria}, ${acertosArtistas}, ${acertosCuriosidades}, ${acertosLetras});`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUsuario(idUsuario) {

    var instrucaoSql = `SELECT *
                    FROM resultado_quiz
                    WHERE fk_usuario = ${idUsuario}`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}



module.exports = {
    salvarResultado,
    buscarUsuario
}
