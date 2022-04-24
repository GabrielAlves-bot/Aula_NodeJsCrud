var mysql = require('mysql');


var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "mydb"

});

function CreateDataBase(){
con.connect(function(err){
    if(err) throw err;
     console.log("Conectado");
     con.query("CREATE DATABASE mydb", function(err,result){
         if (err) throw err
         console.log("Banco de dados criado");
})
})
};

function CreateTable(){
    con.connect(function(err) {
        if (err) throw err;
        console.log("Conexão Estabelecida!");
        var sql = "CREATE TABLE produto (id INT AUTO_INCREMENT PRIMARY KEY,nome VARCHAR(255), descricao VARCHAR(255), quantidade int)";
        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log("Tabela Produtos Criada");
        });
      });
}

function Insert(nome,descricao,quantidade){
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        var sql = "INSERT INTO produto (nome, descricao, quantidade) VALUES ?";
        var values = [
            [nome,descricao,quantidade]
        ];
        con.query(sql,[values], function (err, result) {
          if (err) throw err;
          console.log("1 record inserted");
        });
      });
}

module.exports = {
    Insert: Insert,
    CreateDataBase: CreateDataBase,
    CreateTable: CreateTable,
    
  };
