const dataBase = require('./dataBaseConection');
//dataBase.CreateDataBase();
var redlineSync = require('readline-sync');
var option=0;

do {
    console.log("Menu");
    console.log("1 - Criar um produto");
    console.log("2 - Listar todos os produtos");
    console.log("3 - Atualizar um produto");
    console.log("4 - Deletar um produto");
    console.log("5 - Sair");
    option = parseInt(redlineSync.question('Escolha: '));

    switch (option) {
        case 1:
            console.log("==================Criar um produto==================");
            break;

            case 2:
            console.log("==================Listar todos os produtos==================");
            break;

            case 3:
            console.log("==================Atualizar um produto==================");
            break;

            case 4:
            console.log("==================Deletar um produto==================");
            break;

        default:
            break;
    }


} while (option<=4);