/* 
1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.

*/

class Carro {

    marca;
    cor;
    gastoMedioCombustivel;

    constructor(marca,cor,gastoMedioCombustivel){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioCombustivel = gastoMedioCombustivel;
    }

    calcularGastoDePercurso(distanciaEmKm, precoCombustivel){
        return (distanciaEmKm * this.gastoMedioCombustivel) * precoCombustivel;
    }
}



const uno = new Carro('fiat','preto',1/12);
const palio = new Carro('fait', 'prata', 1/10)

console.log(uno.calcularGastoDePercurso(70,5).toFixed(2));
console.log(palio.calcularGastoDePercurso(70,5));