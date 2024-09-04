"use strict";
class Funcionario {
    constructor(nome, cargo, salario) {
        this.nome = nome;
        this.cargo = cargo;
        this.salario = salario;
    }
    descricao() {
        return `Funcionario: ${this.nome}, Cargo: ${this.cargo}, Salario: R$${this.salario.toFixed(2)}`;
    }
}
class Gerente extends Funcionario {
    constructor(nome, cargo, salario, departamento) {
        super(nome, cargo, salario);
        this.departamento = departamento;
    }
    descricaoDetalhada() {
        return `${super.descricao()}, Departamento: ${this.departamento}`;
    }
}
const gerenteExemplo = new Gerente('Gabriel', 'Gerente de TIOPS', 7500, 'Tecnologia/Suporte');
console.log(gerenteExemplo.descricaoDetalhada());
