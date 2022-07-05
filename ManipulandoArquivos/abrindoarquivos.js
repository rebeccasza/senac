var fs = require ('fs');

fs.readFile('./arquivos/texto.md', 'utf-8', function (erro,texto) {
    if (erro) throw erro;
    console.log (texto);
})