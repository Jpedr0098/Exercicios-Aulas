type Pessoa = {
    nome: string;
    idade: number;
};

type Empregado = {
    empresa: string;
    salario: number;
};

type PessoaEmpregada = Pessoa & Empregado;

function exibirInfos(empregado: PessoaEmpregada): string {
    return `Nome: ${empregado.nome}, Idade: ${empregado.idade}, 
    Empresa: ${empregado.empresa}, Salário: ${empregado.salario.toFixed(2)}.`;
}

const pessoaCLT: PessoaEmpregada = { nome: 'Ana', idade: 17, empresa: 'Cetrus', salario: 1599.90 }
console.log(exibirInfos(pessoaCLT))