/* Faça um programa  para calcular o valor de uma viagem.

Você terá 5 variáveis . Sendo elas:
1 - Preço do combustível;
2 - Gasto médio de combustível do carro por KM;
3 - O tipo de combustível que está no seu carro;
4 - Gasto médio de combustível do carro por KM;
5 - Distância em KM da viagem;

Imprima no console o valor que será gasto de combustive para realizar esta viagem. */ 

const precoEtanol = 5.79;
const precoGasolina = 6.66;
const gastoMedioPorKm = 10;
const distranciaKm = 800;
const gastoMedioKm = distranciaKm / gastoMedioPorKm;
const tipoCombustivel = 'Etanol';


if (tipoCombustivel === 'Etanol'){
    console.log(gastoMedioKm * precoEtanol);
}else
    console.log(gastoMedioKm * precoGasolina);