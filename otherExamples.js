var read = require("readline-sync");

var variables = require("./services/variables");
var tryCatch = require("./services/try_catch_finally");
var collections = require("./services/collections");
var expressionAndOperator = require("./services/expressoes_operadores");

console.log(
  "Para o desenvolvimento desse estudo foi utilizado a estrutura de repetição 'Do...while', estrutura condicional Switch...case e funções. As demais explicações estarão presentes no menu de opções abaixo.'\n"
);

do {
  var callback;
  const option = showMenuInformation();
  switch (option) {
    case 1:
      do {
        console.clear();
        variables.explainVariables();
        callback = callbackOption();
      } while (callback == 1);
      console.clear();
      break;
    case 2:
      do {
        console.clear();
        tryCatch.explainTryCatchFinally();
        callback = callbackOption();
      } while (callback == 1);
      console.clear();
      break;
    case 3:
      do {
        console.clear();
        collections.explainCollections();
        callback = callbackOption();
      } while (callback == 1);
      console.clear();
      break;
    case 4:
      do {
        console.clear();
        expressionAndOperator.explainExpressionsAndOperators();
        callback = callbackOption();
      } while (callback == 1);
      console.clear();
      break;

    default:
      break;
  }
} while (callback == 2);

function showMenuInformation() {
  console.log("1 - Explicação dos tipos de variáveis");
  console.log("2 - Explicação do try..catch");
  console.log("3 - Explicação das collections");
  console.log("4 - Explicação das expressões e operadores");
  return parseInt(read.question("Qual explicacao deseja visualizar?"));
}

function callbackOption() {
  return parseInt(
    read.question(
      "Pressione '1' para visualizar a explicacao novamente ou '2' para voltar ao menu: "
    )
  );
}
