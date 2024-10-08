class Funcionario {
    constructor(public nome: string, public cargo: string, public salario: number) {}

    descricao(): string{
        return `Funcionario: ${this.nome}, Cargo: ${this.cargo}, Salario: R$${this.salario.toFixed(2)}`;
    }
}

class Gerente extends Funcionario {
    constructor(nome: string, cargo: string, salario: number, public departamento: string) {
        super(nome, cargo, salario);
    }

    descricaoDetalhada(): string {
        return `${super.descricao()}, Departamento: ${this.departamento}`
    }
}

const gerenteExemplo = new Gerente('Gabriel', 'Gerente de TIOPS', 7500, 'Tecnologia/Suporte');

console.log(gerenteExemplo.descricaoDetalhada());