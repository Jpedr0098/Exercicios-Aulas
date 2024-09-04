"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _2_Financeiro_1 = require("./2_Financeiro");
const orcamentoExemplo = new _2_Financeiro_1.Financeiro.Orcamento(5000, ['Notebook', 'Mouse']);
console.log(orcamentoExemplo.exibirOrcamento());
const valorComImposto = _2_Financeiro_1.Financeiro.calcularImposto(5000, 0.15);
console.log(`Valor com Imposto: R$${valorComImposto.toFixed(2)}`);
const valorComDesconto = _2_Financeiro_1.Financeiro.calcularDesconto(5000, 0.10);
console.log(`Valor com Desconto: R$${valorComDesconto.toFixed(2)}`);
