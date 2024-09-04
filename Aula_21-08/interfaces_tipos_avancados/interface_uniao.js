"use strict";
function exibirProdPag(produto, pagamento) {
    return `Produto: ${produto.Nome}, Categoria: ${produto.Categoria}, Preço: R$${produto.Preco.toFixed(2)}, Forma de pagamento: ${pagamento}.`;
}
const produtoExemplo = { Nome: 'celular', Preco: 1800.99, Categoria: 'Eletrônicos' };
const formaPagamentoExemplo = 'cartão';
console.log(exibirProdPag(produtoExemplo, formaPagamentoExemplo));
