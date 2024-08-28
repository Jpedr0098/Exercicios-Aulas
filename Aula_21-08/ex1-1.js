function exibirProdPag(produto, pagamento) {
    return "Produto: ".concat(produto.Nome, ", Categoria: ").concat(produto.Categoria, ", \n    Pre\u00E7o: R$").concat(produto.Preco.toFixed(2), ", Forma de pagamento: ").concat(pagamento, ".");
}
var produtoExemplo = { Nome: 'celular', Preco: 2000, Categoria: 'Eletrônicos' };
var formaPagamentoExemplo = 'cartão';
console.log(exibirProdPag(produtoExemplo, formaPagamentoExemplo));
