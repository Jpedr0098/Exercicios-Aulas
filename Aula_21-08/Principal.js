"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pedido_1 = require("./Pedido");
var Cliente_1 = require("./Cliente");
var clienteExemplo = new Cliente_1.Cliente('Joger', 'jorginhoZuru@gmail.com');
var pedido = new Pedido_1.Pedido(clienteExemplo, 'PC', 4500);
console.log(pedido.exibirPedido());
