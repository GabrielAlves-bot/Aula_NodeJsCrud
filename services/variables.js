module.exports = {
  explainVariables: function explainVariables() {
    console.log("var: declaração em escopo global");
    console.log("let: declaração em escopo de bloco");
    console.log(
      "const: declaração em escopo de bloco e necessário inicialização"
    );
  },
};
