
import Carro from './Carro'
import Concessionaria from './Concessionaria'
import Pessoa from './Pessoa'



/* criar carros */

let carroA = new Carro('Dodge Journey', 4)
let carroB = new Carro('Veloster', 3)
let carroC = new Carro('Cerato', 4)

/* montar lista de carros */

let listaDeCarros: Carro[] = [carroA, carroB, carroC]
//Carro[] = Array<Carro>

let concessionaria = new Concessionaria('Av Paulista', listaDeCarros)

//exibir a lista de carros:

//console.log(concessionaria.mostrarListaDeCarros())

//comprar o carro:

let cliente = new Pessoa('João', 'Veloster')

concessionaria.mostrarListaDeCarros().map((carro: Carro) => {
    if(carro['modelo'] == cliente.dizerCarroPreferido()){
        cliente.comprarCarro(carro)
    } else {

    }
})

console.log(`O ${cliente.dizerNome()} possui um ${cliente.dizerCarroQueTem().nomeDoCarro()}`)