/* Faça um programa  para calcular o valor de uma viagem.

Você terá 3 variáveis . Sendo elas:
1 - Preço do combustível;
2 - Gasto médio de combustível do carro por KM;
3 - Distancia em KM da viagem;

Imprima no console o valor que será gasto de combustive para realizar esta viagem. */ 

const precoCombustivel = 5.79;
const kmPorLitros = 12;
const distanciaEmKm = 1580;

const litrosComsumidos = distanciaEmKm / kmPorLitros;
const gastoTotal = litrosComsumidos * precoCombustivel;

console.log( litrosComsumidos.toFixed(2), gastoTotal.toFixed(2));
