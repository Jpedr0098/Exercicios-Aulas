import { Pedido } from "./Pedido";
import { Cliente } from "./Cliente";

const clienteExemplo = new Cliente('Joger', 'jorginhoZuru@gmail.com');
const pedido = new Pedido(clienteExemplo, 'PC', 4500);

console.log(pedido.exibirPedido());