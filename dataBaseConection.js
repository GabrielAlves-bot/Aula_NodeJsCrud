var mysql = require('mysql')


var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password"

})

function CreateDataBase(){
con.connect(function(err){
    if(err) throw err;
     console.log("Conectado")
     con.query("CREATE DATABASE mydb", function(err,result){
         if (err) throw err
         console.log("Banco de dados criado")
})
})
}

module.exports = {
    CreateDataBase: CreateDataBase,
  };
  