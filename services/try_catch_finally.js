module.exports = {
  explainTryCatchFinally: function explainTryCatchFinally() {
    console.log(
      "Estrutura: try{\n\tsome code inside\n}\ncatch(some exception){\n\tsome code inside\n}\nfinally{\n\tsome code inside\n}"
    );
    console.log(
      "\ntry: bloco a ser executado\ncatch: bloco a ser executado caso o try lance alguma exceção\nfinally: bloco a ser executado após o try, independemente de ter lançado exceção ou não"
    );
  },
};
