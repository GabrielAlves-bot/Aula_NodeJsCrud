var read = require("readline-sync");

module.exports = {
  explainExpressionsAndOperators: function explainExpressionsAndOperators() {
    let num1 = 10;
    const num2 = parseInt(read.question("Informe qualquer numero: "));
    console.log(
      "O operador '+=' realiza uma soma -> " +
        num1 +
        " += " +
        num2 +
        " = " +
        (num1 += num2)
    );
    console.log(
        "O operador '-=' realiza uma subtração -> " +
          num1 +
          " -= " +
          num2 +
          " = " +
          (num1 -= num2)
      );
  },
};
