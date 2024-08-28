interface Produto {
    Nome: string;
    Preco: Number;
    Categoria: string;
}

type FormaPagamento = 'dinheiro' | 'cartão' | 'pix';

function exibirProdPag(produto: Produto, pagamento: FormaPagamento): string {
    return `Produto: ${produto.Nome}, Categoria: ${produto.Categoria}, Preço: R$${produto.Preco.toFixed(2)}, Forma de pagamento: ${pagamento}.`;
}

const produtoExemplo: Produto = { Nome: 'celular', Preco: 2000, Categoria: 'Eletrônicos' };
const formaPagamentoExemplo: FormaPagamento = 'cartão';

console.log(exibirProdPag(produtoExemplo, formaPagamentoExemplo));