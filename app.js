const dataBase = require('./dataBaseConection');
//dataBase.CreateDataBase();
//dataBase.CreateTable();


var redlineSync = require('readline-sync');
var option=0;
var nome;
var descricao;
var quantidade;
var id;

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
            nome = redlineSync.question('Digite o nome do produto: ');
            descricao = redlineSync.question('Digite a descricao do produto: ');
            quantidade = parseInt(redlineSync.question('Digite a quantidade de produtos: '));
            dataBase.Insert(nome,descricao,quantidade);    
            
            break;

            case 2:
            console.log("==================Listar todos os produtos==================");
            dataBase.List();
            break;

            case 3:
            console.log("==================Atualizar um produto==================");
            break;

            case 4:
            
            console.log("==================Deletar um produto==================");
            id = parseInt(redlineSync.question('Escolha o id para excluir: '));
            dataBase.Delete(id);
            break;

        default:
            break;
    }

   
          

        
    


