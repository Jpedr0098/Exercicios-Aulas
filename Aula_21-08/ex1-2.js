function exibirInfos(empregado) {
    return "Nome: ".concat(empregado.nome, ", Idade: ").concat(empregado.idade, ", \n    Empresa: ").concat(empregado.empresa, ", Sal\u00E1rio: ").concat(empregado.salario.toFixed(2), ".");
}
var pessoaCLT = { nome: 'Ana', idade: 17, empresa: 'Cetrus', salario: 1599.90 };
console.log(exibirInfos(pessoaCLT));
