"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = require("./Carro");
var Concessionaria_1 = require("./Concessionaria");
var Pessoa_1 = require("./Pessoa");
/* criar carros */
var carroA = new Carro_1.default('Dodge Journey', 4);
var carroB = new Carro_1.default('Veloster', 3);
var carroC = new Carro_1.default('Cerato', 4);
/* montar lista de carros */
var listaDeCarros = [carroA, carroB, carroC];
//Carro[] = Array<Carro>
var concessionaria = new Concessionaria_1.default('Av Paulista', listaDeCarros);
//exibir a lista de carros:
//console.log(concessionaria.mostrarListaDeCarros())
//comprar o carro:
var cliente = new Pessoa_1.default('João', 'Veloster');
concessionaria.mostrarListaDeCarros().map(function (carro) {
    if (carro['modelo'] == cliente.dizerCarroPreferido()) {
        cliente.comprarCarro(carro);
    }
    else {
    }
});
console.log("O " + cliente.dizerNome() + " possui um " + cliente.dizerCarroQueTem().nomeDoCarro());
