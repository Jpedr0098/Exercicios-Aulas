"use strict";
function exibirInfos(empregado) {
    return `Nome: ${empregado.nome}, Idade: ${empregado.idade}, 
    Empresa: ${empregado.empresa}, Salário: ${empregado.salario.toFixed(2)}.`;
}
const pessoaCLT = { nome: 'Ana', idade: 17, empresa: 'Cetrus', salario: 1599.90 };
console.log(exibirInfos(pessoaCLT));
